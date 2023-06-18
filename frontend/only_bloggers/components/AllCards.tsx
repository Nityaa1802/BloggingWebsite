import * as React from 'react';
import styles from '../styles/AllCards.module.css';
import Card from './Card';
import HorizontalCards from './HorizontalCards';

const AllCards = () => {
  const theme = {
    spacing: 8,
  }
const objects=[1,2,3,4,5,6,7,8,9,10,11,12];
return (

 
  <div >
  
      
  
     <div className={styles.main}>
  
  {objects.map(i => { return (<Card key={i} />) })}
   </div>
 </div>

)
}

export default AllCards