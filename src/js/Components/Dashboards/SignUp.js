import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './signupstyle.js';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo-new-header.png';
import MuiPhoneNumber from 'material-ui-phone-number';
import {TextValidator} from 'react-material-ui-form-validator';
import LogIn from './LogIn.js';
//import {Router, Link} from 'react-router-dom';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';


const Copyright=()=> {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        EasyBargain
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography> );
}

function SignUp() {
const styling = styles();
const [email, setemail] = useState("");
const [error, seterror] = useState(false);
const [name, setname] = useState("");
const [location, setlocation] = useState("");
const[password, setpassword] = useState("");
const[cpassword, setcpassword] = useState("");
const [phone, setphone] = useState("");

let history = useHistory();


const savebtn=()=>{
  if(name==''||password==''||cpassword==''||email==''||location==''||phone==''){
    alert('Some fields are empty!');
  }
  else{
    if(password!==cpassword){
      alert('Password do not match')
    }
    else{
  
      const data = {
        name: name,
        password: password,
        cpassword: cpassword,
        email: email,
        adress: location,
        phone: phone,
      }
      axios.post('http://localhost:3003/bidder/', data)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        alert('Registered successfully')
        history.push("/LogIn")
      });
    }
  }
}

function handlephone (value){
setphone(value);
}
  return (
    
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={styling.paper}>
        <a href="http://localhost:3000"><CardMedia component="img" image={logo} /></a>
       
        <Typography component="h1" variant="h5">
          Get Registered as Bidder!
        </Typography>
        <div className={styling.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="lname"
                value= {name}
                onChange= {e=> (setname(e.target.value))}
/>
            </Grid>
           
              <Grid item xs={12} sm={7}>
                
       
  <MuiPhoneNumber variant="outlined" defaultCountry={'pk'} label="Phone Number"
  onChange={handlephone}/>
           

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value= {email}
                onChange= {e=> (setemail(e.target.value))}
              //   onChange = {(e)=>{
              //     if(e.target.value == 'abc'){
              //       console.log('valid');
              //       seterror(false)
                    
              //     }
              //     else{
              //       console.log('invalid');
              //       seterror(true)
              //     }
              //   }}
              // error = {error}
              // helperText = {error ? 'Invalid Email' : ""}
              // 
              required/>
            </Grid>
            <Grid item xs={12}>

            <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="userName"
                autoComplete="lname"
                value= {location}
                onChange= {e=> (setlocation(e.target.value))}
              />
</Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value= {password}
                onChange= {e=> (setpassword(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value= {cpassword}
                onChange= {e=> (setcpassword(e.target.value))}
              />
            </Grid>
                    </Grid>
       
       <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={savebtn}
            className={styling.submit}
       > 
            Sign Up 
          </Button>
        
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <div>

     
      </div>
    </Container>
  );

}

export default SignUp;