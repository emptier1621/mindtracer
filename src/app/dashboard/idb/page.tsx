'use client'
import DashboardQuizIDB from "@/components/Dashboard/DashboardQuizIDB";
import NavBar from "@/components/NavBar/NavBar";
import NavSkeleton from "@/components/NavBar/NavSkeleton";
import ContentSkeleton from "@/components/Sekeletons/ContentSkeleton";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function IDBPage() {
  
  const [error, setError] = useState("");
  const {data:session, status} = useSession()
  const [data, setData] = useState({idb:{ 
    puntaje: 0, 
    clasificacion: "", 
    respuestas: [{sintoma: '', intensidad: 0}] 
  }});
  const [quest, setQuest] = useState(1);

  useEffect(() => {
    axios.get('/api/psychology/getIdbItems')
      .then(response => {
        setData(response.data);
        setQuest(data.idb.respuestas.length===0?1:data.idb.respuestas.length+1)
      })
      .catch(error => {
        console.log(error);
      });
  }, [data.idb.respuestas.length]);


  if(status === 'loading'){
    return <>
      <header>
        <NavSkeleton/>
      </header>
      <main className='w-full h-96 mt-20 flex items-center justify-center'>
        <ContentSkeleton/>
      </main>
    </>
  }

  if(status === 'authenticated' && session?.user){
  return (
    <>
      <header>
        <NavBar user={session.user} status={"authenticated"} />
      </header>
      <main className="max-w-screen pt-20 flex items-center justify-center overflow-x-hidden overflow-y-auto">
        <div className="w-full h-fit flex justify-center items-center">
            <DashboardQuizIDB setQuest={setQuest} setError={setError} quest={quest}/>
        </div>
      </main>
    </>
  );
  }
}

export default IDBPage;
