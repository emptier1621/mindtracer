"use client";
import React, { ReactElement, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdCreate, IoMdLogIn, IoMdLogOut, IoMdMenu, IoMdPerson } from "react-icons/io";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Logo from "./Logo";

export default function NavBar(): ReactElement {
  const { data: session, status } = useSession();
  const [activeBtn, setActiveBtn] = useState("Cómo Funciona");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleActiveSection = (item: string) => {
    setActiveBtn(item);
    console.log("clic")
  };

  const handleLogOutClick = () => {
    signOut();
  };

  if (status === "authenticated") {
    const menuCenter = ["Cómo Funciona", "Pruebas Psicológicas", "Acerca de"];

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
    <NavbarContent className="hidden md:flex gap-4" justify="center">
      {menuCenter.map((item,index) => {
        const active: boolean = item === activeBtn ? true : false;
        return (
          <NavbarItem key={`${item}-${index}`} isActive={active}>
            <Link
              className="hover:scale-95 transition-shadow"
              color={active ? "success" : "foreground"}
              onClick={() => handleActiveSection(item)}
              href="#"
            >
              {item}
            </Link>
          </NavbarItem>
        );
      })}
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
      <Link color="primary" className="justify-center mr-4" href="/dashboard/profile">
        <IoMdPerson />
          <p className="ml-1">{session.user.nombreCompleto}</p>
        </Link>
        <Link onClick={onOpen} className="cursor-pointer" color="danger">
        <IoMdLogOut />
          <p className="mx-1">Sign Out</p>
        </Link>
        
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="text-center">
      {(onClose) => (
      <>
        
            <ModalHeader className="flex flex-col gap-1">
              Confirmación de Cierre de Sesión.
            </ModalHeader>
            <ModalBody>
              <p>¿Estás seguro de que deseas cerrar tu sesión?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Regresar
              </Button>
              <Button color="danger" onClick={handleLogOutClick}>
                Cerrar sesión
              </Button>
            </ModalFooter>
          
      </>
             
      )}
      </ModalContent>
    </Modal>
        
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher/>
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu className="overflow-y-hidden">
    {menuCenter.map((item, index) => {
        const active: boolean = item === activeBtn ? true : false;
        return (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full flex-col my-4"
              size="lg"
              color={active ? "success" : "foreground"}
              onClick={() => handleActiveSection(item)}
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        );
      })}
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
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {menuCenter.map((item,index) => {
            const active: boolean = item === activeBtn ? true : false;
            return (
              <NavbarItem key={`${item}-${index}`} isActive={active}>
                <Link
                  className="hover:scale-95 transition-shadow"
                  color={active ? "success" : "foreground"}
                  onClick={() => handleActiveSection(item)}
                  href="#"
                >
                  {item}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

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
        {menuCenter.map((item, index) => {
            const active: boolean = item === activeBtn ? true : false;
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full flex-col my-4"
                  size="lg"
                  color={active ? "success" : "foreground"}
                  onClick={() => handleActiveSection(item)}
                  href="#"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItem className="w-full flex items-center justify-center" >
            <ThemeSwitcher/> 
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}
