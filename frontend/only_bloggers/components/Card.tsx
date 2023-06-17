import React from 'react'
import styles from '../styles/Card.module.css'
const Card = () => {
  return (
    <div className={styles.inner}>
    <img src="https://www.projectwale.com/wp-content/uploads/2020/05/artificial-intelligence-1024x576.jpg" className={styles.cardImage} />

    <div className={[styles.details].join(" ")}>
      <p className={styles.domainHeading} >AIML PROJECT</p>   
      <h1 className={styles.projectName 
       }>Face Recognzation</h1>

      <p className={styles.projectDetails }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod at quidem illo eos porro, autem nemo totam? Illo rem corporis aspernatur doloremque unde perferendis.</p>
      <button type='button' className={styles.readMoreButton}>READ MORE</button>
      <hr className={styles.hr} />
      <h6 className={styles.date}>August 27,2022</h6>
     
    </div>     
    
  
  </div>
  )
}

export default Card