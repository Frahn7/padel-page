"use client";

import { useState } from "react";
import { Card } from "../Components/Card";
import useMembersGroup from "../hooks/useMembersGroup";
import { InputSearch } from "../Components/ui/InputSearch";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../Components/ui/Button";
import { IoIosArrowBack } from "react-icons/io";

export default function Members() {
  const [filterMembers, setFilterMembers] = useState("");
  const { loading, players } = useMembersGroup();
  const router = useRouter();

  console.log(players);

  const Players = !filterMembers
    ? players
    : players.filter(
        (member) =>
          member.name.toUpperCase().includes(filterMembers.toUpperCase()) ||
          member.height.toUpperCase().includes(filterMembers.toUpperCase()) ||
          member.racket.toUpperCase().includes(filterMembers.toUpperCase())
      );

  if (loading) {
    return "Cargando...";
  }

  return (
    <div className="min-h-screen px-4 py-4">
      <IoIosArrowBack
        className="text-[35px] cursor-pointer"
        onClick={() => router.replace("/")}
      />
      <div className="flex justify-end  px-3 text-[18px]">
        <Button
          title="Historial"
          types="blue"
          onClick={() => router.push("/historial")}
        />
        <Button
          title="Agregar jugador"
          types="dark"
          onClick={() => router.push("/add-player")}
        />
      </div>
      <div className="flex justify-center  mt-4">
        <Image
          alt="/"
          onClick={() => router.push("/")}
          src={"/img/Logo.png"}
          height={150}
          width={150}
          className="cursor-pointer border-2 rounded-xl"
        />
      </div>
      <div className="mt-8 text-center text-[30px]  font-semibold text-gray-500">
        <p>Miembros del grupo</p>
      </div>
      <div className="flex justify-center py-7">
        <InputSearch onChange={(e) => setFilterMembers(e.target.value)} />
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-4 py-3">
        {Players.map((member, i) => (
          <Card
            onClick={() => router.push(`/member-profile?id=${member.id}`)}
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
