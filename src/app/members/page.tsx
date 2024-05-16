"use client";

import { useState } from "react";
import { Card } from "../Components/Card";
import useMembersGroup from "../hooks/useMembersGroup";
import { Input } from "../Components/ui/Input";
import { useRouter } from "next/navigation";

export default function Members() {
  const [filterMembers, setFilterMembers] = useState("");
  const MappedMembers = useMembersGroup();
  const router = useRouter();

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
        <Input onChange={(e) => setFilterMembers(e.target.value)} />
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
