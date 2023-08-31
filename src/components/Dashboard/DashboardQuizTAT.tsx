"use client"
import User from "@/models/user";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Skeleton, Textarea } from "@nextui-org/react"
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import TatQuestionCard from "./addTatItem/TatQuestionCard";

function DashboardQuizTAT() {
  const [error, setError] = useState("");
  const {data:session, status} = useSession();
  const [data, setData] = useState({ tat: [] });
  const [quest, setQuest] = useState(0);
  useEffect(() => {
    axios.get('/api/psychology/getTatItems')
      .then(response => {
        setData(response.data);
        setQuest(data.tat.length)
      })
      .catch(error => {
        console.log(error);
      });
  }, [data.tat.length]);
 
 
  
  console.log(quest)

  if(error === ''){
    console.log(quest)
    switch(quest){
      
      case 0: 
        const descripcion1 = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc1 = "/tatLaminas/1.png" 
        return(
          <TatQuestionCard  count={quest} descripcion={descripcion1} laminaSrc={laminaSrc1} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      case 1: 
        const descripcion2 = "Escena campestre. En primer plano, hay una mujer joven con libros en sus manos; más al fondo se ve un hombre trabajando el campo y una mujer que lo mira."
        const laminaSrc2 = "/tatLaminas/2.png" 
        
        return(
          <TatQuestionCard  count={quest} descripcion={descripcion2} laminaSrc={laminaSrc2} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      case 2: 
        const descripcion3 = session?.user.genero === 'M'?"En el suelo, apoyado en un sofá está la figura de un joven con la cabeza descansando sobre su brazo derecho. Junto a él en el suelo hay, un revolver.":"Una mujer joven está de pie con la cabeza gacha, su cara cubierta con su mano derecha. Su brazo izquierdo está estirado hacia adelante contra una puerta de madera."
        const laminaSrc3 = session?.user.genero === 'M'?"/tatLaminas/3a.png":"/tatLaminas/3b.png"
        
        return(
          <TatQuestionCard  count={quest} descripcion={descripcion3} laminaSrc={laminaSrc3} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      case 3: 
        const descripcion4 = "Una mujer sujeta los hombros de un hombre cuya cara y cuerpo están vueltos como sí estuviese tratando de zafarse de ella."
        const laminaSrc4 = "/tatLaminas/4.png"
        
        return(
          <TatQuestionCard  count={quest} descripcion={descripcion4} laminaSrc={laminaSrc4} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      case 4: 
        const descripcion5 = "Una mujer de edad media está de pie en el umbral de una puerta a medio abrir, mirando al interior de la habitación."
        const laminaSrc5 = "/tatLaminas/5.png"
        
        return(
          <TatQuestionCard  count={quest} descripcion={descripcion5} laminaSrc={laminaSrc5} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      case 5: 
        const descripcion6 = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        const laminaSrc6 = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        
        return(
          <TatQuestionCard count={quest} descripcion={descripcion6} laminaSrc={laminaSrc6} email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      default:
        const descripcion = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc = "/tatLaminas/1.png" 
      
        return(
          <TatQuestionCard count={quest} descripcion={descripcion} laminaSrc={laminaSrc}  email={session?.user.email} tatLength={data.tat.length} setError={setError} setQuest={setQuest}/>          
        )
      
    }

  } else {
    return(
      <div>
        {error}
      </div>
    )  
  }
}


export default DashboardQuizTAT
