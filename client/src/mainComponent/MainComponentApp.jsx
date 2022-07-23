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
        <div style={{display:'flex'}}>
            <div  style={toggle ? {width:"218px"} : {width:'53px'}}>
              <SideNav props = {toggle}/>
            </div>
            <div style={{background:'#f2f6f8', width:'100%', marginTop:'50px'}}>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>              
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>              
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>              
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>              
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
              <h1>hi</h1><br/>
            </div>
        </div>
    </div>
  )
}

export default MainComponentApp