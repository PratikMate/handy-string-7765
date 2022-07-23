import React, { useEffect, useRef, useState } from 'react'
import { Box, Input, Text } from '@chakra-ui/react';
import styled from "styled-components";
import plus from "../../assets/svg/plus.svg"
import tag from "../../assets/svg/tag-gray.svg"
import list from "../../assets/svg/list-blue.svg"
import clock from "../../assets/svg/clock-blue.svg"
import { useDispatch, useSelector } from "react-redux";
import { addProject, getProjects } from '../../store/projects/projects.actions';
import ProjectList from "./ProjectList"


const Button1 = styled.button`
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1.4;
    border-radius: 2px;
    background-color: #03a9f4;
    color: white;
    cursor: pointer;
    font-weight: 600;
`
// const Div1 = styled.div`
//     width: 80%;
//     display: flex;
// `

const TimeTracker = () => {
    const [watch, setwatch] = useState(0);
    const [input, setInput] = useState("")
    const [timer, settimer] = useState(null);
    const [check, setcheck] = useState(true);
    //const [projectData, setProjectData] = useState([])
    const startTime = useRef(null);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.projects);
    //console.log('data:', data)

    useEffect(() => {
        dispatch(getProjects())
    }, [])
    

    const start = () => {
        let x = new Date()
        startTime.current = x.getHours() +" "+ x.getMinutes()
        setcheck(!check)
        if (!timer) {
            let id = setInterval(() => {
                setwatch((e) => e + 10)
            }, 10)
            settimer(id)
        }
    }

    const stop = () => {
        let y = new Date();
        setcheck(!check);
        clearInterval(timer);
        setwatch(0);;
        settimer(null);
        dispatch(addProject({
            title: input,
            starttime: startTime.current,
            endtime: y.getHours()+" "+y.getMinutes(),
            timediff: watch,
        }))
    }

    // const reset = () => {
    //     clearInterval(timer)
    //     setwatch(0)
    // }
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
        <>
        <Box display="grid" alignItems="center" border="1px solid red" gridTemplateColumns="repeat(2,1fr)" >

            <Input placeholder='What are you working on?' onChange={(e) => setInput(e.target.value)} />

            <Box display="flex" width="400px" border="1px solid" position="fixed" right="10px" >
                <Box width="20%" display='flex' justifyContent="center">
                    <img src={plus} alt="error" width="19px" height="21px" /> <Text
                        ml="8px" mt="7px" color="#03a9f4"
                    >Project</Text>
                </Box>
                <Box mt="7px" display="block">
                    <img src={tag} alt="error" width="20px" height="20px" />
                </Box>
                <Box fontSize="20px" color="gray" p="0 10px 0 15px">$</Box>
                <Box ml="7px" mr="7px">{msToTime(watch)}</Box>
                <Button1 onClick={check ? start : stop}>{check ? "START" : "STOP"}</Button1>
                <Box><img src={clock} alt="error" width="13px" height="14px" /><img src={list} alt="error" width="13px" height="11px" /></Box>
            </Box>
            </Box>
            <br />
            <br />
            <Box>
                {
                    data.map((e, ind) => (
                        <ProjectList key={ind} e={e} />
                    ))
                }
            </Box>
        </>
    )
}

export default TimeTracker