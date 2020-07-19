import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from '../signupstyle';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../logo-trans.png';
import {TextValidator} from 'react-material-ui-form-validator';
import { Route,Link as GOLink, Router, withRouter } from 'react-router-dom';
import Dashboard from '../sellerdashboard';
import { Redirect } from 'react-router-dom';

//const styling = styles();

class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  check = () => {
    if(this.state.username === "admin" && this.state.password === "admin123" ){
      return  this.nextPath("./admindashboard/approval"); 
               
      }
    else{
      alert("Re-enter value");
    }

}
  render(){
    
  
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div>
          <GOLink to="/">
          <CardMedia component="img" image={logo} />
          </GOLink>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="lname"
                  onChange={this.setUsername}
                  value={this.state.username}
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
                  onChange={this.setPassword}
                  value={this.state.password}
  />
              </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick = {this.check}
            >
              Log In
            </Button>
            
            </Grid>
         
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      
    );
  }
}  
    
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default withRouter(Login);