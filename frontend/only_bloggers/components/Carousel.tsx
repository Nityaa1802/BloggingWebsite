import React from 'react'
import styles from '../styles/Carousel.module.css'
import BlogPage from './blogPage';
const Carousel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <div id={styles.main}  onClick={handleClickOpen}>
          <div id={styles.text}> Sally's Baking Addiction is a wildly popular website in the baking niche, getting an estimated 8 million+ organic search monthly visitors.
              <br />
              <button id={styles.readMore}> Read More{' >>'}
              </button></div> 
             
    </div>
     <BlogPage handleClose={ handleClose} open={open} /></>

  )
}

export default Carousel