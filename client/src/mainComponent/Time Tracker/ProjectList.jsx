import React from 'react'
import { Box, Input, Text } from '@chakra-ui/react';
import styled from "styled-components";
import plus from "../../assets/svg/plus.svg"
import tag from "../../assets/svg/tag-gray.svg"
import play from "../../assets/svg/play.svg"
import calendar from "../../assets/svg/calendar.svg"
import options from "../../assets/img/delete.png"
import { useDispatch } from 'react-redux';
import { removeProject } from '../../store/projects/projects.actions';

const ProjectListStyling = styled.div`
margin:20px 0px;
border:1px solid #9c9c9c;
background:#e4eaee;
border-radius:3px;
.MainDivForTimeTracking{
    display:flex;
    height:60px;
    width:100%;
    align-items:center;
    background:white;
    border-bottom:5px solid #9c9c9c;
    justify-content:space-between;
}
.MainDivForTimeTrackingLeftPart{
    height:40px;
}
.MainDivForTimeTrackingRightPartSubDiv{
    display:flex;
    align-items:center;
    gap:10px;
}
.MainDivForTimeTrackingRightPart{
    display:flex;
    align-items:center;
    gap:20px;
    margin-right:10px;
}

`

const ProjectList = ({ e }) => {
    const dispatch = useDispatch();
    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000))
            , seconds = parseInt((duration / 1000) % 60)
            , minutes = parseInt((duration / (1000 * 60)) % 60)
            , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds
        // if (hours == 0 && minutes == 0) {
        //     return seconds + "s" + " " + milliseconds / 10;
        // }
        // else if (hours == 0 && minutes > 0) {
        //     return minutes + "m" + " " + seconds + "s" + " " + (milliseconds / 10);
        // }
        // else if (hours > 0) {
        //     return hours + "h" + " " + minutes + "m" + " " + seconds + "s" + " " + (milliseconds / 10);
        // }
    }
    return (
        <ProjectListStyling>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                <p style={{ fontSize: '12px', color: '#9c9c9c' }}>Today</p>
                <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', color: '#9c9c9c' }}>Total: <p style={{ fontSize: '18px', padding: '0px 10px', fontWeight: '500', color: 'black' }}>{msToTime(e.timediff)}</p> </div>
            </div>
            <div className='MainDivForTimeTracking'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ fontSize: '14px', padding: '0px 30px' }}>{e.title}</div>
                    <div className='MainDivForTimeTrackingRightPartSubDiv'>
                        <img src={plus} alt="error" />
                        <p style={{ fontSize: '14px', color: '#03a9f4', fontWeight: '500', marginRight: '1.5vw' }}>Project</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: 'fit-content' }}>
                        <div style={{ borderRight: '1px solid #e4eaee', borderLeft: '1px solid #e4eaee', padding: '5px 20px' }}>
                            <img src={tag} alt="error" />
                        </div>
                        <div style={{ borderRight: '1px solid #e4eaee', fontSize: '20px', color: '#999999', margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}>$</div>
                        <div style={{ display: "flex", gap: '10px', margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 30px' }}>
                            <p>{e.starttime}</p>
                            <p>-</p>
                            <p>{e.endtime}</p>
                        </div>
                        <div style={{ margin: '0px', padding: '0px 20px' }}> <img src={calendar} alt="error" width="20px" height="20px" /></div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px', fontWeight: '600', fontSize: '18px' }}>{msToTime(e.timediff)}</div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}> <img src={play} alt="error" width="20px" height="20px" /></div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}><img src={options} alt="error" width="30px" height="30px" onClick={() => dispatch(removeProject(e._id))} /></div>
                    </div>
                </div>
                {/* <div className='MainDivForTimeTrackingRightPart'>

                    <div>{msToTime(watch)}</div>
                    <Button1 onClick={check ? start : stop}>{check ? "START" : "STOP"}</Button1>
                    <div>
                        <img src={clock} alt="error" />
                        <img src={list} alt="error" />
                    </div>
                </div> */}
            </div>
            {/* <Box display="flex">
                <Box width="40%">{e.title}</Box>
                <Box width="20%" display='flex' justifyContent="center">
                    <img src={plus} alt="error" width="19px" height="21px" /> <Text
                        ml="8px" mt="7px" color="#03a9f4" textDecoration="underline"
                    >Project</Text>
                </Box>
            </Box>

            <Box display="grid" width="600px" border="1px solid" position="fixed" right="10px" gridTemplateColumns="10% 10% 25% 10% 30% 8% 8%" alignItems="center">

                <Box mt="7px" display="block">
                    <img src={tag} alt="error" width="20px" height="20px" />
                </Box>
                <Box fontSize="20px" color="#999" p="0 10px 0 15px">$</Box>
                <Box display="flex">
                    <Text>{e.starttime}</Text>
                    <Text>-</Text>
                    <Text>{e.endtime}</Text>
                </Box>
                <Box> <img src={calendar} alt="error" width="20px" height="20px" /></Box>
                <Box ml="7px" mr="7px">{msToTime(e.timediff)}</Box>
                <Box> <img src={play} alt="error" width="13px" height="14px" /></Box>
                <Box><img src={options} alt="error" width="25px" height="25px" onClick={() => dispatch(removeProject(e._id))} /></Box>

            </Box> */}
        </ProjectListStyling>
    )
}

export default ProjectList