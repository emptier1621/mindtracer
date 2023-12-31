import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  ModalFooter,
  Button,
  Input,
  RadioGroup,
  Radio,
  input,
  Snippet,
  Code,
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { Select, SelectItem } from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import {
  IoMdCode,
  IoMdLock,
  IoMdMail,
  IoMdPerson,
  IoMdPersonAdd,
  IoMdSchool,
  IoMdTime,
} from "react-icons/io";
import { CODES } from "@/statics/CODES";

function NavRegisterModal(props: {
  isOpen: boolean;
  onClose: () => void;
  router: any;
}) {
  const [selected, setSelected] = useState("Seleccione un género");
  const [error, setError] = useState("");
  let edad = 0;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const password = formData.get("password");
      const repassword = formData.get("repassword");
      const fechaActual = new Date();
      const edadValue = formData.get("edad")?.toString();
      if (edadValue) {
        const edadTemp = new Date(edadValue);
        let age = fechaActual.getFullYear() - edadTemp.getFullYear();

        if (fechaActual.getMonth() > edadTemp.getMonth()) {
          edad = age;
        } else {
          if (fechaActual.getMonth() === edadTemp.getMonth()) {
            if (fechaActual.getDay() >= edadTemp.getDay()) {
              edad = age;
            } else {
              edad = age - 1;
            }
          } else {
            edad = age - 1;
          }
        }
      } else {
        setError("edad error...");
      }
      if (password === repassword) {
        const codigoInvitacion = formData.get("codigoInvitacion")?.toString();

        if (codigoInvitacion && CODES.includes(codigoInvitacion)) {
          const axiosResponse = await axios.post("/api/auth/signup", {
            nombreCompleto: formData.get("nombreCompleto"),
            genero: formData.get("genero"),
            grado: formData.get("grado"),
            password: password,
            email: formData.get("email"),
            edad,
          });
          setError((await axiosResponse).statusText);

          if (error === "") {
            const res = await signIn("credentials", {
              email: axiosResponse.data.email,
              password: formData.get("password"),
              redirect: false,
            });

            if (res?.ok) {
              props.router.push("/dashboard/");
              if (props.isOpen) props.onClose();
            }
          }
        } else {
          const errorMessage = "Código de invitación no válido.";
          setError(errorMessage);
        }
      } else {
        const errorMessage = "Las contraseñas no coinciden.";
        setError(errorMessage);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      } else {
        setError(String(error));
      }
    }
  };
  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={props.isOpen}
        className="overflow-y-auto md:h-max h-4/5"
        onClose={props.onClose}
      >
        <form onSubmit={handleSubmit}>
          <ModalContent className="text-center ">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col w-full h-max text-primary justify-center items-center gap-1">
                  <div className="flex w-full h-max justify-center items-center gap-1">
                    <IoMdPersonAdd />
                    <p className="pl-2">Regístrate</p>
                  </div>
                </ModalHeader>
                <ModalBody className="">
                  {error ? (
                    <Code
                      color="danger"
                      className="w-auto flex-col h7 whitespace-pre-wrap"
                    >
                      <p className="text-clip">{error}</p>
                    </Code>
                  ) : (
                    ""
                  )}

                  <Card>
                    <CardBody>
                      <div className="md:grid md:grid-cols-2 flex flex-col grap-2">
                        <div className="px-2 py-1">
                          <Input
                            required
                            type="text"
                            label="Nombre completo"
                            color="primary"
                            placeholder="Ej: Miguel Aliaga Chacón"
                            startContent={<IoMdPerson />}
                            variant="underlined"
                            name="nombreCompleto"
                            isRequired
                          />
                        </div>
                        <div className="px-2 py-1">
                          <Input
                            type="email"
                            label="Correo electrónico"
                            color="primary"
                            placeholder="Ej. uncorreo@email.com"
                            startContent={<IoMdMail />}
                            variant="underlined"
                            name="email"
                            isRequired
                          />
                        </div>
                        <div className="px-2 py-1">
                          <Select
                            label="Género"
                            placeholder="Seleccione su género"
                            className="py-2"
                            color="primary"
                            variant="underlined"
                            name="genero"
                            isRequired
                          >
                            <SelectItem key={"M"}>Masculino</SelectItem>
                            <SelectItem key={"F"}>Femenino</SelectItem>
                          </Select>
                        </div>
                        <div className="px-2 py-1">
                          <Input
                            type="number"
                            label="Grado"
                            color="primary"
                            placeholder="Ingrese su grado"
                            startContent={<IoMdSchool />}
                            className="py-2"
                            name="grado"
                            variant="underlined"
                            max={5}
                            min={1}
                            isRequired
                          />
                        </div>
                        <div className="px-2 py-1">
                          <Input
                            type="date"
                            label="Fecha de nacimiento"
                            name="edad"
                            color="primary"
                            variant="underlined"
                            startContent={<IoMdTime />}
                            className="py-2"
                            isRequired
                          />
                        </div>
                        <div className="px-2 py-1">
                          <Input
                            type="password"
                            label="Contraseña"
                            color="primary"
                            variant="underlined"
                            name="password"
                            placeholder="Cree una contraseña"
                            startContent={<IoMdLock />}
                            className="py-2"
                            isRequired
                          />
                        </div>
                        <div className="px-2 py-1">
                          <Input
                            type="password"
                            label="Re-contraseña"
                            name="repassword"
                            color="primary"
                            variant="underlined"
                            placeholder="Confirme su contraseña"
                            startContent={<IoMdLock />}
                            className="py-2"
                            isRequired
                          />
                        </div>

                        <div className="px-2 py-1">
                          <Input
                            type="password"
                            name="codigoInvitacion"
                            label="Código de invitación"
                            color="primary"
                            variant="underlined"
                            placeholder="Ingrese su código"
                            startContent={<IoMdCode />}
                            className="py-2"
                            isRequired
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter className="w-full justify-center">
                  <Button
                    color="success"
                    href="/dashboard/profile"
                    variant="ghost"
                    type="submit"
                  >
                    Crear cuenta
                  </Button>
                  <Button
                    color={"danger"}
                    variant="ghost"
                    onClick={props.onClose}
                  >
                    Regresar
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

export default NavRegisterModal;
