import React from 'react'
import styles from './style' 

const App = () => {
  return (
    <div className='bg-indigo-600 text-center w-48'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          {/* Here we'll render our navbar */}
          Navbar
        </div>
      </div>
    </div>
  )
}

export default App
