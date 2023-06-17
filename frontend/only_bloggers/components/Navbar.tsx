import React from 'react'
import styles from '../styles/navbar.module.css'
import { url } from 'inspector'
import { resolve } from 'path'
import Image from 'next/image'
import navImage from '../public/OnlyBloggers.png'
const Navbar = () => {
  return (
      <>
        <nav id={styles.navigation}>
              <div id={styles.navImage}>Only|Bloggers</div>
             
              <div >
                  <ul id={styles.list}>
                      <li className={styles.listItem}>Home</li>
                      <li className={styles.listItem}> Create Post</li>
                      <li className={styles.listItem}>My Post</li>
                      <li className={styles.listItem}><button>Sign In</button></li>
                  </ul>
              </div>
      </nav>
          
      
      </>
  )
}

export default Navbar