import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Input, Button, Code } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoMdLock, IoMdMail, IoMdPerson } from "react-icons/io";

function NavLoginModal(props: { isOpen: boolean; onClose: () => void, router: any }) {

  const [error, setError] = useState("")


  const handleLoginBtn = async (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const res = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) return setError(res.error as string)

    if(res?.ok){
      if(props.isOpen) props.onClose()

      props.router.push("/dashboard/")
    } 
  }
  return (
    <>
      <Modal 
        isOpen={props.isOpen} 
        onOpenChange={props.onClose}
        placement="top-center"
      >
        <form onSubmit={handleLoginBtn}>
        <ModalContent>
          {(onClose) => (
            <>
            
              <ModalHeader className="flex flex-col gap-1 text-center">Iniciar sesión</ModalHeader>
              <ModalBody>
              {error?<Code color="danger">{error}</Code>:""}
                <Input
                  autoFocus
                  endContent={
                    <IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="email"
                  label="Correo electrónico"
                  required
                  placeholder="Ingrese su correo electrónico"
                  variant="underlined"
                />
                <Input
                  endContent={
                    <IoMdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Contraseña"
                  name="password"
                  required
                  placeholder="Ingrese su cotnraseña"
                  type="password"
                  variant="underlined"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" variant="ghost" type="submit">
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </form>
      </Modal>
      
    </>
  );
}

export default NavLoginModal;
