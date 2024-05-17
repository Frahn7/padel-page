"use client";

import { IoIosArrowBack } from "react-icons/io";
import { Partidos } from "../Components/Partidos";
import { useRouter } from "next/navigation";

export default function Historial() {
  const router = useRouter();
  const Players = ["Tomi", "Fran", "Thiago", "Fabra"];

  return (
    <div className="px-4 flex justify-center flex-col py-4 ">
      <IoIosArrowBack
        className="text-[35px] cursor-pointer"
        onClick={() => router.replace("/members")}
      />
      <div className="text-center text-[30px] font-semibold text-gray-500">
        <p>Historial</p>
      </div>
      <div className="flex items-center py-8 flex-col gap-3">
        <Partidos
          cancha="Escondida"
          fecha="15-05-2024"
          jugadores={Players}
          set1="6-3"
          set2="6-2"
        />
      </div>
    </div>
  );
}
