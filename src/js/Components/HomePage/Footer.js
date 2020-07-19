import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './logo-new.png';
import './Footer.css';
function footer(){
    return(

        <div className="footer">
            <Row>
                <img className="footer-logo" src={logo}></img>
                
            </Row>
            <Row>
                <div className="bottom-nav">
            <a className="nav-option" href="#">HOME</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="nav-option" href="#">ABOUT US</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="nav-option" href="#">CONTACT US</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="nav-option" href="#">AUCTIONS</a>
             
            </div>
                       </Row>
                       <br />
                       <br />
                       <br />
                       <Row className="rights-footer">
                            <p className="copyrights"><strong>@2010 ALL COPYRIGHTS RESERVED</strong></p>
                       </Row>

        </div>


    );

}

export default footer;