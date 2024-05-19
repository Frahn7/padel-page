"use client";

import React from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

interface PropsEdits {
  profile: PropsProfile;
}

interface PropsProfile {
  id: number;
  name: string;
  image: string;
  site: string;
  racket: string;
  height: string;
  points: any;
  wins: number;
  type: string;
}

export const Edits = ({ profile }: PropsEdits) => {
  const router = useRouter();

  const edits = {
    height: "",
    points: "",
    raquet: "",
    type: "",
    site: "",
    wins: "",
    id: profile.id,
  };

  const handleSumbit = (e: any) => {
    e.preventDefault();

    const ProfileUpdate = {
      height: edits.height === "" ? profile.height : edits.height,
      points: edits.points === "" ? profile.points : edits.points,
      raquet: edits.raquet === "" ? profile.racket : edits.raquet,
      type: edits.type === "" ? profile.type : edits.type,
      site: edits.site === "" ? profile.site : edits.site,
      wins: edits.wins === "" ? profile.wins : edits.wins,
      id: profile.id,
    };

    fetch("/api/editUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProfileUpdate),
    })
      .then((res) => res.json())
      .finally(() => router.push("/members"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="text-[20px] font-semibold px-4 py-5 space-y-4">
        <div className="flex flex-row justify-between px-4">
          <p className=" text-gray-400">
            Altura:{" "}
            <input
              placeholder="Actualizar altura"
              onChange={(e) => (edits.height = e.target.value)}
              className="text-black px-2"
              type="text"
              name="height"
            />
          </p>
          <p className=" text-gray-400">
            Puntos:{" "}
            <input
              placeholder="Actualizar puntos"
              onChange={(e) => (edits.points = e.target.value)}
              className="text-black px-3"
              type="number"
              name="points"
            />
          </p>
        </div>
        <div className="flex flex-row justify-between px-4">
          <p className=" text-gray-400">
            Paleta:{" "}
            <input
              placeholder="Actualizar paleta"
              onChange={(e) => (edits.raquet = e.target.value)}
              className="text-black px-3"
              type="text"
              name="raquet"
            />
          </p>
          <p className=" text-gray-400">
            Sitio en la cancha:
            <input
              placeholder="Actualizar sitio"
              onChange={(e) => (edits.site = e.target.value)}
              className="text-black px-3"
              type="text"
              name="site"
            />
          </p>
        </div>
        <div className="flex flex-row justify-between px-4">
          <p className=" text-gray-400">
            Tipo de jugador:{" "}
            <input
              placeholder="Actualizar tipo"
              onChange={(e) => (edits.type = e.target.value)}
              className="text-black px-3"
              type="text"
              name="type"
            />
          </p>
          <p className=" text-gray-400">
            Victorias:
            <input
              placeholder="Actualizar victorias"
              onChange={(e) => (edits.wins = e.target.value)}
              className="text-black px-3"
              type="number"
              name="wins"
            />
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button title="EDITAR JUGADOR" type="submit" types="blue" />
      </div>
    </form>
  );
};
