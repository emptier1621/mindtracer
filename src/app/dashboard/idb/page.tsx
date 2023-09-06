import DashboardQuizIDB from "@/components/Dashboard/DashboardQuizIDB";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";

function TatPage() {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-screen pt-16 flex items-center justify-center overflow-x-hidden overflow-y-auto">
        <div className="">
            <DashboardQuizIDB/>
        </div>
      </main>
    </>
  );
}

export default TatPage;
