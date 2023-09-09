'use client'
import DashboardQuizIDB from "@/components/Dashboard/DashboardQuizIDB";
import NavBar from "@/components/NavBar/NavBar";
import axios from "axios";
import React, { useEffect, useState } from "react";

function IDBPage() {
  
  const [error, setError] = useState("");
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

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-screen pt-16 flex items-center justify-center overflow-x-hidden overflow-y-auto">
        <div className="w-full h-full flex justify-center items-center">
            <DashboardQuizIDB setQuest={setQuest} setError={setError} quest={quest}/>
        </div>
      </main>
    </>
  );
}

export default IDBPage;
