import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IoMdPerson } from "react-icons/io";

function LoginModal() {
  const { data: session, status } = useSession();
  return (
    <>
      <Link color="primary" className="justify-center mr-4" href="#">
        <IoMdPerson />
        <p className="ml-1">{session?.user.nombreCompleto}</p>
      </Link>

      
    </>
  );
}

export default LoginModal;
