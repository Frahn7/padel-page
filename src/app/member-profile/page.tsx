"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense, useState } from "react";
import useGetProfile from "../hooks/useGetProfile";
import { FaRegEdit } from "react-icons/fa";
import { Spiner } from "../Components/ui/Spiner";
import { Edits } from "../Components/Edits";
import { FcCancel } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

function Profile() {
  const params = useSearchParams();
  const id = params.get("id");
  const router = useRouter();
  const { loading, user } = useGetProfile({ id: id ? +id : 1 });
  const profile = user[0];
  const [edits, setEdits] = useState(false);
  const [admin, setAdmin] = useState(localStorage.getItem("Admin"));
  const [adminError, setAdminError] = useState("");
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/auth/login");
    }
  }

  if (loading) {
    return <Spiner />;
  }
  const deleteUser = (id: any) => {
    const token = localStorage.getItem("Token");
    fetch(`/api/deleteUser?id=${id}&token=${token}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => router.push("/members"));
  };

  return (
    <div className="pl-4 w-full py-4 min-h-screen">
      <div className="flex flex-row justify-between px-4">
        <IoIosArrowBack
          className="text-[35px] cursor-pointer"
          onClick={() => router.push("/members")}
        />
        {admin === "no" ? null : edits ? (
          <FcCancel
            className="text-[30px] text-blue-500 cursor-pointer"
            onClick={() => setEdits(!edits)}
          />
        ) : (
          <div className="flex flex-row gap-3">
            <FaRegEdit
              className="text-[30px] text-blue-500 cursor-pointer"
              onClick={() => setEdits(!edits)}
            />
            <MdDelete
              onClick={() => deleteUser(id)}
              className="text-[30px] text-red-600 cursor-pointer"
            />
          </div>
        )}
      </div>

      <span>
        <div className="flex justify-center">
          <Image
            alt="/"
            src={profile.image}
            height={150}
            width={150}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center flex-col items-center font-semibold">
          <h1 className="text-[27px] py-4">{profile.name}</h1>
        </div>

        {edits ? (
          <Edits profile={profile} />
        ) : (
          <div className="text-[22px] mt-4 font-semibold px-3 text-gray-400 py-5 space-y-3">
            <div className="flex flex-row justify-between px-5 ">
              <p>
                Altura:{" "}
                <span className="text-white text-[19px]">
                  {" " + profile.height}
                </span>
              </p>
              <p>
                Puntos:{" "}
                <span className="text-white text-[19px]">
                  {profile.points !== null
                    ? profile.points
                    : "No hay puntos registrados"}
                </span>
              </p>
            </div>
            <div className="flex flex-row justify-between px-5 ">
              <p>
                Paleta:{" "}
                <span className="text-white text-[19px]">
                  {" " + profile.racket}
                </span>
              </p>
              <p>
                Sitio en la cancha:{" "}
                <span className="text-white text-[19px]">
                  {" " + profile.site}
                </span>
              </p>
            </div>
            <div className="flex flex-row justify-between px-5 ">
              <p>
                Tipo de jugador:{" "}
                <span className="text-white text-[19px]">
                  {" " + profile.type}
                </span>
              </p>
              <p>
                Victorias:{" "}
                <span className="text-white text-[19px]">
                  {" " + profile.wins}
                </span>
              </p>
            </div>
          </div>
        )}
      </span>
      <div className="flex justify-center">
        <p className="text-red-700">{adminError}</p>
      </div>
    </div>
  );
}

export default function ProfileSuspense() {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
}
