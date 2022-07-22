import {Container,ListGroup,ListGroupItem} from "react-bootstrap";
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import DashboardImg from "./assets/Clockifydashboard.png";
import "./styles/Dashboard.module.css";
const Dashboard = () => {
  return (
    <Container className='pagenav' style={{backgroundColor:"#e4eaee"}}>
      <ListGroup style={{display: "flex",justifyContent: "spaceBetween",flexDirection:"row",gap:"820px"}}>
        <ListGroup.Item
          style={{ fontSize: "1.8rem", color: "#757575", border: "" ,marginTop:"10px",marginLeft:"2rem"}}>
          Dashboard
        </ListGroup.Item>
        <ListGroupItem style={{display:"flex",flexDirection:"row", justifyContent: "spaceBetween",gap:"20px" ,marginTop:"10px",padding:"10px"}}>
        <Menu isLazy w="10%">
          <MenuButton p="8px"  backgroundColor="white" color="black" marginTop="10px" >Projects</MenuButton>
          <MenuList>
          <MenuItem>Projects</MenuItem>
            <MenuItem>Billability</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy w="10%">
          <MenuButton p="8px"  backgroundColor="white" color="black" marginTop="10px" paddling="20px" >Only Me</MenuButton>
          <MenuList>
          <MenuItem>Only Me</MenuItem>
            <MenuItem>Team</MenuItem>
          </MenuList>
        </Menu>
          <input
            className='Input'
            type='date'
            style={{ color: "#757575", width: "15rem", height: "40px",marginTop:"10px" }}
          />
        </ListGroupItem>
      </ListGroup>
      <img
        alt='card'
        style={{ marginRight: "2rem", width: "1400px", marginTop: "2rem",marginLeft:"2rem" }}
        src={DashboardImg}></img>
    </Container>
  );
};

export default Dashboard;
