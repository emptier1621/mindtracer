import React from "react";
import { InpProps } from "../../../types/utils";

export default function Inp(props: InpProps) {
  switch (props.name) {
    case "genero":
      return (
        <div className="flex flex-col my-2 justify-center items-center w-full hover:scale-105 transition">
          <label className="text-xl" htmlFor={props.name}>
            {props.text}
          </label>
          <select
            required
            name={props.name}
            className="w-96 text-center focus p-2 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black"
          >
            <option selected> -- Seleccione un género -- </option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
      );
    case "grado":
      return (
        <div className="flex my-2 flex-col justify-center items-center w-full hover:scale-105 transition">
          <label className="text-xl" htmlFor={props.name}>
            {props.text}
          </label>
          <input
            placeholder={props.placeholder}
            required
            type={props.type}
            name={props.name}
            className="focus text-center w-96 p-2 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black"
            min={1}
            max={5}
          />
        </div>
      );
    case "edad":
      return (
        <div className="flex my-2 flex-col justify-center items-center w-full hover:scale-105 transition">
          <label className="text-xl" htmlFor={props.name}>
            {props.text}
          </label>
          <input
            placeholder={props.placeholder}
            required
            type={props.type}
            name={props.name}
            className="focus text-center w-96 p-2 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black"
            min={11}
            max={25}
          />
        </div>
      );
    default:
      return (
        <div className="flex  flex-col my-2 justify-center items-center w-full hover:scale-105 transition">
          <label className="text-xl" htmlFor={props.name}>
            {props.text}
          </label>
          <input
            placeholder={props.placeholder}
            required
            type={props.type}
            name={props.name}
            className="focus text-center p-2 w-96 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black"
          />
        </div>
      );
  }
}
