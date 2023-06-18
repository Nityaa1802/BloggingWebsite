
import React from 'react'
import styles from '../styles/navbar.module.css'

import Link from 'next/link'


const Navbar = () => {
 
  return (
      <>
        <nav id={styles.navigation}>
              <div id={styles.navImage}>Only|Bloggers</div>
             
              <div >
                  <ul id={styles.list}>
                      <li className={styles.listItem}><Link  className={styles.link}href={"/"}>Home</Link></li>
                      <li className={styles.listItem}><Link className={styles.link}href={"createPost"}>CreatePost</Link></li>
                      <li className={styles.listItem}><Link className={styles.link}href={"myProfile"}>My Profile</Link></li>
                      <li className={styles.listItem}><button >Sign In</button></li>
                  </ul>
              </div>
      </nav>
      </>
  )
}

export default Navbar