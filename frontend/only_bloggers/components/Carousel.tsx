import React from 'react'
import styles from '../styles/Carousel.module.css'
const Carousel = () => {
  return (
      <div id={styles.main}>
          <div id={styles.text}> Sally's Baking Addiction is a wildly popular website in the baking niche, getting an estimated 8 million+ organic search monthly visitors.
              <br />
              <button id={styles.readMore}> Read More{' >>'}
              </button></div> 
       
    </div>
  )
}

export default Carousel