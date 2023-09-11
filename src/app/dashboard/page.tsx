"use client";
import DashboardTestCard from "@/components/Dashboard/DashboardTestCard";
import NavBar from "@/components/NavBar/NavBar";
import NavSkeleton from "@/components/NavBar/NavSkeleton";
import ContentSkeleton from "@/components/Sekeletons/ContentSkeleton";
import { Link } from "@nextui-org/react";
import axios from "axios";
import fs from 'fs';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState(new Blob())
  const [dataTAT, setDataTAT] = useState({ tat: [] });
  const [dataIDB, setDataIDB] = useState({idb:{ 
    puntaje: 0, 
    clasificacion: 0, 
    respuestas: [{sintoma: '', intensidad: 0}] 
  }});
  
  useEffect(() => {
    axios.get('/api/psychology/getTatItems')
      .then(response => {
        setDataTAT(response.data);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('/api/psychology/getIdbItems')
      .then(response => {
        setDataIDB(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if(session && session.user.email === 'admin@mindtracer.com'){
      axios.get('/api/data', { responseType: 'blob' })
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [session]);



  const tatPercent = dataTAT.tat.length*100/20
  let idbPercent = 0
  if(dataIDB){
    if(dataIDB.idb.respuestas.length===0){
      idbPercent = 0
    }else{
    idbPercent = dataIDB.idb.respuestas.length*100/21
    }
  }
  
  if (status === "unauthenticated") {
    return <div className="text-danger">Sin autorización...</div>;
  }
  if (status === "loading") {
    return <>
    <header>
      <NavSkeleton/>
    </header>
    <main className='w-full h-96 mt-20 flex items-center justify-center'>
      <ContentSkeleton/>
    </main>
  </>
  }

  if (status === "authenticated") {
    if(session.user.email === 'admin@mindtracer.com' && data){
      const blob = data
      const url = window.URL.createObjectURL(blob);
      return(
        <div>
          <Link download={'users.json'} href={url}>gagaagag</Link>
        </div>  
      )
    }
  return (
      <>
        <header className="mt-16 overflow-x-hidden">
          <NavBar user={session.user} status={"authenticated"} />
        </header>
        <main className="w-screen flex items-center justify-center">
          <div className="md:grid md:grid-cols-2 flex-col w-full place-items-center">
            <DashboardTestCard titulo="Test de Apercepción Temática" siglas="(TAT)" resumen="El Test de Apercepción Temática (TAT) es una prueba
                    psicológica que utiliza imágenes para explorar la
                    personalidad y emociones de las personas a través de las
                    historias que crean basadas en esas imágenes."
                    percent={tatPercent} link="/dashboard/tat"/>
            <DashboardTestCard titulo="Inventario de Depresión de Beck" siglas="(IDB-II)" resumen="El Inventario de Depresión de Beck es una herramienta psicológica para medir la depresión, usando preguntas para evaluar síntomas y emociones relacionados con esta condición."
                    percent={idbPercent} link="/dashboard/idb"/>
            
          </div>
        </main>
      </>
    );
  }
}
