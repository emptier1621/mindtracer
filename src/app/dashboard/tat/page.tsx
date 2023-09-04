import DashboardQuizTAT from "@/components/Dashboard/DashboardQuizTAT";
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
            <DashboardQuizTAT/>
        </div>
      </main>
    </>
  );
}

export default TatPage;
