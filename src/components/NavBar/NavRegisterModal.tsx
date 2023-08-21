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
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import {
  IoMdCode,
  IoMdLock,
  IoMdMail,
  IoMdPerson,
  IoMdPersonAdd,
  IoMdReorder,
  IoMdSchool,
} from "react-icons/io";

function NavRegisterModal(props: { isOpen: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState("Seleccione un género");
  const [error, setError] = useState("");
  const router = useRouter()
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const password = formData.get("password")
      
      let age = 0 
      const fechaActual = Date.now()
      const edadValue = formData.get("edad")?.toString();
      if (edadValue) {
        const edad = fechaActual- new Date(edadValue).getDate();
        age = edad
      } else {
        console.log("edad error...")
      }
      const repassword = formData.get('repassword')
      if( password === repassword ){
        const axiosResponse = await axios.post("/api/auth/signup", {
          nombreCompleto: formData.get("nombreCompleto"),
          genero: formData.get("genero"),
          grado: formData.get("grado"),
          password: password,
          email: formData.get("email"),
          edad: age
        });
        setError((await axiosResponse).statusText)
        if(error === "Created") {
          props.onClose()
        
          return router.push("/")
        }
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
      <Modal backdrop={"blur"} isOpen={props.isOpen} className="overflow-y-auto md:h-max h-4/5" onClose={props.onClose}>
        <form onSubmit={handleSubmit}>
        <ModalContent className="text-center ">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col w-full h-max justify-center items-center gap-1">
                <div className="flex w-full h-max justify-center items-center gap-1" >
                <IoMdPersonAdd />
                <p>Regístrate</p>
                </div>

                {error?<Snippet color="danger">{error}</Snippet>:""}
              </ModalHeader>
              <ModalBody className="">
                <Card>
                  <CardBody>
                    <div className="md:grid md:grid-cols-2 flex flex-col grap-2">
                      <div className="px-2 py-1">
                        <Input
                          required
                          type="text"
                          label="Nombre completo"
                          placeholder="Ej: Miguel Aliaga Chacón"
                          startContent={<IoMdPerson />}
                          name="nombreCompleto"
                        />
                      </div>
                      <div className="px-2 py-1">
                      <Input
                          type="email"
                          label="Correo electrónico"
                          placeholder="Ej. uncorreo@email.com"
                          startContent={< IoMdMail/>}        
                          name="email"                
                        />
                      </div>
                      <div className="px-2 py-1">
                        <Card className="text-foreground">
                        <CardBody>
                        <RadioGroup className="text-default"
                          label="Seleccione su género"
                          value={selected}
                          onValueChange={setSelected}
                          name="genero"
                        >
                          <Radio value="M">Masculino</Radio>
                          <Radio value="F">Fememino</Radio>
                          
                        </RadioGroup>
                        </CardBody>
                        </Card>
                      </div>
                      <div className="px-2 py-1 flex-col">
                        <Input
                          type="number"
                          label="Grado"
                          placeholder="Ingrese su grado"
                          startContent={<IoMdSchool />}
                          className="py-2"
                          name="grado"
                          max={5}
                          min={1}
                        />
                        <Input
                          type="date"
                          label="Fecha de nacimiento"
                          name="edad"
                          startContent={<IoMdPerson />}
                          className="py-2"
                        />
                      </div>
                      <div className="px-2 py-1">
                      <Input
                          type="password"
                          label="Contraseña"
                          name="password"
                          placeholder="Cree una contraseña"
                          startContent={< IoMdLock/>}
                          className="py-2"
                        />
                      </div>
                      <div className="px-2 py-1">
                      <Input
                          type="password"
                          label="Re-contraseña"
                          name="repassword"
                          placeholder="Confirme su contraseña"
                          startContent={< IoMdLock/>}
                          className="py-2"
                        />
                      </div>
                      
                     <div className="col-span-2 px-2 flex flex-col justify-center items-center">
                     <Input
                          type="password"
                          name="codigoInvitacion"
                          label="Código de invitación"
                          placeholder="Ingrese su código"
                          startContent={< IoMdCode/>}
                          className="py-2"
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
