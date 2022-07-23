import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SideNav from './NavbarAndSideBar/SideNav'
import TimeTracker from './Time Tracker/TimeTracker'
import Calendar from './SubComponents/Calendar'
import Dashboard from './SubComponents/Dashboard'
import Reports from './SubComponents/Reports'
import Projects from './SubComponents/Projects'
import Team from './SubComponents/Team'
import Clients from './SubComponents/Clients'
import Tags from './SubComponents/Tags'
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
            <div style={{background:'#f2f6f8', width:'100%', marginTop:'50px',height:'100vh'}}>
              <Routes>
                <Route path='/timetracker' element={<TimeTracker/>} />
                <Route path='/calendar' element={<Calendar/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/reports' element={<Reports/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='/clients' element={<TimeTracker/>} />
                <Route path='/tags' element={<Tags/>} />
                <Route path='/setting' element={<Setting/>} />
              </Routes>
            </div>
        </div>
    </div>
  )
}

export default MainComponentApp