import React from 'react'
import Navbar from './Navbar'
import SideNav from './SubComponents/SideNav'

const MainComponentApp = () => {
  return (
    <div>
        <Navbar />
        <div>
            <SideNav/>
        </div>
    </div>
  )
}

export default MainComponentApp