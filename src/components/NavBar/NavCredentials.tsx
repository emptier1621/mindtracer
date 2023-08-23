import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarContent,
  User,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useSession } from "next-auth/react";
import { IoIosArrowDown, IoMdDesktop, IoMdLogOut, IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import { convertTitleFormat } from "@/libs/stringUtils";
import NavLogoutModal from "./NavLogoutModal";
import NavProfileModal from "./NavProfileModal";
import NavRegisterModal from "./NavRegisterModal";
import NavLoginModal from "./NavLoginModal";
import { NavThemeSwitch } from "./NavThemeSwitcher";


function NavCredentials(props:{router:any}) {
  const { data: session, status } = useSession();
  const { isOpen: isOpenDropdown1, onOpen: onOpenDropdown1, onClose: onCloseDropdown1 } = useDisclosure();
  const { isOpen: isOpenDropdown2, onOpen: onOpenDropdown2, onClose: onCloseDropdown2 } = useDisclosure();

  const fullname = convertTitleFormat(session?.user.nombreCompleto);

  if(status === 'authenticated'){
    return (
      <NavbarContent justify="end" className="md:flex">
        <Dropdown placement="bottom-start" className="flex h-max justify-center items-center">
          <DropdownTrigger>
            <div className="flex h-max justify-center items-center hover:cursor-pointer">
              <User
                as="button"
                avatarProps={{ isBordered: true, src: "/mindtracer.svg" }}
                className="transition-transform"
                description={session?.user.email}
                name={fullname}
              />
              <IoIosArrowDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat" className=" cursor-pointer w-max items-center justify-center">
          <DropdownItem textValue="Credentials menu" className="h-14 gap-2 w-max items-center justify-center">
              <Link
                rel="preload"
                href="#"
                onPress={onOpenDropdown2}
                className="cursor-pointer w-full items-center justify-center"
                color="foreground"
              >
                <IoMdPerson />
                <p className="ml-2">Mi perfil</p>
              </Link>
            </DropdownItem>
            <DropdownItem textValue="Credentials menu" className="h-14 gap-2 w-max items-center justify-center">
              <Link
                rel="preload"
                href="/dashboard"
          
                className="cursor-pointer w-full items-center justify-center"
                color="foreground"
              >
                <IoMdDesktop />
                <p className="ml-2">Dashboard</p>
              </Link>
            </DropdownItem>
            <DropdownItem textValue="Credentials menu" className="h-14 gap-2 w-max items-center justify-center">
              <Link
                rel="preload"
                href="#"
                onPress={onOpenDropdown1}
                className="cursor-pointer w-full items-center justify-center"
                color="danger"
              >
                <IoMdLogOut />
                <p className="ml-2">Logout</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavLogoutModal isOpen={isOpenDropdown1} onClose={onCloseDropdown1}/>
        <NavProfileModal isOpen={isOpenDropdown2} onClose={onCloseDropdown2}/>
      </NavbarContent>
    );
  }
  if(status === "unauthenticated"){
    return (
      <NavbarContent justify="end" className="md:flex">
        <Dropdown placement="bottom-start" className="flex h-max justify-center items-center">
          <DropdownTrigger>
            <div className="flex h-max justify-center items-center hover:cursor-pointer">
              <User
                as="button"
                avatarProps={{ isBordered: true, src: "/mindtracer.svg" }}
                className="transition-transform"
                name={"Invitado"}
              />
              <IoIosArrowDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat" className="cursor-pointer w-max items-center justify-center">
          <DropdownItem textValue="Credentials menu" className="h-14 flex-col gap-2 w-max items-center justify-center">
              <Button
                rel="preload"
                onPress={onOpenDropdown2}
                className="cursor-pointer items-center justify-center"
                color="warning"variant="bordered"
              >
                <IoMdPersonAdd />
                <p className="ml-2">Login</p>
              </Button>
            </DropdownItem>
         
          <DropdownItem textValue="Credentials menu" className="h-14 flex-col gap-2 w-max items-center justify-center">
              
      
              <Button
                rel="preload"
                onPress={onOpenDropdown1}
                className="cursor-pointer items-center justify-center w-full"
                color="success"variant="bordered"
              >
                <IoMdPersonAdd />
                <p className="ml-2">Regístrate</p>
              </Button>
              </DropdownItem>
              <DropdownItem textValue="Credentials menu" className="h-14 flex-col gap-2 w-max items-center justify-center">      
              <NavThemeSwitch/>
              </DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
        <NavRegisterModal isOpen={isOpenDropdown1} onClose={onCloseDropdown1} router={props.router}/>
        <NavLoginModal isOpen={isOpenDropdown2} onClose={onCloseDropdown2} router={props.router}/>
      </NavbarContent>
    );
  }

  
}

export default NavCredentials;
