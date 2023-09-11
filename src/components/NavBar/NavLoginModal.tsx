import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  Input,
  Button,
  Code,
  Avatar,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoMdLock, IoMdMail, IoMdPerson } from "react-icons/io";

function NavLoginModal(props: {
  isOpen: boolean;
  onClose: () => void;
  router: any;
}) {
  const [error, setError] = useState("");

  const handleLoginBtn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) return setError(res.error as string);

    if (res?.ok) {
      props.router.push("/dashboard/");

      if (props.isOpen){
        props.onClose();
      }
    }
  };
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        className="overflow-y-auto h-auto"
        onOpenChange={props.onClose}
        placement="top-center"
      >
        <form onSubmit={handleLoginBtn}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="w-full justify-center items-center">
                  Iniciar sesión
                </ModalHeader>
                <ModalBody>
                  <div className="grid md:grid-cols-2">
                    <div className="md:w-5/6 w-full h-auto flex justify-center items-center">
                      <Avatar
                        src={"background.jpg"}
                        className="w-32 h-32 text-large"
                      />
                    </div>

                    <div className="w-full md:w-full flex flex-col items-center justify-center">
                      {error ? <Code color="danger">{error}</Code> : ""}
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
                    </div>
                  </div>
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
