"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

type Inputs = {
  name: string;
  height: string;
  racket: string;
  type: string;
  points: number;
  site: string;
  wins: number;
};

export default function AddPlayer() {
  const router = useRouter();

  const userSchema = z.object({
    name: z.string().min(5, { message: "Minimo 5 caracteres" }).max(50, {
      message: "Pasaste el limite de caracteres",
    }),
    height: z.string().min(3, { message: "Minimo 3 caracteres" }).max(50, {
      message: "Pasaste el limite de caracteres",
    }),
    racket: z.string().min(5, { message: "Minimo 5 caracteres" }).max(50, {
      message: "Pasaste el limite de caracteres",
    }),
    type: z.string().min(5, { message: "Minimo 5 caracteres" }).max(50, {
      message: "Pasaste el limite de caracteres",
    }),
    points: z.coerce.number().min(0).max(8, {
      message: "Pasaste el limite de puntos",
    }),
    site: z.string().min(5, { message: "Minimo 5 caracteres" }).max(50, {
      message: "Pasaste el limite de caracteres",
    }),
    wins: z.coerce.number().min(0).max(8, {
      message: "Pasaste el limite de victorias",
    }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      height: "",
      points: 0,
      racket: "",
      site: "",
      type: "",
      wins: 0,
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/insertUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        height: data.height,
        name: data.name,
        points: data.points,
        racket: data.racket,
        site: data.site,
        wins: data.wins,
        type: data.type,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => router.push("/members"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className=" min-h-screen">
        <div>
          <IoIosArrowBack
            className="text-[35px] cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-[550px] bg-gray-800 rounded-3xl"
          >
            <div className="p-4 space-y-4 ">
              <h1 className="text-[25px] mb-10 text-center ">
                Agrega tu jugador
              </h1>
              <div className="flex flex-row justify-center gap-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                  <input
                    type="text"
                    {...register("name")}
                    aria-describedby="helper-text-explanation"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.name?.message}</p>
                </label>
                <label
                  htmlFor="height"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Altura
                  <input
                    type="text"
                    {...register("height")}
                    aria-describedby="helper-text-explanation"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.height?.message}</p>
                </label>
              </div>
              <div className="flex flex-row justify-center gap-3">
                <label
                  htmlFor="points"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Puntos
                  <input
                    value={0}
                    type="number"
                    {...register("points")}
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.points?.message}</p>
                </label>
                <label
                  htmlFor="racket"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Raqueta
                  <input
                    type="text"
                    {...register("racket")}
                    aria-describedby="helper-text-explanation"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.racket?.message}</p>
                </label>
              </div>

              <div className="flex flex-row justify-center gap-3">
                <label
                  htmlFor="site"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lugar en la cancha
                  <input
                    type="text"
                    {...register("site")}
                    aria-describedby="helper-text-explanation"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.site?.message}</p>
                </label>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tipo de jugador
                  <input
                    type="text"
                    {...register("type")}
                    aria-describedby="helper-text-explanation"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.type?.message}</p>
                </label>
              </div>
              <div className="flex flex-row justify-start px-9">
                <label
                  htmlFor="wins"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Victorias
                  <input
                    value={0}
                    type="number"
                    {...register("wins")}
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe tu nombre"
                  />
                  <p className="text-red-700">{errors.wins?.message}</p>
                </label>
              </div>
              <div className="w-full text-center">
                <Button
                  title="Registrar Jugador"
                  type="submit"
                  types="blue"
                  className=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
