import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const ProtectedPage = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-[25px]">Para continuar identifiquese! :D </h1>
      <div className="flex gap-4">
        <p
          className="text-center mt-4 cursor-pointer underline"
          onClick={() => router.push("/auth/login")}
        >
          Inicia sesion
        </p>
        <p className="text-center mt-4 cursor-pointer">/</p>
        <p
          className="text-center mt-4 cursor-pointer underline"
          onClick={() => router.push("/auth/login")}
        >
          Registrate
        </p>
      </div>
    </div>
  );
};
