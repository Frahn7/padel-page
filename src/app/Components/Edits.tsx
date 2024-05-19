"use client";

import React from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

interface PropsEdits {
  id: number;
}

export const Edits = ({ id }: PropsEdits) => {
  const router = useRouter();

  const edits = {
    height: "",
    points: "",
    raquet: "",
    type: "",
    site: "",
    wins: "",
    id: id,
  };

  const handleSumbit = (e: any) => {
    e.preventDefault();
    fetch("/api/editUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ edits }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => router.replace("/members"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="flex flex-wrap flex-col text-[20px] font-semibold px-4 py-5 space-y-4 justify-center">
        <p className=" text-gray-400">
          Altura:{" "}
          <input
            onChange={(e) => (edits.height = e.target.value)}
            className="text-black px-2"
            type="text"
            name="height"
          />
        </p>
        <p className=" text-gray-400">
          Puntos:{" "}
          <input
            onChange={(e) => (edits.points = e.target.value)}
            className="text-black px-3"
            type="number"
            name="points"
          />
        </p>
        <p className=" text-gray-400">
          Paleta:{" "}
          <input
            onChange={(e) => (edits.raquet = e.target.value)}
            className="text-black px-3"
            type="text"
            name="raquet"
          />
        </p>
        <p className=" text-gray-400">
          Sitio en la cancha:
          <input
            onChange={(e) => (edits.site = e.target.value)}
            className="text-black px-3"
            type="text"
            name="site"
          />
        </p>
        <p className=" text-gray-400">
          Tipo de jugador:{" "}
          <input
            onChange={(e) => (edits.type = e.target.value)}
            className="text-black px-3"
            type="text"
            name="type"
          />
        </p>
        <p className=" text-gray-400">
          Victorias:
          <input
            onChange={(e) => (edits.wins = e.target.value)}
            className="text-black px-3"
            type="number"
            name="wins"
          />
        </p>
      </div>
      <Button title="EDITAR JUGADOR" type="submit" types="blue" />
      <div className="flex justify-center"></div>
    </form>
  );
};
