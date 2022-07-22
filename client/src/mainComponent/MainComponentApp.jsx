import React,{useState} from 'react'
import Navbar from './Navbar'
import SideNav from './SubComponents/SideNav'

const MainComponentApp = () => {
  const [toggle, setToggle] = useState(true)
  const toggleNavbar = (x) => {
    setToggle(x)
  }
  return (
    <div>
        <Navbar props = {{toggle, toggleNavbar}} />
        <div>
            <SideNav props = {toggle}/>
        </div>
    </div>
  )
}

export default MainComponentApp