import React from 'react'
import options from "../../src/assets/svg/options.svg"
import logo from "../../src/assets/svg/clockifyLogo.svg"
import notification from "../../src/assets/svg/notification.svg"
import quemark from "../../src/assets/svg/quemark.svg"
import dropdown from "../../src/assets/svg/Dropdown.png"
import { Box, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Div1 = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
position:fixed;
top:0;
z-index:10000;
background:white;
`
const Div2 = styled.div`
width: fit-content;
display: flex;
gap: 20px;
margin-left: 14px;
align-items: center;
cursor:pointer;
`
const Div3 = styled.div`
width: fit-content;
display: flex;
gap:15px;
align-items: center;
padding-right:10px;
`
const Button1 = styled.button`
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1.4;
    border-radius: 2px;
    color: #03a9f4;
    border: 1px solid;
    border-color: #03a9f4;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: #03a9f4;
      color: white;
    }
`

const Navbar = (props) => {

  const handleToggle = () => {
    props.props.toggle ? props.props.toggleNavbar(false) : props.props.toggleNavbar(true)
  }
  return (
    <Div1>
      <Div2>
        <img src={options} alt="error" onClick={() => handleToggle()} width="27px" height="27px" />
        <Link to='/'><img src={logo} alt="error" width="93px" height="24px" /></Link>
      </Div2>
      <Div3>
        <Menu isLazy>

          <MenuButton><Box display="flex"> <Text>Pratik Mate's Workspace</Text><img src={dropdown} alt="error" width="30px" /></Box></MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>WORKSPACES</MenuItem>
            <MenuItem>Pratik Mate's Workspace</MenuItem>
          </MenuList>
        </Menu>
        <div>
          <Button1>UPGRADE</Button1>
        </div>
        <Box m="auto" opacity="50%">
          <img src={quemark} alt="error" width="20px" height="20px" />
        </Box>
        <Box m="auto" opacity="50%">
          <img src={notification} alt="error" width="16px" height="20px" />
        </Box>
        <Menu isLazy w="10%">
          <MenuButton p="8px" borderRadius="50%" backgroundColor="#03a9f4" color="white"  >PM</MenuButton>
          <MenuList>
            <MenuItem>Pratik mate</MenuItem>
            <MenuItem>Profile settings</MenuItem>
            <MenuItem>Dark theme</MenuItem>
            <MenuItem>Download apps</MenuItem>
            <MenuItem>Try chat app</MenuItem>
          </MenuList>
        </Menu>
      </Div3>
    </Div1>
  )
}

export default Navbar