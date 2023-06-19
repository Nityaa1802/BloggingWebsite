"use client";
import React from 'react'
import styles from '../styles/HorizontalCard.module.css'
import BlogPage from './blogPage';
import { useState } from 'react';


export   const AllCards = (props:any) => {
  
return (
  <div >
     <div className={styles.main1}>
  
      {props.allPost.map((i:any) => { return (<HorizontalCards key={i.blogId} blog={ i} />) })}
   </div>
 </div>)
}


export const HorizontalCards = (props:any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    
    <>
      <div id={styles.main} onClick={handleClickOpen}>
         
         <img src={props.blog.img} alt="" id={styles.image } />
     
     <div id={styles.text}>
          <h4>{props.blog.title }</h4>
         <p>{props.blog.description}</p>
         <hr />
         <p><span>By: Nitya | </span>
         <span>27 August,2022</span></p>
         </div>
         
      </div>
      <BlogPage handleClose={ handleClose} open={open} blogId={props.blog.blogId} />
    </>
  )
}

export default AllCards;