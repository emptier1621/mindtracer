"use client";
import React, { ReactElement, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdLogIn } from "react-icons/io";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Logo from "./Logo";

import NavMenu from "./NavMenu";
import CredentialsMenu from "./CredentialsMenu";


export default function NavBar(): ReactElement {
  const { data: session, status } = useSession();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  if (status === "authenticated") {
    

    return <Navbar
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
  >
    <NavbarContent className="md:hidden" justify="start">
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    </NavbarContent>
    
    <NavbarBrand className="pr-3 md:flex ">
      <Logo />
    </NavbarBrand>
   


    <NavMenu/>


    <CredentialsMenu/>

    

    <NavbarMenu className="overflow-y-hidden">
    <NavMenu/> 
    <NavbarMenuItem className="w-full flex items-center justify-center" >
        <ThemeSwitcher/> 
      </NavbarMenuItem>
    </NavbarMenu>
  </Navbar>
  } else {
    const menuCenter = ["Cómo Funciona", "Pruebas Psicológicas", "Acerca de"];
    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
        
        <NavbarBrand className="pr-3 md:flex ">
          <Logo />
        </NavbarBrand>

        <NavMenu/>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link color="warning" href="/login">
              <IoMdLogIn />
              <p className="ml-2">Login</p>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
              <ThemeSwitcher/>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="overflow-y-hidden">

         <NavMenu/> 

          <NavbarMenuItem className="w-full flex items-center justify-center" >
            <ThemeSwitcher/> 
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}
