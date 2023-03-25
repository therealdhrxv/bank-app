import React from 'react'
import styles from './style' 
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonial, Hero } from "./components"; 

const App = () => {
  return (

    // The navbar section
    <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          {/* Here we'll render our navbar */}
          <Navbar />
        </div>
      </div>

      {/* The hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Business  />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div> 
    </div>
  )
}

export default App
