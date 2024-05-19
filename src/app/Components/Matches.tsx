import React from "react";

interface PropsPartidos {
  cancha: string;
  fecha: string;
  jugadores: any;
  set1: string;
  set2: string;
}

export const Matches = ({
  cancha,
  fecha,
  jugadores,
  set1,
  set2,
}: PropsPartidos) => {
  return (
    <div className="min-h-[80px] w-[400px] text-white bg-black border-2 border-white rounded-2xl flex flex-row gap-3 justify-between px-4 items-center pr-[20px]">
      <div className="w-[35%] text-center pr-9">
        <div className="pb-3">{cancha}</div>
        <div className="text-[13px]">{fecha}</div>
      </div>
      <div className="flex flex-col pr-3">
        <p>{jugadores[0]}</p>
        <p>{jugadores[1]}</p>
      </div>
      <p className="px-1">2</p>
      <div className="text-center">
        <p className="text-[20px] my-2">VS</p>
        <p className="text-[13px]">{set1}</p>
        <p className="text-[13px] mb-1">{set2}</p>
      </div>
      <p className="px-2">0</p>
      <div className="flex flex-col pr-2">
        <p>{jugadores[2]}</p>
        <p>{jugadores[3]}</p>
      </div>
    </div>
  );
};
