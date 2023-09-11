'use client'
import DashboardQuizTAT from "@/components/Dashboard/DashboardQuizTAT";
import NavBar from "@/components/NavBar/NavBar";
import NavSkeleton from "@/components/NavBar/NavSkeleton";
import ContentSkeleton from "@/components/Sekeletons/ContentSkeleton";
import { useSession } from "next-auth/react";
import React from "react";

function TatPage() {
  const {data:session, status} = useSession()

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
      <main className="max-w-screen pt-16 flex items-center justify-center overflow-x-hidden overflow-y-auto">
        <div className="">
            <DashboardQuizTAT/>
        </div>
      </main>
    </>
  );}
}

export default TatPage;
