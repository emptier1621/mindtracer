"use client";
import React, { ReactElement } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { IoIosPerson, IoMdPerson } from "react-icons/io";

export default function NavBar(): ReactElement {
  const { data: session, status } = useSession();

  const handleLogin = ()=>{
    signOut()
  }

  if (status === "authenticated") {
    return (
      <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Logo/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={true}>
          <Link href="#" color="secondary" className="border-secondary" aria-current="page">
          TAT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          BDI-2
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <ThemeSwitcher/>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/dashboard/profile">
            <IoMdPerson className="mr-2"/>
            {session.user?.nombreCompleto}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={handleLogin} color="danger" href="#" variant="flat">
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    );
  } else {
    return (
      <nav className="shadow-md z-40 fixed w-full top-0 left-0 border-b-2 border-pink-600">
        
      </nav>
    );
  }
}
