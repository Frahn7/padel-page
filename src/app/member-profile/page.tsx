"use client";

import { useSearchParams } from "next/navigation";
import useMembersGroup from "../hooks/useMembersGroup";
import Image from "next/image";

export default function Profile() {
  const params = useSearchParams();
  const id = params.get("id");
  const members = useMembersGroup();
  const membersFiltered = members.filter((member) => member.id === id);
  const profile = membersFiltered[0];

  return (
    <div className="px-4 w-full py-4 min-h-screen">
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
        <h1 className="text-[25px] ">{profile.name}</h1>
      </div>
      <div className="flex flex-wrap justify-between flex-row gap-6 text-[30px] font-semibold px-4 text-gray-400">
        <p className="w-[35%]">
          Altura: <span className="text-white">{" " + profile.height}</span>
        </p>
        <p className="w-[35%]">
          Puntos: <span className="text-white">{" " + profile.ptos}</span>
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
    </div>
  );
}
