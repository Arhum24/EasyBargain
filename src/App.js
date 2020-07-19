import React, { useEffect } from 'react';
import './App.css';
import SignUp from './js/Components/Dashboards/SignUp';
import Login from './js/Components/Dashboards/LogIn';
import Home from './js/Components/Dashboards/sellerdashboardhome';
import Main from './js/Components/HomePage/main';
import Products from './js/Components/Dashboards/products';
import Loginadmin from './js/Components/Dashboards/admindashboard/loginadmin';
import Livemain from './js/Components/Livesession/livesessionmain'
import Approval from './js/Components/Dashboards/admindashboard/approval';
import Bidderhome from './js/Components/Dashboards/bidderdashboard/dashboardhome';
import Order from './js/Components/Order';
import Ordindary from './js/Components/Home';
import Join from './js/Components/negotiationbox/Join/Join';
import Chat from './js/Components/negotiationbox/Chat/Chat';
import Web3 from 'web3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {

  useEffect(()=>{
    const wa = window;
    var web3 = null;
    var contract = null;
    var account = null;

    if (window.hasOwnProperty('web3')) {
      let ethereum = wa.ethereum;
      ethereum.enable();
      web3 = new Web3();
      web3.setProvider(wa.web3.currentProvider);

      var address = "0x4Adb4797BE62E4443a3cabb9AF2C1ED47B4Ee472";
      contract = new web3.eth.Contract([
        {
          "constant": false,
          "inputs": [
            {
              "name": "_id",
              "type": "string"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "productName",
              "type": "string"
            },
            {
              "name": "email",
              "type": "string"
            },
            {
              "name": "price",
              "type": "string"
            }
          ],
          "name": "AddOrder",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "bid_winners_list",
          "outputs": [
            {
              "name": "id",
              "type": "uint256"
            },
            {
              "name": "_id",
              "type": "string"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "productName",
              "type": "string"
            },
            {
              "name": "email",
              "type": "string"
            },
            {
              "name": "price",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ], address);
      web3.eth.getAccounts().then((accounts) => {
        account = accounts[0];
        // console.log(accounts);
      });
      console.log(contract);

      // console.log(contract)
    } else {
      alert('No Metamask Extension installed. You need to install metamask in order to secure your Biding...');
    }
  

  });
  return (
    <Router>
      <Switch>
        <Route path="/SignUp">
        <SignUp />
        </Route>
        <Route path="/LogIn">
        <Login />
        </Route>
        <Route path="/sellerdashboardhome">
        <Home />
        </Route>
        <Route path="/products">
        <Products />
        </Route>
        <Route path="/adminlogin">
        <Loginadmin />
        </Route>
        <Route path="/livesession">
        <Livemain />
        </Route>
        <Route path="/admindashboard/approval">
        <Approval />
        </Route>
        <Route path="/bidderdashboard">
        <Bidderhome />
        </Route>
        <Route path="/order" component={Order} />
        <Route path="/ordinary" component={Ordindary} />
        <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
        <Route path="/">
        <Main />
        </Route>
        
      </Switch>
 

    </Router>
    
  );
}

export default App;
