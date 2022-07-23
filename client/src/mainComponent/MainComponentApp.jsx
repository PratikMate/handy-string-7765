import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SideNav from './NavbarAndSideBar/SideNav'
import Setting from './SubComponents/Setting'

const MainComponentApp = () => {
  const [toggle, setToggle] = useState(true)
  const toggleNavbar = (x) => {
    setToggle(x)
  }
  
  return (
    <div>
        <Navbar props = {{toggle, toggleNavbar}} />
        <div style={{display:'flex'}}>
            <div  style={toggle ? {width:"218px"} : {width:'53px'}}>
              <SideNav props = {toggle}/>
            </div>
            <div style={{background:'#f2f6f8', width:'100%', marginTop:'50px'}}>
              <Routes>
                <Route path='/setting' element={<Setting/>} />
                <Route path='/setting' element={<Setting/>} />
              </Routes>
              {/* <Setting/> */}
            </div>
        </div>
    </div>
  )
}

export default MainComponentApp