"use client"
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent,useEffect, useState } from "react";

import idbQuestions from "@/statics/IDB";
import IdbQuestionItem from "./IdbQuestionItem";

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
      <div>Gracias</div>  
    )
  }

  return(
    content
    )
}

export default IdbQuestionCard
