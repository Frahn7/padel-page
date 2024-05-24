"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/app/Components/ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spiner } from "@/app/Components/ui/Spiner";

interface Inputs {
  name: string;
  mail: string;
  password: string;
  repeatPassword: string;
}

const Schema: any = z
  .object({
    name: z.string().min(1, { message: "Minimo 1 caracter" }).max(50, {
      message: "Maximo 50 caracteres",
    }),
    mail: z
      .string()
      .min(1, {
        message: "Minimo 1 caracter",
      })
      .max(50, {
        message: "Maximo 50 caracteres",
      })
      .email(),
    password: z
      .string()
      .min(8, {
        message: "Minimo 8 caracteres",
      })
      .max(50, {
        message: "Maximo 50 caracteres",
      }),
    repeatPassword: z
      .string()
      .min(8, {
        message: "Minimo 8 caracteres",
      })
      .max(50, {
        message: "Maximo 50 caracteres",
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"],
  });

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      mail: "",
      password: "",
      repeatPassword: "",
    },
    resolver: zodResolver(Schema),
  });

  const [error, setError] = useState({
    email: "",
    backend: "",
  });
  const router = useRouter();
  const [active, setActive] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const user = {
      mail: data.mail,
      name: data.name,
      password: data.password,
    };

    setActive(true);

    fetch("/api/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "El correo ya está en uso") {
          const dataError = {
            email: data.message,
            backend: "",
          };
          setError(dataError);
          setActive(false);
        } else if (data.message === "Error al crear usuario") {
          const dataError = {
            email: "",
            backend: data.message,
          };
          setError(dataError);
          setActive(false);
        } else router.push("/auth/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="min-h-screen py-4 flex flex-col items-center justify-center text-center">
      <section className="bg-gray-700 dark:bg-gray-800 p-7 rounded-lg">
        <h1 className="text-[25px] ">Registrate!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-7 min-w-[400px]"
        >
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("name")}
            />
            <p className="text-red-600">{errors.name?.message}</p>
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              {...register("mail")}
            />
            <p className="text-red-600">{errors.mail?.message}</p>
            <p className="text-red-600">{error.email}</p>
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Contraseña
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              {...register("password")}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Repite tu contraseña
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              {...register("repeatPassword")}
            />
            <p className="text-red-600">{errors.repeatPassword?.message}</p>
          </div>

          <div className="flex justify-center">
            {active ? (
              <Spiner />
            ) : (
              <Button title="Iniciar sesion" type="submit" types="blue" />
            )}
          </div>
        </form>
        <p className="text-red-600">{error.backend}</p>
        <p
          className="text-center mt-4 underline cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Ya tienes cuenta?, Inicia sesion
        </p>
      </section>
    </div>
  );
}
