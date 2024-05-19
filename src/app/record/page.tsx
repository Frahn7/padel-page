"use client";

import { IoIosArrowBack } from "react-icons/io";
import { Matches } from "../Components/Matches";
import { useRouter } from "next/navigation";

export default function Historial() {
  const router = useRouter();

  const Match0 = ["Thiago", "Tomi", "Fran", "Fabra"];
  const Match1 = ["Tomi", "Fran", "Thiago", "Fabra"];
  const Match2 = ["Fran", "Thiago", "Tomi", "Fabra"];
  const Match3 = ["Fran", "Fabra", "Tomi", "Thiago"];

  return (
    <div className="px-4 flex justify-center flex-col py-4 ">
      <IoIosArrowBack
        className="text-[35px] cursor-pointer"
        onClick={() => router.push("/members")}
      />
      <div className="text-center text-[30px] font-semibold text-gray-500">
        <p>Historial</p>
      </div>
      <div className="flex items-center py-8 flex-col gap-3">
        <Matches
          cancha="Calzada"
          fecha="11-05-2024"
          jugadores={Match0}
          game1="6-4"
          game2="6-0"
          sets="2"
        />
        <Matches
          cancha="Escondida"
          fecha="15-05-2024"
          jugadores={Match1}
          game1="6-3"
          game2="6-2"
          sets="2"
        />
        <Matches
          cancha="Escondida"
          fecha="19-05-2024"
          jugadores={Match2}
          game1="2-6"
          game2="7-5"
          game3="6-1"
          sets="2-1"
        />
        <Matches
          cancha="Escondida"
          fecha="19-05-2024"
          jugadores={Match3}
          game1="6-0"
          game2="6-4"
          sets="2"
        />
      </div>
    </div>
  );
}
