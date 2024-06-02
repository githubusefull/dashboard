import Nav from '@app/ui/dashboard/navbar/navbar'
import Sidebar from '@app/ui/dashboard/sidebar/sidebar'
import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';
const layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
    
      </div>
      <div className={styles.content}>
       <Nav/>
       {children}
       <Footer />
      </div>
    </div>
  )
}

export default layout
