import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Header from './Header'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import slide1 from './slide-01.png'
import slide2 from './slide-02.png'
import slide3 from './slide-03.png'
import design from './design-itworks.png';
import feature from './feature-design.png';
import './main.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Guitar from './guitar.png';
import SmartPhone from './smartphone.png';
import Footer from './Footer';
import Officetable from './Officetable.png';
import Tableandchair from './Tableandchair.png';
import Carimage from './carimage.png';


function Main () {
  return (
    <div>
      <Container className="container">
      <Header />
        <Row>
          <Carousel>
            <Carousel.Item>
              <Image className='d-block w-100' src={slide2} alt='First slide' />
              <Carousel.Caption>
                <h3 
                style={{
                  backgroundColor: "#000000",
                  borderRadius: "2rem",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(7, 4, 0, 0.19)"

             
             }}>Welcome Bidders and Sellers!</h3>
                <p>
                  Welcome to the first real-time auctions platform
                    </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className='d-block w-100' src={slide1} alt='Third slide' />
              <Carousel.Caption>
                <h3>Experience Quick Auctions!</h3>
                <p>
                  Get a chance to win a product of your choice with-in 60 minutes!
                      </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className='d-block w-100' src={slide3} alt='Third slide' />
              <Carousel.Caption>
                <h3 style={{color: "#000000"}}>Not getting your product sold?</h3>
                <p style={{color: "#000000"}}>
                    Don't worry! We will get your product auctioned and sold with-in 60 minutes!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <br />
        </Row>
        
        <Row style={{marginTop: '1.5rem'}}>
          <Col>
          <Row>
            <Col>
            <Card style={{ width: '18rem', borderRadius: '1.2rem', boxShadow:'0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(7, 4, 0, 0.19)' }}>
              <Card.Img className="cardimage" variant='top' src={SmartPhone} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  <h4>Samsung S8+</h4>
                </Card.Title>
                <Card.Text>
                <h6>Starting Price :</h6>
                <h6>Current Price :</h6>
                </Card.Text>
                <Button className="viewprod">
                  View Product
                </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem', borderRadius: '1.2rem', boxShadow:'0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(7, 4, 0, 0.19)' }}>
              <Card.Img className="cardimage" variant='top' src={Guitar} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  <h4>Yamaha Guitar X201</h4>
                </Card.Title>
                <Card.Text>
                <h6>Starting Price :</h6>
                <h6>Current Price :</h6>
                </Card.Text>
                <Button className="viewprod">
                  View Product
                </Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <br />
          <Row>
              <Col>
              <Card style={{ width: '18rem',borderRadius: '1.2rem', boxShadow:'0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(7, 4, 0, 0.19)'  }}>
              <Card.Img className="cardimage" variant='top' src={Officetable} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  <h4>Office Table</h4>
                </Card.Title>
                <Card.Text>
                <h6>Starting Price :</h6>
                <h6>Current Price :</h6>
                </Card.Text>
                <Button className="viewprod">
                  View Product
                </Button>
              </Card.Body>
            </Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem', borderRadius: '1.2rem', boxShadow:'0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(7, 4, 0, 0.19)'  }}>
              <Card.Img className="cardimage" variant='top' src={Carimage} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  <h4>Toyota Corolla</h4>
                </Card.Title>
                <Card.Text>
                <h6>Starting Price :</h6>
                <h6>Current Price :</h6>
                </Card.Text>
                <Button className="viewprod">
                  View Product
                </Button>
              </Card.Body>
            </Card>
              </Col>
              </Row>
          </Col>
          <Col className="featured-auctions" md = {4}>
            
          <a><h1>Featured Auctions</h1></a>
          <br />
          <Image className='itworks' src={feature} />
          </Col>
        </Row>
      <br />
      <Footer />
      </Container>
    </div>

  )
}

export default Main;
