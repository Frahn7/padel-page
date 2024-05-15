import Image from "next/image";
import React from "react";

interface PropsCard {
  image?: string;
  name: string;
  height: string;
  racket: string;
}

export const Card = ({
  image = "/img/members/avatarcv.jpg",
  name,
  racket,
  height,
}: PropsCard) => {
  return (
    <div className="px-4 flex flex-row gap-3 w-[30%] border-2 border-blue-600 rounded-xl">
      <Image
        alt="/"
        src={image}
        width={150}
        height={150}
        className="rounded-3xl py-2"
      />
      <div className="text-center self-center flex flex-col text-[18px]">
        <p>
          Nombre: <span className="text-blue-500">{" " + name}</span>
        </p>
        <p>
          Altura: <span className="text-blue-500">{" " + height}</span>
        </p>
        <p>
          Paleta: <span className="text-blue-500">{" " + racket}</span>
        </p>
      </div>
    </div>
  );
};
