import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NavbarContent,
  NavbarItem,
  User,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { IoIosArrowDown, IoMdDesktop, IoMdLogOut, IoMdPerson } from "react-icons/io";
import { convertTitleFormat } from "@/libs/stringUtils";
import ProfileModal from "./ProfileModal";
import LogoutModal from "./LogoutModal";

function CredentialsMenu() {
  const { data: session, status } = useSession();

  const [showModal, setShowModal] = useState(false);
  const { isOpen: isOpenDropdown1, onOpen: onOpenDropdown1, onClose: onCloseDropdown1 } = useDisclosure();
  const { isOpen: isOpenDropdown2, onOpen: onOpenDropdown2, onClose: onCloseDropdown2 } = useDisclosure();
  const handleItemClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fullname = convertTitleFormat(session?.user.nombreCompleto);

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
      <LogoutModal isOpen={isOpenDropdown1} onClose={onCloseDropdown1}/>
      <ProfileModal isOpen={isOpenDropdown2} onClose={onCloseDropdown2}/>
    </NavbarContent>
  );
}

export default CredentialsMenu;
