import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ProductIcon from '@material-ui/icons/ListAltTwoTone';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NestedList from './nesteditems';
import { Link } from '@material-ui/core';
import { useHistory, Router, Route } from 'react-router-dom';
import Products from './products';
import {useState} from 'react';



export default function Navbar(){


  let history = useHistory();

  function click(){
  
    history.push("./products");
  

  }

  function firstoptionclick(){
    history.push("./sellerdashboardhome");
  }

  function logout(){
    if(localStorage.bidItem){
      localStorage.removeItem('bidItem')
    }
    history.push("/login");
  }

  return(
  
<div>
<List>
    <ListItem button onClick={firstoptionclick}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary={"Home"} />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
   
    <ListItem button onClick={click}>
      <ListItemIcon>
        <ProductIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
   {/* <ListItem button>
       <NestedList />
   </ListItem>*/}
    <ListItem button> 
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>

    <ListItem button onClick={logout}> 
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </List>

  </div>
);
/*
export const SecondaryOptions = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);*/
}