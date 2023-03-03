import React from 'react'
import styles from './style' 

const App = () => {
  return (

    // The navbar section
    <div className='bg-indigo-600 text-center w-48'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          {/* Here we'll render our navbar */}
          Navbar
        </div>
      </div>

      {/* The hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      {/* The hero section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business 
          Billing
          CardDeal
          Testimonial
          Clients
          CTA
          Footer
        </div>
      </div>

    </div>
  )
}

export default App
