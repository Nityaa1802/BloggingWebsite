"use client";
import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'

import Link from 'next/link'
import { useSession,signIn, signOut } from 'next-auth/react';
import CreatePost from './createPost';

const Navbar = () => {
  const { data: session } = useSession();

  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [checkUser, setCheckUser] = useState(null);

  function handleOpen() {
    setOpenCreatePost(true);
  }
  function handleClose() {
    setOpenCreatePost(false);
  }
  async function handleSignIn() {

    signIn();
    
   
    const url = `http://localhost:8080/users/userExist/${session?.user?.email}`;
    
   
    const checkResponse = await fetch(url);
    
    if (!checkResponse.ok) {
      console.log("checkResponse")
      signOut();
      throw new Error("something went Wrong")
    }

    const checkJson = await checkResponse.json();
    setCheckUser(checkJson);
    console.log(checkUser);
    if (!checkUser) {
 
      const url1 = `http://localhost:8080/users/userExist/${session?.user?.email}`;
    
      const checkResponse = await fetch(url1);
    
    
    
 
      const url2 = `http://localhost:8080/users/createUser`;
      const requestOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": session?.user?.email, "name": session?.user?.name })
      };
      const returnResponse = await fetch(url2, requestOption);
    if (!returnResponse.ok) {
   
        signOut();
        throw new Error('Something went wrong!');
      }
     
    
  
      
    }
  
  }

  return (
      <>
        <nav id={styles.navigation}>
        <div id={styles.navImage}>{ checkUser}</div>
             
              <div >
                  <ul id={styles.list}>
                      <li className={styles.listItem}><Link  className={styles.link}href={"/"}>Home</Link></li>
                      <li className={styles.listItem}><Link className={styles.link}href={"/"} onClick={handleOpen}>CreatePost</Link></li>
            <li className={styles.listItem}><Link className={styles.link} href={"myProfile"}>My Profile</Link></li>
            <li className={styles.listItem}>
              {session?.user === undefined ? <button onClick={
                () => {
                  
               
                  handleSignIn();
                 
            }}>Sign In</button> : <button onClick={
                () =>{
                  signOut()}}>Sign Out</button>}
          </li>
                  </ul>
              </div>
      </nav>
      <CreatePost open={openCreatePost} handleClose={handleClose} handleOpen={handleOpen} session={session} signIn={handleSignIn} />
      </>
  )
}

export default Navbar