import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import data from './FeaturesData.json'
import FeatureSubComponent from './FeatureSubComponent/FeatureSubComponent'


const FeaturesStyling = styled.div`
${'' /* .timekeepingReportingManagement{
  display:flex;
  justify-content:space-around;
  margin: 0;
  width:60%;
  margin:auto;
} */}
.timekeepingReportingManagement{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-content:space-around;
  margin: 0;
  gap:50px;
  width:60%;
  margin:auto;
}
${'' /* @media (max-width: 1100px) {
  .timekeepingReportingManagement{
    width:100%;
  }
} */}
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
const FeaturePage = () => {
  return (
    <FeaturesStyling>
      <div>
        <div>
          <div>
            <p style={{ fontSize: '32px', fontWeight: '450', height: 'fit-content', marginBottom: '10px' }}>Features</p>
            <div className='timekeepingReportingManagement'>
              <div>
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600' }}>TIMEKEEPING</p>
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
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600' }}>REPORTING</p>
                <div className='timekeepingAndManagement1'>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Dashboard</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Reports</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Activity</div></Link>
                  <Link to="/" style={{ textDecoration: "none" }}><div className='TRMButton' >Projects</div></Link>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#585858', fontWeight: '600' }}>MANAGEMENT</p>
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
            marginTop: '40px',
            width: "55vw",
            color: '#e7e7e7',
            backgroundColor: '#e7e7e7',
            height: .5,
            borderColor: '#fff'
          }} />
          <div>
            {
              data.map((e, ind) => <FeatureSubComponent key={ind} {...e} />)
            }
          </div>
        </div>
      </div>
    </FeaturesStyling>
  )
}

export default FeaturePage