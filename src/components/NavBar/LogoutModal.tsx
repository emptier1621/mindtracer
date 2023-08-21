import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";

function LogoutModal(props:{isOpen:boolean, onClose:()=>void}) {
  const [backdrop, setBackdrop] = useState<"opaque" | "blur" | "transparent" | undefined>("blur")

  const handleLogOutClick = () => {
    signOut();
  };

  return (
    <>
      <Modal backdrop={'blur'} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent className="text-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmación de Cierre de Sesión.
              </ModalHeader>
              <ModalBody>
                <p>¿Estás seguro de que deseas cerrar tu sesión?</p>
              </ModalBody>
              <ModalFooter className="w-full h-full items-center justify-center">
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
    </>
  );
}

export default LogoutModal;
