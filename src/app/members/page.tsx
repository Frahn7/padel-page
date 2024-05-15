"use client";

import { useState } from "react";
import { Card } from "../Components/Card";

const MembersGrup = () => [
  {
    name: "Francisco Villella",
    image: "/img/members/Francv.jpg",
    racket: "SNAUWAERT NITROX",
    height: "1,60",
  },
  {
    name: "Thiago Valdiviezo",
    image: "/img/members/thiagocv.jpg",
    racket: "CIGIO ANKARA",
    height: "1,70",
  },
  {
    name: "Tomas Canosa",
    image: "/img/members/tomicv.png",
    racket: "CIGIO RIAD",
    height: "1,70",
  },
  {
    name: "Lucas Torres",
    image: "/img/members/lucascv.jpg",
    racket: "QUICK FLEX 40",
    height: "1,96",
  },
  {
    name: "Fabrizio Ottone",
    image: "/img/members/fabricv.jpg",
    racket: "SNAUWAERT BX3",
    height: "1,80",
  },
  {
    name: "Carlos brandan",
    image: "/img/members/carloscv.jpg",
    racket: "NO POSEE",
    height: "1,89",
  },
];

const MappedMembers = MembersGrup().map((member) => {
  return { ...member };
});

export default function Members() {
  const [filterMembers, setFilterMembers] = useState("");

  const Players = !filterMembers
    ? MappedMembers
    : MappedMembers.filter(
        (member) =>
          member.name.toUpperCase().includes(filterMembers.toUpperCase()) ||
          member.height.toUpperCase().includes(filterMembers.toUpperCase()) ||
          member.racket.toUpperCase().includes(filterMembers.toUpperCase())
      );

  return (
    <div className="min-h-screen px-4 py-4">
      <div className="flex justify-center">
        <h1 className="text-[35px]">PADEL MAFIA</h1>
      </div>
      <div className="flex justify-center py-4">
        <label htmlFor="members" className="flex flex-col text-center">
          Buscar jugadores
          <input
            type="text"
            name="members"
            onChange={(e) => setFilterMembers(e.target.value)}
            className="text-gray-300 bg-gray-700"
          />
        </label>
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-4 py-3">
        {Players.map((member, i) => (
          <Card
            key={i}
            height={member.height}
            name={member.name}
            racket={member.racket}
            image={member?.image}
          />
        ))}
      </div>
    </div>
  );
}
