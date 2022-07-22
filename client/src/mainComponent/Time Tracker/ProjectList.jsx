import React from 'react'
import { Box, Input, Text } from '@chakra-ui/react';
import styled from "styled-components";
import plus from "../../assets/svg/plus.svg"
import tag from "../../assets/svg/tag-gray.svg"
import play from "../../assets/svg/play.svg"
import options from "../../assets/svg/menu-dots-vertical.svg"


const ProjectList = () => {
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

          <Box>title
              <Box width="20%" display='flex' justifyContent="center">
                  <img src={plus} alt="error" width="19px" height="21px" /> <Text
                      ml="8px" mt="7px" color="#03a9f4" textDecoration="underline"
                  >Project</Text>
              </Box>
          </Box>

          <Box display="flex" width="400px" border="1px solid" position="fixed" right="10px" >
              
              <Box mt="7px" display="block">
                  <img src={tag} alt="error" width="20px" height="20px" />
              </Box>
              <Box fontSize="20px" color="gray" p="0 10px 0 15px">$</Box>
              <Box ml="7px" mr="7px">{msToTime(1000)}</Box>
              <Box> <img src={play} alt="error" width="13px" height="14px" /></Box>
              <Box> <img src={options} alt="error" width="13px" height="14px" /></Box>
              
          </Box>
      </Box>
  )
}

export default ProjectList