import React from 'react'
import styles from '../styles/MostLikedPost.module.css'
import BlogPage from './blogPage';
const MostLikedPost = () => {
    const objects = [1, 2, 3,4];
    const theme = {
        spacing: 8,
      }
    return (
     <div id={styles.main}>
  
            {objects.map(i => { return (<><Section key={i} />  <hr id={styles.horizontalLine} /></>) })}
   </div>


)
 
  
}

export const Section = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
            <div id={styles.section}  onClick={handleClickOpen}>

                <img src="https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id={styles.sectionImage} />
                
                <div id={styles.sectionText}>
                    <h3>Switch Back Travel is in the outdoor niche, focusing on hiking, camping,</h3>
                    <p>By: Nityaa | 24 August,2023</p>
                </div>
            </div>
            <BlogPage handleClose={ handleClose} open={open} />
        </>
    )
}

export default MostLikedPost