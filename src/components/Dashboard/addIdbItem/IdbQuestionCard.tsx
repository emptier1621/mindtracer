"use client"
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent,useEffect, useState } from "react";

import idbQuestions from "@/statics/IDB";
import IdbQuestionItem from "./IdbQuestionItem";

function IdbQuestionCard() {
  const [error, setError] = useState("");
  const [data, setData] = useState({ 
    puntaje: 0, 
    clasificacion: "", 
    respuestas: [{sintoma: '', intensidad: 0}] 
  });
  const [quest, setQuest] = useState(0);
  
  useEffect(() => {
    if(data.respuestas){
      axios.get('/api/psychology/getIdbItems')
      .then(response => {
        setData(response.data);
        setQuest(data.respuestas.length)
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      setQuest(0)
    }
   
  }, [data.respuestas]);

  const handleOnSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget);
      const respuesta = formData.get("respuesta")?.toString();
      const sintoma = formData.get("sintoma")?.toString();
      
      console.log(sintoma, respuesta)
      if (respuesta && respuesta.length > 0) {
        const axiosResponse = await axios.post("/api/psychology/addIdbItem", {
          sintoma,
          respuesta:Number(respuesta)
        });
        setQuest(quest+1)
        console.log(axiosResponse)
      } else {
        console.log(quest)
        setError("La historia es requerida.");
        console.log(quest)
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
  }

  const content = idbQuestions.map((item) => {
    if(quest === item.question){
      return <IdbQuestionItem question={quest} sintoma={item.sintoma} opciones={item.opciones} key={item.question} fSumbit={handleOnSubmit}/>
    }
  })  

  return(
    content
    )
}

export default IdbQuestionCard
