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
  const [quest, setQuest] = useState(data.tat.length);
  useEffect(() => {
    axios.get('/api/psychology/getTatItems')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(quest)
  if(error === ''){
    console.log(quest)
    switch(quest){
      
      case 0: 
        const descripcion1 = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc1 = "/tatLaminas/1.png" 
        
        return(
          <TatQuestionCard setQuest={setQuest} error={error} count={quest} descripcion={descripcion1} laminaSrc={laminaSrc1} setError={setError} email={session?.user.email}/>          
        )
      case 1: 
        const descripcion2 = "Escena campestre. En primer plano, hay una mujer joven con libros en sus manos; más al fondo se ve un hombre trabajando el campo y una mujer que lo mira."
        const laminaSrc2 = "/tatLaminas/2.png" 
        
        return(
          <TatQuestionCard setQuest={setQuest}  error={error} count={quest} descripcion={descripcion2} laminaSrc={laminaSrc2} setError={setError} email={session?.user.email}/>          
        )
      case 2: 
        const descripcion3 = session?.user.genero === 'M'?"En el suelo, apoyado en un sofá está la figura de un joven con la cabeza descansando sobre su brazo derecho. Junto a él en el suelo hay, un revolver.":"Una mujer joven está de pie con la cabeza gacha, su cara cubierta con su mano derecha. Su brazo izquierdo está estirado hacia adelante contra una puerta de madera."
        const laminaSrc3 = session?.user.genero === 'M'?"/tatLaminas/3a.png":"/tatLaminas/3b.png"
        
        return(
          <TatQuestionCard setQuest={setQuest}  error={error} count={quest} descripcion={descripcion3} laminaSrc={laminaSrc3} setError={setError} email={session?.user.email}/>          
        )
      default:
        const descripcion = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc = "/tatLaminas/1.png" 
        const email = session?.user.email
        
        return(
          <TatQuestionCard setQuest={setQuest}  error={error} count={quest} descripcion={descripcion} laminaSrc={laminaSrc} setError={setError} email={session?.user.email}/>          
        )
      
    }

  } else {
    return(
      <div>
        ERROR
      </div>
    )  
  }
}


export default DashboardQuizTAT
