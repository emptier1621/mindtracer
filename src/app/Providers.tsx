"use client"
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { SessionProvider } from "next-auth/react"
import React from 'react';
interface Props {
  children: React.ReactNode,
  session: any
}

export default function Providers({children, session}: Props) {
  return (
    <React.StrictMode>
    <SessionProvider session={session}>
      <NextUIProvider>
      
      <NextThemesProvider attribute="class" defaultTheme="dark">{children}</NextThemesProvider>
            
      </NextUIProvider> 
    </SessionProvider>
    </React.StrictMode>
  )
}
