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
import fastCSV from "fast-csv"


export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState()
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

    const download = (csvString:string, fileName = 'test.csv') => {
      // Creamos el elemento para hacer el trigger del download
      const element = document.createElement('a');
      element.setAttribute('href', 'data:application/octet-stream,' + encodeURIComponent(csvString));
      element.setAttribute('download', fileName);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);  
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
