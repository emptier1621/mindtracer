"use client"
import axios, { AxiosError } from "axios";
import { FormEvent } from "react";
import JSConfetti from 'js-confetti'
import idbQuestions from "@/statics/IDB";
import IdbQuestionItem from "./IdbQuestionItem";
import { Button } from "@nextui-org/react";
import { IoIosHappy } from "react-icons/io";
import Link from "next/link";

function IdbQuestionCard(props:{setQuest:(value:number)=>void,setError:(value:string)=>void, quest:number}) {
  const handleOnSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget);
      let respuesta = Number(formData.get("respuesta"));
      const sintoma = formData.get("sintoma")?.toString();
      
      console.log(sintoma, respuesta)
      if (respuesta || respuesta===0) {
        if(respuesta === 11 || respuesta === 22 || respuesta === 33 ){
          respuesta = respuesta/11
        }
        const axiosResponse = await axios.post("/api/psychology/addIdbItem", {
          sintoma,
          respuesta:Number(respuesta)
        });
        new JSConfetti().addConfetti()
        const newQuest = props.quest+1
        props.setQuest(newQuest)
        console.log(axiosResponse)
        
      } else {
        console.log(props.quest)
        props.setError("Pregunta es requerida.");
        console.log(props.quest)
      }
      
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        props.setError(errorMessage);
      } else {
        props.setError(String(error));
      }
    }
  }

  const content = idbQuestions.map((item) => {
    if(props.quest === item.question){
      return <IdbQuestionItem question={props.quest} sintoma={item.sintoma} opciones={item.opciones} key={item.question} fSumbit={handleOnSubmit}/>
    }
  }) 
  
  if(props.quest===22){
    return(
      <div className="w-full md:px-24 my-4 px-4 h-full flex-col justify-center items-center ">
        <h3 className="text-4xl text-center">¡Felicidades!</h3>
        <IoIosHappy className="text-5xl w-full flex justify-center items-center my-4"/>
        <p className="px-4 md:px-24 text-justify ">¡Has completado el Inventario de Depresión de Beck (BDI-II) con éxito! ¡Gracias por tu colaboración! Ahora, para seguir mejorando, te invitamos a participar en la siguiente evaluación. ¡No te la pierdas!</p>
        <div className="w-full flex items-center justify-center my-8">
        <Button as={Link} href="/dashboard" variant="ghost" color="warning">Ir al dashboard</Button>
        </div>
      </div>  
    )
  }

  return(
    content
    )
}

export default IdbQuestionCard
