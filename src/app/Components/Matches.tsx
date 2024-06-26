import React from "react";

interface PropsPartidos {
  cancha: string;
  fecha: string;
  jugadores: any;
  game1: string;
  game2: string;
  game3?: string;
  sets: string;
  url?: string;
}

export const Matches = ({
  cancha,
  fecha,
  jugadores,
  game1,
  game2,
  game3,
  sets,
  url,
}: PropsPartidos) => {
  const PuntosSets = sets.split("-");

  return (
    <div className="min-h-[130px] w-[400px] text-white bg-black border-2 border-white rounded-2xl flex flex-row gap-3 justify-between px-4 items-center pr-[20px]">
      <div className="w-[35%] text-center pr-9">
        <a href={url} target="_blank" className="cursor-pointer underline">
          <div className="pb-3">{cancha}</div>
        </a>
        <div className="text-[13px]">{fecha}</div>
      </div>
      <div className="flex flex-col pr-3">
        <p>{jugadores[0]}</p>
        <p>{jugadores[1]}</p>
      </div>
      <p className="px-1">{PuntosSets[0]}</p>
      <div className="text-center">
        <p className="text-[20px] my-2">VS</p>
        <p className="text-[13px]">{game1}</p>
        <p className="text-[13px] mb-1">{game2}</p>
        <p className="text-[13px] mb-1">{game3}</p>
      </div>
      <p className="px-2">{PuntosSets[1] ? PuntosSets[1] : 0}</p>
      <div className="flex flex-col pr-2">
        <p>{jugadores[2]}</p>
        <p>{jugadores[3]}</p>
      </div>
    </div>
  );
};
