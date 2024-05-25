"use client";

import { IoIosArrowBack } from "react-icons/io";
import { Matches } from "../Components/Matches";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Historial() {
  const router = useRouter();
  const [mayo, setMayo] = useState(false);
  const Match0 = ["Thiago", "Tomi", "Fran", "Fabra"];
  const Match1 = ["Tomi", "Fran", "Thiago", "Fabra"];
  const Match2 = ["Fran", "Thiago", "Tomi", "Fabra"];
  const Match3 = ["Fran", "Fabra", "Tomi", "Thiago"];
  const Match4 = ["Tomi", "Fran", "Thiago", "Fabra"];
  const Match5 = ["Fran", "Thiago", "Tomi", "Fabra"];
  const Match6 = ["Tomi", "Thiago", "Fran", "Fabra"];
  const Match7 = ["Tomi", "Fran", "Thiago", "Fabra"];

  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/auth/login");
    }
  }

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
        <p
          onClick={() => {
            setMayo(!mayo);
          }}
          className="text-[25px] text-green-500  cursor-pointer"
        >
          {mayo ? "Mayo < " : "Mayo > "}
        </p>
        <div className="flex flex-col gap-4 text-center space-y-2">
          {mayo ? (
            <div className="flex flex-row flex-wrap gap-5 justify-center text-center">
              <Matches
                cancha="Calzada"
                fecha="11-05-2024"
                jugadores={Match0}
                game1="6-4"
                game2="6-0"
                sets="2"
                url="https://www.google.com.ar/maps/place/Ateneo+Parroquial+de+Rafael+Calzada/@-34.7889092,-58.3577988,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32cb8adeda3f9:0xb06f8783a3aa16a0!8m2!3d-34.7889136!4d-58.3552239!16s%2Fg%2F1hcb1vyc4?entry=ttu"
              />
              <Matches
                cancha="Escondida"
                fecha="15-05-2024"
                jugadores={Match1}
                game1="6-3"
                game2="6-2"
                sets="2"
                url="https://www.google.com.ar/maps/place/La+Escondida+F%C3%BAtbol+5+Padel/@-34.7893405,-58.3870661,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd33aea5b66ef:0x6d062e504653c92f!8m2!3d-34.7893449!4d-58.3844912!16s%2Fg%2F1tj9vjhl?entry=ttu"
              />
              <Matches
                cancha="Escondida"
                fecha="19-05-2024"
                jugadores={Match2}
                game1="2-6"
                game2="7-5"
                game3="6-1"
                sets="2-1"
                url="https://www.google.com.ar/maps/place/La+Escondida+F%C3%BAtbol+5+Padel/@-34.7893405,-58.3870661,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd33aea5b66ef:0x6d062e504653c92f!8m2!3d-34.7893449!4d-58.3844912!16s%2Fg%2F1tj9vjhl?entry=ttu"
              />
              <Matches
                cancha="Escondida"
                fecha="19-05-2024"
                jugadores={Match3}
                game1="6-0"
                game2="6-4"
                sets="2"
                url="https://www.google.com.ar/maps/place/La+Escondida+F%C3%BAtbol+5+Padel/@-34.7893405,-58.3870661,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd33aea5b66ef:0x6d062e504653c92f!8m2!3d-34.7893449!4d-58.3844912!16s%2Fg%2F1tj9vjhl?entry=ttu"
              />
              <Matches
                cancha="Escondida"
                fecha="20-05-2024"
                jugadores={Match4}
                game1="6-3"
                game2="6-2"
                sets="2"
                url="https://www.google.com.ar/maps/place/La+Escondida+F%C3%BAtbol+5+Padel/@-34.7893405,-58.3870661,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd33aea5b66ef:0x6d062e504653c92f!8m2!3d-34.7893449!4d-58.3844912!16s%2Fg%2F1tj9vjhl?entry=ttu"
              />
              <Matches
                cancha="Super 33"
                fecha="23-05-2024"
                jugadores={Match5}
                game1="6-2"
                game2="6-4"
                game3="6-1"
                sets="2-1"
                url="https://www.google.com.ar/maps/place/Super+33+F%C3%BAtbol+y+P%C3%A1del/@-34.7844605,-58.4117898,17z/data=!3m1!4b1!4m6!3m5!1s0x95a335fe5b3eb4f3:0x91c6a54608e63439!8m2!3d-34.7844649!4d-58.4092149!16s%2Fg%2F11khcs5dmm?entry=ttu"
              />
              <Matches
                cancha="Super 33"
                fecha="23-05-2024"
                jugadores={Match6}
                game1="6-4"
                game2="6-0"
                game3="6-1"
                sets="2-1"
                url="https://www.google.com.ar/maps/place/Super+33+F%C3%BAtbol+y+P%C3%A1del/@-34.7844605,-58.4117898,17z/data=!3m1!4b1!4m6!3m5!1s0x95a335fe5b3eb4f3:0x91c6a54608e63439!8m2!3d-34.7844649!4d-58.4092149!16s%2Fg%2F11khcs5dmm?entry=ttu"
              />
              <Matches
                cancha="Escondida"
                fecha="24-05-2024"
                jugadores={Match7}
                game1="6-2"
                game2="6-4"
                sets="2-0"
                url="https://www.google.com.ar/maps/place/La+Escondida+F%C3%BAtbol+5+Padel/@-34.7893405,-58.3870661,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd33aea5b66ef:0x6d062e504653c92f!8m2!3d-34.7893449!4d-58.3844912!16s%2Fg%2F1tj9vjhl?entry=ttu"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
