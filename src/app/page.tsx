"use client"

import NavBar from '@/components/NavBar/NavBar'
import NavSkeleton from '@/components/NavBar/NavSkeleton'
import ContentSkeleton from '@/components/Sekeletons/ContentSkeleton'
import { useSession } from 'next-auth/react'
import HomeCmp from '@/components/HomeCmp'
export default function Home () {
  const {data:session, status} = useSession()


  if(status === 'loading'){
    return <>
      <header>
        <NavSkeleton/>
      </header>
      <main className='w-full h-96 mt-20 flex items-center justify-center'>
        <ContentSkeleton/>
      </main>
    </>
  }

  if(status === 'authenticated' && session?.user){
  return (
      <>
        <header>
          <NavBar user={session.user} status={status} />
        </header>
        <main>
            <HomeCmp />
        </main>
 
      </>

  )}

  if(status === 'unauthenticated' ){
    return (
        <>
          <header>
            <NavBar user={""} status={status} />
          </header>
          <main>
              <HomeCmp />
          </main>
   
        </>
  
    )}
}