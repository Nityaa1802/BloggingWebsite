"use client";
import Image from 'next/image'
import styles from './page.module.css'
import AllCards from '@/components/HorizontalCards'
import Carousel from '@/components/Carousel'
import MostLikedPost from '@/components/MostLikedPost'
import { useEffect,useState } from 'react';


export default function Home() {
 
  const [allPost, setAllPost] = useState([]);
  useEffect( 
    () => {
      const fetchUserReview = async () => {
        const url = `http://localhost:8080/blogs`;
      
     
        const checkResponse = await fetch(url);
      
        if (!checkResponse.ok) {
          console.log("checkResponse")
  
          throw new Error("something went Wrong")
        }
  
        const checkJson = await checkResponse.json();
        console.log(checkJson);
        const responseData = checkJson._embedded.blogs;
        console.log(responseData);
        setAllPost(responseData);
      }
    },[])

  console.log(allPost);
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
        <AllCards allPost={allPost} />
        
      </div>

   </div>
    
  )
}
// export async function getServerSideProps(context:any) {
//   console.log("hii");
//   return {
//     props: {
//       user:"users"
//     }
//   }
// }
