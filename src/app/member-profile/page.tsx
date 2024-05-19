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

function Profile() {
  const params = useSearchParams();
  const id = params.get("id");
  const router = useRouter();
  const { loading, user } = useGetProfile({ id: id ? +id : 1 });
  const profile = user[0];
  const [edits, setEdits] = useState(false);

  if (loading) {
    return <Spiner />;
  }

  return (
    <div className="pl-4 w-full py-4 min-h-screen">
      <div className="flex flex-row justify-between px-4">
        <IoIosArrowBack
          className="text-[35px] cursor-pointer"
          onClick={() => router.replace("/members")}
        />
        {edits ? (
          <FcCancel
            className="text-[30px] text-blue-500 cursor-pointer"
            onClick={() => setEdits(!edits)}
          />
        ) : (
          <FaRegEdit
            className="text-[30px] text-blue-500 cursor-pointer"
            onClick={() => setEdits(!edits)}
          />
        )}
      </div>

      <span>
        <div className="flex justify-center">
          <Image
            alt="/"
            src={profile.image}
            height={200}
            width={200}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center flex-col items-center font-semibold">
          <h1 className="text-[25px] py-4 underline">{profile.name}</h1>
        </div>

        {edits ? (
          <Edits id={profile.id} />
        ) : (
          <div className="flex flex-wrap justify-between flex-row gap-6 text-[20px] font-semibold px-4 text-gray-400 py-5">
            <p className="w-[33%]">
              Altura: <span className="text-white">{" " + profile.height}</span>
            </p>
            <p className="w-[35%]">
              Puntos:{" "}
              <span className="text-white">
                {profile.points !== null
                  ? profile.points
                  : "No hay puntos registrados"}
              </span>
            </p>
            <p className="w-[35%]">
              Paleta: <span className="text-white">{" " + profile.racket}</span>
            </p>
            <p className="w-[35%]">
              Sitio en la cancha:
              <span className="text-white">{" " + profile.site}</span>
            </p>
            <p className="w-[35%]">
              Tipo de jugador:{" "}
              <span className="text-white">{" " + profile.type}</span>
            </p>
            <p className="w-[35%]">
              Victorias:<span className="text-white">{" " + profile.wins}</span>
            </p>
          </div>
        )}
      </span>
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
