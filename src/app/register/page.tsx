import React, { ReactElement } from "react";
import Btn from "../components/Btn";
import Inp from "../components/Inp";
import NavBar from "../components/NavBar";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Registro(): ReactElement {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <NavBar></NavBar>
      <h2 className="mt-32 md:mt-24 text-3xl mb-3 transform transition text-pink-600 font-bold cursor-pointer flex items-center font-serif">
        Regístrate <AiOutlineUserAdd></AiOutlineUserAdd>{" "}
      </h2>
      <form className="flex flex-col gap-3 w-full justify-center items-center px-20 overflow-y-auto">
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
