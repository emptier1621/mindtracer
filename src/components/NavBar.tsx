"use client";
import { ReactElement, useState } from "react";
import { IoIosMenu, IoIosCloseCircle, IoMdContact } from "react-icons/io";
import Btn from "./Btn";
import Logo from "./Logo";
import { Link } from "../../types/utils";
import { useSession } from "next-auth/react";

export default function NavBar(): ReactElement {
  const links: Link[] = [
    { name: "Regístrate", link: "/register" },
    { name: "Contacto", link: "https://github.com/emptier1621" },
  ];
  const [mobileBtnState, setMobileBtnState] = useState(false);
  const { data: session, status } = useSession();
  const userLoged: string | undefined = session?.user.nombreCompleto

  if (status === "authenticated" && userLoged) {
    return (
      <nav className="shadow-md h-24 z-40 fixed w-full top-0 left-0 border-b-2 border-pink-600">
        <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
          <Logo />
          <div
            onClick={() => setMobileBtnState(!mobileBtnState)}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden">
            {mobileBtnState ? <IoIosCloseCircle /> : <IoIosMenu />}
          </div>
          <ul className={`md:flex md:items-center bg-black md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              mobileBtnState ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100`}>
            <li key={session.user?.email} className="md:ml-8 text-xl md:my-0 my-7">
              <a href='/dashboard/profile' className="text-pink-600 flex hover:text-white duration-500" rel="noreferrer">
                <IoMdContact className='h-full flex items-center self-center'/>
                <p className="mx-2 flex h-auto pb-1 items-center justify-center">{userLoged}</p>
              </a>
            </li>
            <Btn text="Cerrar sesión" type="logout" />
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="shadow-md z-40 fixed w-full top-0 left-0 border-b-2 border-pink-600">
        <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
          <Logo />
          <div
            onClick={() => setMobileBtnState(!mobileBtnState)}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
          >
            {mobileBtnState ? <IoIosCloseCircle /> : <IoIosMenu />}
          </div>
          <ul
            className={`md:flex md:items-center bg-black md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              mobileBtnState ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100`}
          >
            {links.map((link: Link): ReactElement => {
              return (
                <li key={link.link} className="md:ml-8 text-xl md:my-0 my-7">
                  <a
                    href={link.link}
                    target="_blank"
                    className="text-pink-600 hover:text-white duration-500"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <Btn text="Login" type="login" />
          </ul>
        </div>
      </nav>
    );
  }
}
