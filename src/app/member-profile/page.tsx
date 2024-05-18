"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense, useEffect } from "react";
import useGetProfile from "../hooks/useGetProfile";

function Profile() {
  const params = useSearchParams();
  const id = params.get("id");
  const router = useRouter();
  const { loading, user } = useGetProfile({ id: id ? +id : 1 });
  const profile = user[0];

  if (loading) {
    return (
      <div className="flex justify-center mt-[35px]">
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="pl-4 w-full py-4 min-h-screen">
      <IoIosArrowBack
        className="text-[35px] cursor-pointer"
        onClick={() => router.replace("/members")}
      />

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
