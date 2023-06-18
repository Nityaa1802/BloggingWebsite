"use client";
import React from 'react'
import { useSession,signIn, signOut } from 'next-auth/react';

const login = () => {
    const {data:session} = useSession();

    function handle(){
        console.log("hello");
        return null;
 }

  if (!session) {
      return <>
      <p>Please sign in</p><button onClick={()=>signIn()}>SignIn</button></>;
  }

  else {
  

      return (

        <div>
        
              <h1>Welcome, {session.user?.name}!{handle()}</h1>
            <button onClick={()=>signOut()}>SignOut</button>
        {/* Render your content */}
      </div>  );
 }

}

export default login