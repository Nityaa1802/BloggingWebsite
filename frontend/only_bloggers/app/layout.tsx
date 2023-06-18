"use client";
import Navbar from '@/components/Navbar'

import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({

  children,session
}: {
  children: React.ReactNode,session:any
  }) {

    useEffect(() => {
      
    });
  return (
    <html lang="en">
       
      <body className={inter.className}>
         <SessionProvider session={session}>
        <Navbar/>
        {children}
        </SessionProvider>
       </body>
       
    </html>
  )
}
