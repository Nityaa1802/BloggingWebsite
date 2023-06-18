import React from 'react'
import styles from '../styles/MostLikedPost.module.css'
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
    return (
        <>
            <div id={styles.section}>

                <img src="https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id={styles.sectionImage} />
                
                <div id={styles.sectionText}>
                    <h3>Switch Back Travel is in the outdoor niche, focusing on hiking, camping,</h3>
                    <p>By: Nityaa | 24 August,2023</p>
                </div>
            </div>
         
        </>
    )
}

export default MostLikedPost