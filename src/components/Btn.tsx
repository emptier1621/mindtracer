import React, { ReactElement } from "react";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import { AiTwotoneSave, AiOutlineRollback } from "react-icons/ai";
import { FormBtnProps } from "../../types/utils";
import { signOut } from "next-auth/react";

export default function Btn(props: FormBtnProps): ReactElement {
  switch (props.type) {
    case "submit":
      return (
        <div className="relative group mx-2 mt-2 mb-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />

          <button
            type="submit"
            className="relative w-40 py-4 bg-blue-600 text-white rounded-lg leading-none flex justify-center items-center hover:cursor-pointer transform hover:scale-105 transition duration-500"
          >
            <AiTwotoneSave />
            <p className="pl-2 text-xl text-center shadow-2xl cursor-pointer">
              {props.text}
            </p>
          </button>
        </div>
      );
    case "home":
      return (
        <div className="relative group mx-2 mt-2 mb-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />
          <a
            href="/"
            type="submit"
            className="relative w-40 py-4 text-white bg-red-600 rounded-lg leading-none flex justify-center items-center hover:cursor-pointer transform hover:scale-105 transition duration-500"
          >
            <AiOutlineRollback></AiOutlineRollback>
            <p className="pl-2 text-xl text-center shadow-2xl cursor-pointer">
              Home
            </p>
          </a>
        </div>
      );
    case "tat":
      return (
        <div className="relative group mx-3 mt-4">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />

          <Link
            href="/Tat"
            type="submit"
            className="relative px-6 py-3 bg-black text-white rounded-lg leading-none flex justify-center items-center divide-x divide-gray-600 hover:cursor-pointer transform hover:scale-105 transition duration-500"
          >
            <p className="text-3xl pb-1 text-center shadow-2xl cursor-pointer">
              {props.text}
            </p>
          </Link>
        </div>
      );
    case "idb":
      return (
        <div className="relative group mx-3 mt-4">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />

          <Link
            href="/Idb"
            type="submit"
            className="relative px-6 py-3 bg-black text-white rounded-lg leading-none flex justify-center items-center divide-x divide-gray-600 hover:cursor-pointer transform hover:scale-105 transition duration-500"
          >
            <p className="text-3xl pb-1 text-center shadow-2xl cursor-pointer">
              {props.text}
            </p>
          </Link>
        </div>
      );
    case "login":
      return (
        <Link
          className="flex w-24 items-center justify-center text-white border border-white font-sans py-1 px-4 pb-2 rounded hover:scale-105 hover:bg-pink-700 duration-500 md:w-32 md:mx-5"
          href="/login"
        >
          <IoMdLogIn className="mr-2" />
          {props.text}
        </Link>
      );
    case "logout":
      return (
        <button
          className="flex w-max items-center text-sm justify-center text-white border border-white py-1 px-4 pb-2 rounded hover:scale-105 hover:bg-pink-700 duration-500 md:w-32 md:mx-5"
          onClick={() => signOut()}
        >
          <IoMdLogIn className="mr-2 scale-150" />
          {props.text}
        </button>
      );
    default:
      return <p>El tipo no existe...</p>;
  }
}
