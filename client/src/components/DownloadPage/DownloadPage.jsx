import React from 'react'
import MidComponent from './MidComponent';
import chrome from '../../assets/svg/chrome.svg'
import android from '../../assets/svg/android.svg'
import firefox from '../../assets/svg/firefox.svg'
import ios from '../../assets/svg/ios.svg'
import linux from '../../assets/svg/linux.svg'
import mac from '../../assets/svg/mac.svg'
import windows from '../../assets/svg/windows.svg'
import styled from "styled-components";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';

const ATag = styled.a`
color:#03a9f4;
font-size: 18px;

`
const Heading1 = styled.h1`
    font-size: 40px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-bottom: 20px;
`
const Heading2 = styled.h1`
    font-size: 40px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-bottom: 30px;
`
const P = styled.p`
margin-bottom: 20px;
font-size: 21px;
`
const Div1 = styled.div`
    background:#f7fcff;
    width: 100%;
    margin: auto;
    padding:100px;
`
const Div3 = styled.div`
    width: 70%;
    margin: auto;
`
const Span = styled.span`
    color: #666;
    background: #e1f5fe;
    display: inline-block;
    padding: 6px 8px;
    font-size: 13px;
    line-height: 1;
    text-align: center;
    vertical-align: baseline;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 7px;
    cursor: pointer;
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

const DownloadPage = () => {
  const pageData = [
    { "imag1": "https://clockify.me/assets/images/clockify-apps-extension.png", "title": "Browser Extension", "desc": "Track time via extension.", "logos": [chrome, firefox, "https://clockify.me/assets/images/edge-store.svg"], "details": "" },
    { "imag1": "https://clockify.me/assets/images/clockify-apps-desktop.png", "title": "Desktop App", "desc": "Track time on your computer.", "logos": [mac, windows, linux], "details": "" },
    { "imag1": "https://clockify.me/assets/images/clockify-apps-mobile.png", "title": "Mobile App", "desc": "Track time and expenses on your phone.", "logos": [ios, android], "details": "" },
    { "imag1": "https://clockify.me/assets/images/clockify-apps-kiosk.png", "title": "Kiosk", "desc": "Set up a shared time clock kiosk on any device.", "logos": [], "platform": ["TABLET", "PHONE", "COMPUTER"], "details": "Learn more" },
    { "imag1": "https://clockify.me/assets/images/pumble-apps.png", "title": "Chat App", "desc": "Chat via Pumble app (desktop and mobile).", "logos": [ios, android, mac, windows], "details": "" },
  ];
  return (
    <div>
      <Navbar />
      <Div1>
        <Heading1>Time tracking apps</Heading1>
        <P>Install Clockify and track time from anywhere — everything is synced online.</P>
        <P>
          <ATag href="https://clockify.me/chrome-time-tracking" >Chrome</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/firefox-time-tracking" >Firefox</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/edge-time-tracking" >Edge</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/mac-time-tracking" >Mac</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/windows-time-tracking" >Windows</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/linux-time-tracking" >Linux</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/android-time-tracking" >Android</ATag> &nbsp;•&nbsp;
          <ATag href="https://clockify.me/iphone-time-tracking" >iOS</ATag>
        </P>
        <Div3>
          <Span>Idle Detection</Span>
          <Span>Auto start/stop</Span>
          <Span>Offline mode</Span>
          <Span>Default project</Span>
          <Span>Reminders</Span>
          <Span>Pomodoro timer</Span>
          <Span>Auto tracker</Span>
          <Span>Expenses</Span>
          <Span>Time off</Span>
        </Div3>
      </Div1>
      {
        pageData.map((e, ind) => (
          <MidComponent key={ind} e={e} />
        ))
      }
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
      <Footer />
      <Footer2 />
    </div>
  )
}

export default DownloadPage