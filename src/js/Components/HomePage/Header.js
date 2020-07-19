import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import './header.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartimg from './shopping-cart.png';
import logo from './logo-new-header.png';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Fbicon from './icons/Fb.png';
import Googleicon from './icons/googleicon.png';
import Instaicon from './icons/instaicon.png';
import Bidderdashboard from '../Dashboards/bidderdashboard/dashboardhome';
import { useHistory} from 'react-router-dom';

function Header(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  let history = useHistory();

  const handleiconclick =() => {

    history.push("/Bidderdashboard");
  }
  
return(
<div>
  <Row className="top-bar">
    <Col xs={12} md={8}>
    <div className="social-links">
    <a href="https://www.facebook.com/"><Image  className="fbicon" src={Fbicon} /></a>
    <a href="https://www.google.com/"><Image  className="googleicon" src={Googleicon} /></a>
    <a href="https://www.instagram.com/"><Image  className="instaicon" src={Instaicon} /></a>

    </div>
    </Col>
    <Col md={4} xs={6} className="register">
       
<a id ="signup" href ="http://localhost:3000/SignUP">  Sign Up</a>
        
        <a id ="login" href ="http://localhost:3000/LogIn" >Log In</a>

       
    </Col>
  </Row>

<Row className="navbar-2">
    <Col className="navbar" md={2} xs={12}>
  <Navbar>
  <Navbar.Brand className="navbrand" href="/">
      <Image  className="logo" src={logo} />
  </Navbar.Brand>
</Navbar>
  </Col>

  <Col className="navbar" md={4} xs={12}>
  
  <Form className="search" inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="searchbtn" variant="outline-info">Search</Button>
    </Form>
    
  </Col>   

  
  <Col className="navbar" md={5}>
  <Navbar collapseOnSelect expand="lg">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">  
      <Nav className="mr-auto">
      <Nav.Link className="navlink" href="#home">Home</Nav.Link >
      <NavDropdown className = "navlink" title="Auctions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/ordinary">Ordinary Auctions</NavDropdown.Item>
        <NavDropdown.Item href="../Livesession/livesessionmain.js">Live Session Auctions</NavDropdown.Item>
     </NavDropdown>
      <Nav.Link className = "navlink" href="#pricing">About Us</Nav.Link>
      <Nav.Link className = "navlink" href="#pricing">Contact Us</Nav.Link>

    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Col>

    </Row>
    </div>

    );
}


export default Header;
