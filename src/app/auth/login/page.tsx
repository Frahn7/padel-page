"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/app/Components/ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spiner } from "@/app/Components/ui/Spiner";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [Error, setError] = useState("");
  const [active, setActive] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "minimo 1" })
      .max(70, { message: "Pasaste el limite" }),
    password: z
      .string()
      .min(8, { message: "minimo 8" })
      .max(70, { message: "Pasaste el limite" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    setActive(true);

    fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Las contraseñas no coinciden") {
          setError("Las contraseñas no coinciden");
          setActive(false);
          return;
        }
        if (data.message === "no hay correo registrado") {
          setError("No hay correo registrado");
          setActive(false);
          return;
        }

        if (data.message === true) {
          const newToken = data.token;
          const storedToken = localStorage.getItem("Token");
          if (storedToken === null) {
            localStorage.setItem("Token", newToken);
          } else {
            localStorage.setItem("Token", newToken);
          }
          router.push("/members");
        } else return;
      });
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen ">
      <section className="bg-gray-700 dark:bg-gray-800 p-7 rounded-lg">
        <div className="flex justify-center py-4">
          <h1 className="text-[25px]">Inicia sesion para continuar!</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 flex flex-col justify-center items-center "
        >
          <div>
            <label
              htmlFor="correo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo
            </label>
            <input
              type="text"
              id="correo"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 w-[300px] focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("email")}
            />
          </div>
          <p className="text-red-700">{errors.email?.message}</p>
          <div>
            <label
              htmlFor="passw"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contraseña
            </label>
            <input
              id="passw"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 w-[300px] focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password")}
            />
          </div>

          <p className="text-red-700">{errors.password?.message}</p>
          <p className="text-red-700">{Error ? Error : null}</p>
          {active ? (
            <Spiner />
          ) : (
            <Button title="Iniciar sesion" type="submit" types="blue" />
          )}
        </form>
        <p
          className="text-center mt-4 underline cursor-pointer"
          onClick={() => router.push("/auth/register")}
        >
          No tienes cuenta?, Registrate aqui
        </p>
      </section>
    </div>
  );
}
