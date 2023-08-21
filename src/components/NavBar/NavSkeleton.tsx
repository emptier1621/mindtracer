import { Navbar, NavbarContent, Skeleton, Spinner } from '@nextui-org/react'
import React from 'react'

function NavSkeleton() {
  return (
    <Navbar isBordered className="w-full flex justify-center items-center">
        <NavbarContent className="md:hidden" justify="start">
          <Spinner color="default" />
        </NavbarContent>

        <NavbarContent
          className="flex w-max justify-center items-center"
          justify="center"
        >
          <Skeleton className="flex rounded-full w-12 h-12" />
          <Skeleton className="h-3 w-12 rounded-lg" />
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-4 w-full items-center justify-center"
          justify="center"
        >
          <div className="w-full flex gap-1 items-center justify-center">
            <Skeleton className="h-3 w-1/5 rounded-lg" />
            <Skeleton className="h-3 w-1/5 rounded-lg" />
            <Skeleton className="h-3 w-1/5 rounded-lg" />
          </div>
        </NavbarContent>

        <NavbarContent
          className="flex w-full items-center justify-center"
          justify="end"
        >
          <Skeleton className="flex rounded-full w-12 h-12" />
          <div className="flex flex-col">
          <Skeleton className="h-3 w-12 rounded-l py-1" />
          <Skeleton className="h-3 w-12 rounded-lg py-1" />
          </div>
          
        </NavbarContent>
      </Navbar>
  )
}

export default NavSkeleton
