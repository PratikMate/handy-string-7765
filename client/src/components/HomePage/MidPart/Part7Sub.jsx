import React from 'react'
import styled from 'styled-components'
import i1 from '../../../assets/svg/MainComponentSVG/reports.svg'
import i2 from '../../../assets/svg/MainComponentSVG/time.svg'
import i3 from '../../../assets/svg/MainComponentSVG/team.svg'
import i4 from '../../../assets/svg/MainComponentSVG/dashboard.svg'
import HomePageZero from '../../../assets/img/HomePageZero.png'
import HomePageZeroBottom from '../../../assets/img/HomePageZeroBottom.png'

const Part7SubStyling = styled.div`
.mainDivOf4SubDivs{
  display:grid;
  grid-template-columns:1fr 1fr;
  width:80vw;
  margin:auto;
  gap:60px;
  padding:100px;
}
.singleDivOf4{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding:40px 50px;
  text-align:left;
  gap:20px;
}
.singleDivOf4:hover{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.buttonCSSforIndividuals{
  border:1px solid #03a9f4;
  width:180px;
  padding:6px;
  border-radius:3px;
  color:#03a9f4;
  cursor:pointer;
  background: white;
  margin:auto;
}
.buttonCSSforIndividuals:hover{
  background:#03a9f4;
  color:white;
}
`

const Part7Sub = () => {
  return (
    <Part7SubStyling>
      <div>
        <p style={{fontSize:'34px', paddingTop:'100px'}}>Why track time with Clockify</p>
        <div className='mainDivOf4SubDivs'>
          <div className='singleDivOf4'>
            <img src={i1} width='40px' style={{cursor:'pointer'}} alt=''/>
            <p style={{fontSize:'22px', color:'', marginTop:'10px'}}>Boost productivity</p>
            <p style={{fontSize:'16px', color:'#3d4853', margin:'15px 0px'}}>Track time you spend on activities, see where your time goes, and improve your time management skills.</p>
            <p style={{fontSize:'16px', color:'#03a9f4', cursor:'pointer'}}>Learn more ..</p>
          </div>
          <div className='singleDivOf4'>
            <img src={i2} width='40px' style={{cursor:'pointer'}} alt=''/>
            <p style={{fontSize:'22px', color:'', marginTop:'10px'}}>Bill clients </p>
            <p style={{fontSize:'16px', color:'#3d4853', margin:'15px 0px'}}>Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.</p>
            <p style={{fontSize:'16px', color:'#03a9f4', cursor:'pointer'}}>Learn more ..</p>
          </div>
          <div className='singleDivOf4'>
            <img src={i3} width='40px' style={{cursor:'pointer'}} alt=''/>
            <p style={{fontSize:'22px', color:'', marginTop:'10px'}}>Manage team </p>
            <p style={{fontSize:'16px', color:'#3d4853', margin:'15px 0px'}}>Track attendance for payroll and accounting, see who works on what, and manage workload among teams.</p>
            <p style={{fontSize:'16px', color:'#03a9f4', cursor:'pointer'}}>Learn more ..</p>
          </div>
          <div className='singleDivOf4'>
            <img src={i4} width='40px' style={{cursor:'pointer'}} alt=''/>
            <p style={{fontSize:'22px', color:'', marginTop:'10px'}}>Business intelligence </p>
            <p style={{fontSize:'16px', color:'#3d4853', margin:'15px 0px'}}>Track time and analyze your company's efficiency across projects, clients, departments, and employees.</p>
            <p style={{fontSize:'16px', color:'#03a9f4', cursor:'pointer'}}>Learn more ..</p>
          </div>          
        </div>
      </div>
      <img src={HomePageZero} style={{width:'100vw'}} alt='HomePageZero' /> 
      <div style={{padding:'100px'}}>
        <p style={{fontSize:'12px', color:'#78909c'}}>#1 SUPPORT IN SOFTWARE</p>
        <p style={{fontSize:'34px', color:'black'}}>World-class customer support</p>
        <p style={{fontSize:'21px', color:'#5a6b7b'}}>We're here 24 hours a day, every day of the week, including holidays.</p>
        <img src={HomePageZeroBottom} style={{cursor:'pointer',width:'50%', margin:'auto', marginTop:'50px', marginBottom:'50px'}} alt='HomePageZeroBottom' />
        <div className="buttonCSSforIndividuals">
          <p>Contact us</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{ padding:'5px', fontSize:'12px', color:'#8c8d8e' }}>EMAIL</p>•
        <p style={{ padding:'5px', fontSize:'12px', color:'#8c8d8e' }}>PHONE</p>•
        <p style={{ padding:'5px', fontSize:'12px', color:'#8c8d8e' }}>CHAT</p>
        </div>
      </div> 
      <hr/>
    </Part7SubStyling>
  )
}

export default Part7Sub