import { Avatar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

function NavLogo() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };

  return (
    <NavbarContent className="flex gap-4" justify="center">
      <NavbarBrand className="pr-3 md:flex ">
        <div
          onClick={handleHome}
          className="flex h-full w-full items-center justify-center hover:scale-95 transition hover:text-success hover:cursor-pointer"
        >
          <Link onClick={handleHome} color="success">
            <Avatar
              isBordered
              color="success"
              src="/mindtracer.svg"
              className="mr-4"
            />
            <p className="md:hidden flex">MT</p>
            <p className="hidden md:flex">MindTracer</p>
          </Link>
        </div>
      </NavbarBrand>
    </NavbarContent>
  );
}

export default NavLogo;
