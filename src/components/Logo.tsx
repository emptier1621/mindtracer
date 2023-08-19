import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

function Logo() {
  const router = useRouter()
  const handleHome = ()=>{
    router.push("/")
  }

  return (
    <div onClick={handleHome} className="flex h-full items-center justify-center hover:scale-95 transition hover:text-success hover:cursor-pointer">
      <Link onClick={handleHome} color="secondary"><Avatar
        isBordered
        color="success"
        src="/mindtracer.svg"
        className="mr-4"
      /><p className="hidden md:flex">Mind Tracer</p></Link>
      
    </div>
    
  );
}

export default Logo;
