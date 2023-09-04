"use client"
import User from "@/models/user";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Skeleton, Textarea } from "@nextui-org/react"
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import TatQuestionCard from "./addTatItem/TatQuestionCard";

function DashboardQuizTAT() {
  return(
    <div>
<TatQuestionCard/>
    </div>
    
  )  
}


export default DashboardQuizTAT
