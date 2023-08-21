import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, CardBody, Image, Card, Input, Snippet } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdLogOut, IoMdMail, IoMdPerson, IoMdTransgender } from 'react-icons/io';
import { BackdropType } from '../../../types/User';
import { convertTitleFormat } from '@/libs/stringUtils';


function ProfileModal(props:{isOpen:boolean, onClose:()=>void}) {
  const { data: session, status } = useSession();
  const fullname = convertTitleFormat(session?.user.nombreCompleto)
  const gender = session?.user.genero==='M'?"Maculino":"Femenino"
  const age = session?.user.edad
  const grado = session?.user.grado.toString()
  const email = session?.user.email
  let grade = ""
  for(let item in ["1","2","3","4","5"]){
    if(grado === item){
      switch(grado){
      case "1":
        grade = "Primer Grado - CC"
        break
        case "2":
          grade = "Segundo Grado - CC"
          break

        case "3":
          grade = "Tercer Grado - CC"
          break

        case "4":
          grade = "Cuarto Grado - CC"
          break
        case "5":
          grade = "Quinto Grado - CC"
          break
     
      }
    }
  }
  return (
    <>
      <Modal backdrop={'blur'} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent className="text-center ">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mi perfil
              </ModalHeader>
              <ModalBody>
                <Card>

                <CardBody>
                  <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:grap-4 items-center justify-center'>
                    <div className="relative col-span-6 md:col-span-4 m-auto">
                      <Image src={'/mindtracer.svg'} className='object-cover' height={200} shadow="md" alt={'Imagen de perfil.'}/>
                    </div>
                    <div className="flex flex-col col-span-6 md:col-span-8">
                    <Input
                      isReadOnly
                      type="text"
                      label="Nombre completo"
                      variant="bordered"
                      defaultValue={fullname}
                      className="px-4 py-1"
                      startContent={<IoMdPerson/>}
                    />
                    <div className='flex'>
                    <Input
                      isReadOnly
                      type="text"
                      label="Género"
                      variant="bordered"
                      defaultValue={gender}
                      className="px-4 py-1 w-1/2 flex"
                      startContent={<IoMdTransgender/>}
                    />
                    <Input
                      isReadOnly
                      type="text"
                      label="Edad"
                      variant="bordered"
                      defaultValue={gender}
                      className="px-4 py-1 w-1/2 flex"
                      startContent={<IoMdTransgender/>}
                    />
                    </div>
                    <Input
                      isReadOnly
                      type="text"
                      label="Grado"
                      variant="bordered"
                      defaultValue={grade}
                      className="px-4 py-1"
                      startContent={<IoMdMail/>}
                    />
                    
                    </div>
                    
                    
                  </div>
                  <div className="flex w-full justify-center items-center mt-5 text-center">
                    <Snippet variant="bordered" color='secondary'>{email}</Snippet>
                    </div>
                </CardBody>
                </Card>
                

              </ModalBody>
              <ModalFooter className="w-full justify-center">
              <Button color="warning" href='/dashboard/profile' variant="ghost" onClick={props.onClose}>
                  Cambiar contraseña
                </Button>
                <Button color={'danger'} variant="ghost" onClick={props.onClose}>
                  Regresar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal
