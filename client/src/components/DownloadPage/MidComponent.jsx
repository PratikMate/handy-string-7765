import React from 'react'
import styled from "styled-components";

const Image = styled.img`
    width: 130px;
    height: 47px;
`
const A = styled.a`
    color: #03A9F4;
`
const P = styled.p`
    color: #5A6B7B;
`
const Heading1 = styled.h1`
    font-size: 34px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-bottom: 20px;
`

const MidComp = styled.div`
    width: 55%;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
`
const Div2 = styled.div`
    margin-left: 20px;
    text-align: left;
    width: 40%;
    margin-top: 10%;
`
const Div3 = styled.div`
    width: 85%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px 0px
`

const MidComponent = ({ e }) => {
    return (
        <MidComp>
            <div>
                <img src={e.imag1} alt="error" />
            </div>
            <Div2>
                <Heading1>{e.title}</Heading1>
                <P>{e.desc}</P>
                <Div3>
                    {
                        e.logos.map((ele, ind) => (
                            <a href="https://chrome.google.com/webstore/detail/clockify-time-tracker/pmjeegjhjdlccodhacdgbgfagbpmccpe" target="_blank" rel="noopener noreferrer">
                                <Image src={ele} alt="error" key={ind} /></a>
                        ))
                    }
                </Div3>
                {e.details !== "" ? <A href="https://clockify.me/help/time-tracking/kiosk">{e.details}</A> : ""}
            </Div2>
        </MidComp>
    )
}

export default MidComponent