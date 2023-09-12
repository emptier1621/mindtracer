"use client"
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { SessionProvider } from "next-auth/react"
import React from 'react';
interface Props {
  children: React.ReactNode
}

export default function Providers({children}: Props) {
  return (
    <React.StrictMode>
    <SessionProvider >
      <NextUIProvider>
      
      <NextThemesProvider attribute="class" defaultTheme="dark">{children}</NextThemesProvider>
            
      </NextUIProvider> 
    </SessionProvider>
    </React.StrictMode>
  )
}
