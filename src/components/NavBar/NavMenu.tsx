import { Button, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';

import React, { useState } from 'react'

function NavMenu() {
  const menuItems = ["Cómo Funciona", "Pruebas Psicológicas", "Acerca de"];
  const [activeBtn, setActiveBtn] = useState("Cómo Funciona");

  const handleActiveSection = (item: string) => {
    setActiveBtn(item);
  };

  return (
    <NavbarContent className="hidden md:flex gap-4 w-full items-center justify-center" justify="center">
    {menuItems.map((item,index) => {
      const active: boolean = item === activeBtn ? true : false;
      const path = item.replace(" ","")
      return (
        <NavbarItem key={`${item}-${index}`} isActive={active}>
          <Link
            className={`hover:scale-95 transition-shadow ${active?"text-success":""}`}
            color={active ? "success" : "foreground"}
            onClick={() => handleActiveSection(item)}
            href={`/#${path}`}
          >
            {item}
          </Link>
        </NavbarItem>
      );
    })}
  </NavbarContent>
  )
}

export default NavMenu
