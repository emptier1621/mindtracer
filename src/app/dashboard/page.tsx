"use client";
import DashboardTestCard from "@/components/Dashboard/DashboardTestCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Progress,
  Skeleton,
} from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
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
  }, []);

  useEffect(() => {
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
    if(dataIDB.idb.respuestas.length){
      idbPercent = 0
    }
    idbPercent = dataIDB.idb.respuestas.length*100/21
  }
  
  if (status === "unauthenticated") {
    return <div className="text-primary">Sin autorización...</div>;
  }
  if (status === "loading") {
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Card className="w-[200px] space-y-5 p-4" radius="sm">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </main>
    </>;
  }

  if (status === "authenticated") {
    return (
      <>
        <header className="mt-16 overflow-x-hidden">
          <NavBar />
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
