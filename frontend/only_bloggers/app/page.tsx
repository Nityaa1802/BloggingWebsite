
import Image from 'next/image'
import styles from './page.module.css'
import AllCards from '@/components/HorizontalCards'
import Carousel from '@/components/Carousel'
import MostLikedPost from '@/components/MostLikedPost'

export default function Home() {
  return (
    <div>
       <div id={styles.main}>
      <div id={styles.carousel}>
        <h2 className={styles.heading}>Featured</h2>
        <Carousel/>
        </div>
       
      <div id={styles.mostLiked}>
      <h2 className={styles.heading}>Most Popular</h2>
        <MostLikedPost/>

        </div>
        <div>
          
 </div>
      
      </div >
      <hr className={styles.horizontalLine} />
      
      <div id={styles.main2}>
        <h1 className={styles.heading} >Latest Post</h1>
        <AllCards/>
      </div>

   </div>
    
  )
}
