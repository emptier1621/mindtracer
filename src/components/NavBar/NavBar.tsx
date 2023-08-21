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
import NavSkeleton from "./NavSkeleton";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavCredentials from "./NavCredentials";
import { NavThemeSwitch } from "./NavThemeSwitcher";
import { useRouter } from "next/navigation";


export default function NavBar(): ReactElement {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("Cómo Funciona");
  const router = useRouter()

  console.log(status);
  if (status === "loading") {
    return (
      <NavSkeleton/>
    );
  }
  if (status === "authenticated") {
    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavLogo/>
        <NavMenu />
        <NavCredentials router={router} />
        <NavbarMenu className="overflow-y-hidden">
          <NavMenu />
          <NavbarMenuItem className="w-full flex items-center justify-center">
            <NavThemeSwitch />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  } else {
    const menuItems = ["Cómo Funciona", "Pruebas Psicológicas", "Acerca de"];
   

    const handleActiveSection = (item: string) => {
      setActiveBtn(item);
    };
    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavLogo/>
        <NavMenu />
        <NavCredentials router={router}/>
        <NavbarMenu className="overflow-y-hidden">
          <NavMenu />
          <NavbarMenuItem className="w-full flex items-center justify-center">
            
            <NavbarContent className=" flex-col md:flex gap-4 w-full items-center justify-center" justify="center">
    {menuItems.map((item,index) => {
      const active: boolean = item === activeBtn ? true : false;
      const path = item.replace(" ","")
      return (
        <NavbarItem key={`${item}-${index}`} isActive={active}>
          <Link
            className={`hover:scale-95 transition-shadow ${active?"text-success":""}`}
            color={active ? "success" : "foreground"}
            onClick={() => handleActiveSection(item)}
            href={`/#${path}`}
          >
            {item}
          </Link>
        </NavbarItem>
      );
    })} 
    <NavThemeSwitch />
  </NavbarContent>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}
