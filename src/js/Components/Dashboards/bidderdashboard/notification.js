import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Notification(props){
    return(
            <React.Fragment>
                <div className="alert alert-dark" role="alert" style={{margin: '10px 0px'}}>
                    <h5><b>An item is placed for check it out!</b></h5>
                    <h6><b>Name : </b>{props.bidItem.name}</h6>
                    <h6><b>Price : </b>{props.bidItem.price}</h6>
                    <a href="#" className="alert-link"><button className='btn btn-dark'>Go for bidding</button></a>
                </div>
            </React.Fragment>
        );
}
React.useEffect(()=>{
    var n = setInterval(() => {
      setBidItems1(JSON.parse(localStorage.getItem('bidItem1')));
      if(bidItem1!==null){
        store.addNotification({
          title: bidItem1.name,
          message: "Price : "+bidItem1.price,
          type: "info",
          insert: "top",
          container: "center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"]
        });
        clearInterval(n);
      }
    }, 3000);

    var m = setInterval(() => {
      if(bidItem2!==null){
        store.addNotification({
          title: bidItem2.name,
          message: "Price : "+bidItem2.price,
          type: "info",
          insert: "top",
          container: "center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"]
        });
        clearInterval(m);
      }
    }, 3000);

    var o= setInterval(() => {
      if(bidItem3!==null){
        store.addNotification({
          title: bidItem3.name,
          message: "Price : "+bidItem3.price,
          type: "info",
          insert: "top",
          container: "center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"]
        });
        clearInterval(o);
      }
    }, 3000);
  },[bidItems]);
export default Notification;