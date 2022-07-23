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
      <Box display="grid" alignItems="center" border="1px solid red" gridTemplateColumns="repeat(2,1fr)" >

          <Box display="flex">
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
              <Box><img src={options} alt="error"  width="25px" height="25px" onClick={() => dispatch(removeProject(e._id))}/></Box>
              
          </Box>
      </Box>
  )
}

export default ProjectList