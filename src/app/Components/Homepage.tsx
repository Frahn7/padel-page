"use client";

import Image from "next/image";
import HomePageWalpeper from "../../../public/img/HomePageWalpeper.jpg";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const route = useRouter();

  return (
    <div className="flex flex-row text-white">
      <div className="flex justify-center items-center h-screen flex-col gap-2 w-[45%]">
        <h1 className="text-[35px]">PADEL MAFIA</h1>
        <p className="text-[25px]">
          Bienvenidos a la pagina de padel del M4FI4
        </p>
        <div>
          <Button
            title="Vamos!"
            types="default"
            onClick={() => route.push("/members")}
          />
        </div>
      </div>
      <div className="flex justify-center w-[55%]">
        <Image alt="." src={HomePageWalpeper} className="w-full h-full" />
      </div>
    </div>
  );
}
