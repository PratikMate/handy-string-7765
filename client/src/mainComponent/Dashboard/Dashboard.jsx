import {Container,ListGroup,ListGroupItem,Dropdown,DropdownButton,} from "react-bootstrap";
import DashboardImg from "./assets/Clockifydashboard.png";
import "./styles/Dashboard.module.css";
const Dashboard = () => {
  return (
    <Container className='pagenav'>
      <ListGroup style={{display: "flex",margin:"20px",marginTop:"40px",justifyContent: "spaceBetween",flexDirection:"row",gap:"850px"}}>
        <ListGroup.Item
          style={{ fontSize: "1.8rem", color: "#757575", border: "none" }}>
          Dashboard
        </ListGroup.Item>
        <ListGroupItem style={{display:"flex",flexDirection:"row", justifyContent: "spaceBetween",gap:"20px"}}>
          <DropdownButton id='dropdown-basic-button' title='Project'>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id='dropdown-basic-button' title='Only Me'>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </DropdownButton>
          <input
            className='Input'
            type='date'
            style={{ color: "#757575", width: "15rem", height: "40px" }}
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
