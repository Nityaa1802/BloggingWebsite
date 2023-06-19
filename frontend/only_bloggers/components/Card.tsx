import React from 'react'
import styles from '../styles/Card.module.css'
import BlogPage from './blogPage';
const Card = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
   <li> <div className={styles.inner} onClick={handleClickOpen}>
   <img src="https://www.projectwale.com/wp-content/uploads/2020/05/artificial-intelligence-1024x576.jpg" className={styles.cardImage} />

   <div className={[styles.details].join("August 27,2022")}>
     <p className={styles.dateHeading} ></p>   
        <h3 className={styles.projectName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod at quidem illo eos porro, autem nemo totam?</h3>

     <p className={styles.projectDetails }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod at quidem illo eos porro, autem nemo totam? Illo rem corporis aspernatur doloremque unde perferendis.</p>
        <button type='button' className={styles.readMoreButton}>READ MORE{'>>' }</button>
     <hr className={styles.hr} />
     <h6 className={styles.author}>By: Nitya Agarwal | 27 August,2023 </h6>
    
   </div>     
   
 
    </div>
    <BlogPage handleClose={ handleClose} open={open} /></li>
  )
}

export default Card