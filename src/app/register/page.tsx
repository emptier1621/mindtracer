"use client";
import React, { FormEvent, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Inp from "@/components/Inp";
import Btn from "@/components/Btn";
import NavBar from "@/components/NavBar/NavBar";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const password = formData.get("password")
      const repassword = formData.get('repassword')
      if( password === repassword ){
        const axiosResponse = await axios.post("/api/auth/signup", {
          nombreCompleto: formData.get("nombreCompleto"),
          genero: formData.get("genero"),
          grado: formData.get("grado"),
          password: password,
          email: formData.get("email"),
          edad: formData.get("edad")
        });
        setError((await axiosResponse).statusText)
        if(error === "") {
          const res = await signIn('credentials', {
            email: axiosResponse.data.email,
            password: formData.get("password"),
            redirect: false
          })

          console.log(res)

          if(res?.ok) return router.push("/dashboard")
        }
      }else{
        const errorMessage = "Las contraseñas no coinciden."
        setError(errorMessage)
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      } else {
        setError(String(error));
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <h2 className="mt-32 md:mt-24 text-3xl mb-3 transform transition text-pink-600 font-bold cursor-pointer flex items-center font-serif">
        Regístrate <AiOutlineUserAdd></AiOutlineUserAdd>{" "}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full justify-center items-center px-20 overflow-y-auto"
      >
        {error && <p className="mt-10 text-red-500">{error}</p>}

        <div className="mb-4 mt-10 md:mt-0 w-full flex flex-col items-center md:flex-row md:w-full">
          <div className="w-full md:w-1/2">
            <Inp
              text="Nombre completo"
              type="text"
              placeholder="ej. Pedro Peréz Quispe"
              name="nombreCompleto"
            />
            <Inp
              text="Género"
              type="genero"
              placeholder="Seleccione un género... "
              name="genero"
            />
            <Inp
              text="Grado"
              type="number"
              placeholder="Ej. 1, 2, 3 , 4 o 5"
              name="grado"
            />
            <Inp
              text="Edad"
              type="number"
              placeholder="Ej. 11, 12 ,13, etc."
              name="edad"
            />
          </div>
          <div className="w-full flex-col items-center md:w-1/2">
            <Inp
              text="Correo electrónico"
              type="email"
              placeholder="Ej. alguien@email.com"
              name="email"
            />
            <Inp
              text="Contraseña"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
            <Inp
              text="Confirme su contraseña"
              type="password"
              name="repassword"
              placeholder="Confirme su contraseña"
            />
          </div>
        </div>
        <div className="flex h-full w-full justify-center">
          <Btn text="Guardar" type="submit" />
          <Btn text="Cancelar" type="home" />
        </div>
      </form>
    </div>
  );
}
