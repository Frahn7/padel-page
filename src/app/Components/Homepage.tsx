"use client";

import Image from "next/image";
import HomePageWalpeper from "../../../public/img/HomePageWalpeper.jpg";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useSize } from "../hooks/useSize";

export default function Homepage() {
  const router = useRouter();
  const { windowSize } = useSize();

  const classNameBG =
    windowSize.width > 768
      ? "flex flex-row text-white bg-home-page"
      : "flex flex-row text-white bg-black";
  return (
    <div className={classNameBG}>
      <div className="flex justify-center items-center h-screen flex-col gap-2 md:w-[45%]">
        <Image
          alt="/"
          onClick={() => router.push("/")}
          src={"/img/Logo.png"}
          height={150}
          width={150}
          className="cursor-pointer border-2 rounded-xl"
        />

        <p className="text-[20px] py-7 text-center px-4">
          Bienvenidos a la pagina de padel del M4FI4 en la que veras los datos
          de cada jugador del grupo
        </p>
        <div>
          <Button
            title="Vamos!"
            types="default"
            onClick={() => router.push("/auth/login")}
          />
        </div>
      </div>
      {windowSize.width >= 768 ? (
        <div className="flex justify-center w-[55%]">
          <Image alt="." src={HomePageWalpeper} className="w-full h-full" />
        </div>
      ) : null}
    </div>
  );
}
