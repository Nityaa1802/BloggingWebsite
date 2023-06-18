import React from 'react'
import styles from '../styles/HorizontalCard.module.css'

const HorizontalCards = () => {
  return (
      <div id={styles.main}>
         
              <img src="https://images.pexels.com/photos/6331158/pexels-photo-6331158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id={styles.image } />
          
          <div id={styles.text}>
              <h4>A Cup of Jo is a lifestyle blog with tons of content about relationships, fashion</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex labore?Alias, ex labore? elit. Alias, ex labore?Alias, ex labore?</p>
              <hr />
              <p><span>By: Nitya | </span>
              <span>27 August,2022</span></p>
          </div>
      </div>
  )
}

export default HorizontalCards