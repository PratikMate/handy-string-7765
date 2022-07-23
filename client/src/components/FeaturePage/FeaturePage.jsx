import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import data from './FeaturesData.json'
import FeatureSubComponent from './FeatureSubComponent/FeatureSubComponent'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer/Footer2'


const FeaturesStyling = styled.div`
.timekeepingReportingManagement{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-content:space-around;
  margin: 0;
  gap:50px;
  width:60%;
  margin:auto;
}
.timekeepingAndManagement{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:10px;
}
.timekeepingAndManagement1{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.TRMButton{
  background-color: #d7e8f2;
  color:#585858;
  font-size:11px;
  padding:4px 10px;
  border-radius: 3px;
}
.TRMButton:hover{
  background-color: #03a9f4;
  color: white;
}
`

const Heading2 = styled.h1`
    font-size: 40px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-bottom: 30px;
`
const Div1 = styled.div`
    background:#f7fcff;
    width: 100%;
    margin: auto;
    padding:100px;
`
const Button1 = styled.button`
    margin-top: 50px;
    border-radius: 5px;
    background: #0288D1;
    border-bottom: 4px solid #0277BD;
    width: 285px;
    height: 56px;
    text-transform: uppercase;
    color: #fff;
    padding-top: 4px;
    margin-bottom: 10px;
`
const BTag = styled.a`
    font-size: 13px;
    color: #01579B;
    cursor: pointer;
`
const CTag = styled.p`
    color: #5A6B7B;
    font-size: 16px;
`
const Div4 = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    gap: 7px;
`
const Div5 = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    gap: 30px;
`

const FeaturePage = () => {
  return (
    <FeaturesStyling>
      <Navbar />
      <div>
        <div>
          <div>
            <p style={{ fontSize: '32px', fontWeight: '450', height: 'fit-content', marginBottom: '10px', marginTop: '50px' }}>Features</p>
            <div className='timekeepingReportingManagement'>
              <div>
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600', padding:'5px 0px 10px 0px' }}>TIMEKEEPING</p>
                <div className='timekeepingAndManagement'>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Time Tracker</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Timesheet</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Kiosk</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Calendar</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Apps</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Integrations</div></Link>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600', padding:'5px 0px 10px 0px' }}>REPORTING</p>
                <div className='timekeepingAndManagement1'>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Dashboard</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Reports</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Activity</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Projects</div></Link>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600', padding:'5px 0px 10px 0px' }}>MANAGEMENT</p>
                <div className='timekeepingAndManagement'>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Team</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Expenses</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Time Off</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Scheduling</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Approval</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Invoicing</div></Link>
                </div>
              </div>
            </div>
          </div>
          <hr style={{
            width: "55vw",
            color: '#e7e7e7',
            backgroundColor: '#e7e7e7',
            height: .5,
            borderColor: '#fff',
            margin: 'auto',
            marginTop: '40px'
          }} />
          <div>
            {
              data.map((e, ind) => <FeatureSubComponent key={e._id} {...e} />)
            }
          </div>
          <div>
            <Div1>
              <Heading2>Start tracking time with Clockify</Heading2>
              <Div5>
                <CTag href="https://clockify.me/chrome-time-tracking" >24/7 Support</CTag> &nbsp;•&nbsp;
                <CTag href="https://clockify.me/firefox-time-tracking" >Cancel Anytime</CTag> &nbsp;•&nbsp;
                <CTag href="https://clockify.me/edge-time-tracking" >Free Forever</CTag>
              </Div5>
              <Link to='/signup'><Button1>CREATE FREE ACCOUNT</Button1></Link>
              <Div4>
                <img src='https://clockify.me/assets/images/signed-up-icon.svg' alt='error' />
                <BTag href='https://clockify.me/customers'> 125,887 people signed up last month</BTag>
              </Div4>
            </Div1>
          </div>
        </div>
      </div>
      <Footer/>
      <Footer2/>
    </FeaturesStyling>
  )
}

export default FeaturePage