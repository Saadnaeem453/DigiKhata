import { react , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../src/assets/whiteBook.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Style/navbar.css"

import {  Link } from "react-router-dom";

function NavScrollExample() {
  const[color, setColor]=useState("transparent")
  const scroll=()=>{
    if(window.scrollY >= 50){
      setColor("black")
        } 
        if(window.scrollY <= 50){
          setColor("transparent")
            } 
  }
  window.addEventListener("scroll", scroll)
  return (
  
      
    
    <Navbar className='fixed-top py-1' style={{backgroundColor:color , transition:"backgroundColor 0.1s linear"}} expand="lg" >
      <Container>
       <Link to="/"><Navbar.Brand href="#" className='text-white'><img src={Logo} alt="" /> </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbarr ms-auto py-0 my-3 my-lg-0"
            style={{ maxHeight: '80px', fontWeight: "500" }}
            navbarScroll
          >
            <Link to="/about" className='me-4 text-white navitems ' style={{textDecoration:"none", fontWeight:"400"}} href="#action2">About Us</Link>
            <Link to="/features" className='me-4 text-white navitems ' style={{textDecoration:"none" ,fontWeight:"400"}} href="#action2">Features</Link>
            <Link to="/blog" className='me-4 text-white navitems ' style={{textDecoration:"none",fontWeight:"400"}} href="#action2">Blogs</Link>
            <Link to="/career" className='me-4 text-white navitems ' style={{textDecoration:"none",fontWeight:"400"}} href="#action2">Career</Link>
           <Link to="/contact" className='me-4 text-white navitems ' style={{textDecoration:"none",fontWeight:"400"}} href="#action2">Contact Us</Link>

            
          </Nav>
        
            <Button className="loginbtn border-0 px-5 py-2 text-white rounded-7">Login</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    











  
    
 
  );
}

export default NavScrollExample;