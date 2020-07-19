import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Bidderdashboard from './dashboard';
import Winninghistory from './winninghistory';
// import ReactNotification, { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
import { Link, useLocation } from 'react-router-dom';
// import Notification from './notification';
import { render } from 'react-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },  
  appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },

}));
const bidItems=[];
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Bidderhome(){

    const[bidItem, setBidItems]=React.useState(JSON.parse(localStorage.getItem('bidItem')));
    const[bidItem1, setBidItems1]=React.useState(JSON.parse(localStorage.getItem('bidItem1')));
    const[bidItem2, setBidItems2]=React.useState(JSON.parse(localStorage.getItem('bidItem2')));
    const[bidItem3, setBidItems3]=React.useState(JSON.parse(localStorage.getItem('bidItem3')));

    const[id, setId]=React.useState('');
    const[name, setName]=React.useState('');
    const[price, setPrice]=React.useState('');
    
    React.useEffect(()=>{
      bidItems.push(bidItem1)
      bidItems.push(bidItem2)
      bidItems.push(bidItem3)

      // if(bidItems[0]!=null){
      //   console.log(bidItems[0])
      //   setId(bidItem1.id)
      //   setName(bidItem1.name)
      //   setPrice(bidItem1.price)
      //   document.getElementById("n1").style.display = "block";
      // }
      if(bidItem!=null){
        setId(bidItem.id)
        setName(bidItem.name)
        setPrice(bidItem.price)
        document.getElementById("n1").style.display = "block";
      }
      // if(bidItems[1]!=null){
      //   console.log(bidItems[1])
      //   document.getElementById("n2").style.display = "block";
      // }
      // if(bidItems[2]!=null){
      //   console.log(bidItems[2])
      //   document.getElementById("n3").style.display = "block";
      // }

    },[]);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(

    <div className={classes.root}>
    <Bidderdashboard />
        <main className={classes.content} id="box">
        <div className={classes.appBarSpacer} />
       <Container maxWidth="lg" className={classes.container}>
         <div id="n1" className="alert alert-dark" style={{ display:'none',margin: '10px 0px'}}>
              <h5><b>An item is placed for check it out!</b></h5>
              <h6><b>Name : </b>{name}</h6>
              <h6><b>Price : </b>{price}</h6>
              <Link to={"../Livesession/livemainsession.js?id="+id+"&view=bidder&name="+useQuery().get('name')}><button className='btn btn-dark'>Go for bidding</button></Link>
              </div>
          {/* <div id="n2" className="alert alert-dark" role="alert" style={{ display:'none',margin: '10px 0px'}}>
              <h5><b>An item is placed for check it out!</b></h5>
              <h6><b>Name : </b>{bidItem2.name}</h6>
              <h6><b>Price : </b>{bidItem2.price}</h6>
              <a href="#" className="alert-link"><button className='btn btn-dark'>Go for bidding</button></a>
          </div>
          <div id="n3" className="alert alert-dark" role="alert" style={{ display:'none',margin: '10px 0px'}}>
              <h5><b>An item is placed for check it out!</b></h5>
              <h6><b>Name : </b>{bidItem3.name}</h6>
              <h6><b>Price : </b>{bidItem3.price}</h6>
              <a href="#" className="alert-link"><button className='btn btn-dark'>Go for bidding</button></a>
          </div>        */}
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Winninghistory />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            
            </Grid>
        </Container> 
      </main>
      </div>
    )
}

export default Bidderhome;