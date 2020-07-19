import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../HomePage/Header'
import Footer from '../HomePage/Footer'
import './livesessionmain.css'
import Timer from 'react-compound-timer';
import Card from 'react-bootstrap/Card';
import image1 from '../Livesession/images/guitar.png';
import Productcarousel from "./productcarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from 'react-bootstrap/Container'
import { List, ListItem, ListItemText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {green, blue} from '@material-ui/core/colors'
import Divider from '@material-ui/core/Divider';
import {useState, useEffect} from 'react';
import { Link, useLocation, useHistory, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import SignIn from '../negotiationbox/Join/Join';
function Livemain(props){

    const[pname,setpname] = React.useState('');
    const[pdes,setdes] = React.useState('');
    const[fimage,setfimage] = React.useState(image1);
    const[bidprice, setbidprice] = React.useState('5,000')
    const[enterprice, setenterprice] = React.useState('');
    const[highestbid] = React.useState(enterprice);
    const[startprice,setPrice] = React.useState(0);
    const[bidscount] = React.useState('12');  
    const[timer, settimer] = React.useState(0);
    const[id]=React.useState(useQuery().get('id'));
    const[view]=React.useState(useQuery().get('view'));
    const[bidderName]=React.useState(useQuery().get('name'));
    const[lastBidPerson,setLastBidPerson]=React.useState('');
    if(timer === '0'){
      //return alert("Session has ended!");
    }

    const ColorButton = withStyles(theme => ({
        root: {
          color: "#90EE90",
          backgroundColor: "#2C2E73",
          '&:hover': {
            backgroundColor: blue[700],
          },
        },
      }))(Button);

      const timerSTyle={
        textAlign:'center',
        backgroundColor:'#17a2b8',
        padding:'10px',
        color:'#fff',
        boxShadow: '5px 10px grey',
        margin:'0 40%',
        borderRadius:'10px'
      }

      function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
  let history = useHistory();
  let qwe;

      useEffect(()=>{
        axios.get('http://localhost:3003/product/viewproduct/'+id)
        .then(res=>{
          setpname(res.data.name);
          setdes(res.data.description);
          setPrice(res.data.price);
          localStorage.setItem('timeleft','')
          localStorage.setItem('lastBidPerson','')
          qwe=setInterval(() => {
              document.getElementById("bidderName").innerHTML=localStorage.getItem('lastBidPerson');
              document.getElementById("bidderPrice").innerHTML=localStorage.getItem('currentBid');
          }, 1500);
          if(view!=='bidder'){
            alert(view)
            var bidItem = { id:id, name:res.data.name, price:res.data.price, status:false};
            document.getElementById('cardbiddertitle').style.display='none';
            document.getElementById('hideItem').style.display='none';
            document.getElementById('hideItem1').style.display='none';
           document.getElementById('hideItem3').style.display='none';
            document.getElementById('startButton').style.display='block';

            // var i=parseInt(localStorage.getItem('counter'))+1;
            // setTimeout(()=>{
            //   localStorage.setItem('counter',i);
            // },2000);
            // localStorage.setItem('bidItem'+i.toString(),JSON.stringify(bidItem));
            localStorage.setItem('bidItem',JSON.stringify(bidItem));
            localStorage.setItem('currentBid',res.data.price)
          }
        })
        .catch(err=>{
          console.log(err)
        })
        
        if(view=='bidder'){
          var m=setInterval(function() {
            document.getElementById("timeleft").innerHTML=localStorage.getItem('timeleft');
            document.getElementById("highestBid").innerHTML=localStorage.getItem('currentBid');
            if(localStorage.getItem('timeleft')=='0'){
              if(bidderName==localStorage.getItem('lastBidPerson')){
                alert('Bidding is completed and '+bidderName+' have won the bidding');
              }
              else{
                alert('Bidding is completed and '+bidderName+' have lost the bidding');
              }
              history.push("../bidderdashboard/dashboard?name="+bidderName)
              clearInterval(m);
              clearInterval(qwe);
            }
        }, 1000);
        }
      },[]);

      function startTimer(){
        if(view=='seller'){
          var t =50;
          var q = setInterval(function() {
            t--; // milliseconds elapsed since start
            console.log(localStorage.getItem('timeleft')); // in seconds
            localStorage.setItem('timeleft',t)
            document.getElementById("highestBid").innerHTML=localStorage.getItem('currentBid');
            document.getElementById("timeleft").innerHTML=t;
            if(parseInt(localStorage.getItem('timeleft'))===0){
              localStorage.removeItem('bidItem');
              clearInterval(q)
              alert("Congratulations! Your product has been sold!");
              // history.push("../sellerdashboardhome")
            }
        }, 1000);
        }
      }
      function setNewBid(){

        if(view==='bidder'){
          if(enterprice > parseInt(localStorage.getItem('currentBid'))){
            localStorage.setItem('currentBid',enterprice)
            document.getElementById("highestBid").innerHTML=enterprice;
            localStorage.setItem('lastBidPerson',bidderName)
          }
          else{
            alert('Please enter higher bid')
          }
        }
      }

      
    return(
        <div>
            <Container className="container">
        <Header />
        <Row ><Col md = {12}>
         <h1 className="title">Live Auction for Product: {pname}</h1>
            </Col>
        </Row>
        <Row><Col>
            <h5 style={timerSTyle}>Time Left : <span style={{}} id="timeleft"></span> seconds</h5>
            </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><Button id="startButton" style={{display:'none',margin: "20px 200px",
                    backgroundColor: '#549C9E',
                    color: 'white'
                }} onClick={startTimer}>Start bidding</Button></Col>
          <Col></Col>
        
        </Row>
        <Row className="timer">
             
            {/* <Timer  
    initialTime={timer}
    direction="backward"
>        <Card className="cardview"> <h3 className = "timervalues" id="hours"><strong><Timer.Hours /></strong></h3></Card>
           <strong><h3 className="dots"> : </h3></strong>
           <Card className="cardview"> <h3 className = "timervalues" id="minutes"><strong><Timer.Minutes /></strong></h3></Card>
          <strong><h3 className="dots"> : </h3></strong>
           
           <Card className="cardview"><h3 className = "timervalues" id="seconds"><strong><Timer.Seconds /></strong></h3></Card>
          
            </Timer> */}
            
            
        </Row>
        <Row>
        
            <Col md = {5}>
        <Card className="productcard">
            <Productcarousel img={pname} />
            </Card>

            </Col>
            <Col md = {7}>
              <Row>
                <Card id="cardbiddertitle" className="cardbiddertitle">
                <strong><p className="livebiddertitle">{useQuery().get('name')} Welcome please place your bid</p></strong>
                </Card>
            </Row>
            <Row>
                <Card className="cardbiddertitle">
                <strong><p className="livebiddertitle">Latest Bidder</p></strong>
                </Card>
            </Row>
                
            <List style={{
                
                maxHeight: "100%",
                overflow: "hidden",

            }}
           >
                 <Divider /> 

                <Row style={{margin:'20px'}}><Col><span id='bidderName'></span>{' : '}<span id='bidderPrice'></span></Col></Row><Divider /> 
            </List>
        
            </Col>

        </Row>
        <Row>
            <Row>
            <Col>
            <Row>
                <h1 className="productdetailshead">Product Details:</h1>
          <p className="description">{pdes}</p>
                </Row>
            <Row id="hideItem"> 
            <TextField 
            id="outlined-basic"
            label="Enter Bid Price" 
            variant="outlined" 
            value={enterprice}
            onChange={e => setenterprice(e.target.value)}
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "7%"
            }}
            ></TextField>

            </Row>
            <Row>
                <Button id="hideItem1"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3%",
                    backgroundColor: '#549C9E',
                    color: 'white'
                }} onClick={setNewBid}
                >Place Bid</Button>
                </Row>
                <Link to="/join" target="_blank">
                <Row >

                <a   id="hideItem3"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3%",
                    backgroundColor: '#549C9E',
                    color: 'white',
                    borderRadius:'3px',
                    textDecoration:'none',
                    padding:'5px 10px'
                }} 
                >Contact Seller</a>
                </Row></Link>
            </Col>
            </Row>
            <Col>
            <Row>
                <h1 className="titles">
                    Highest Bid: 
                </h1>
            </Row>
<Row>
<p className="biddescription">{'PKR '}<span id='highestBid'></span></p>

</Row>

            <Row>
            <h1 className="titles">
                Starting Price:
                </h1>
            </Row>
<Row>
              <p className="biddescription">{'PKR '}{startprice}</p>

</Row>

{/* <Row>
            <h1 className="titles">
                Bids Count:
                </h1>
            </Row>
<Row>
<p className="biddescription">12</p>

</Row> */}

            </Col>
        </Row>

<Footer />
        </Container>

        </div>
    );

    }

export default Livemain;