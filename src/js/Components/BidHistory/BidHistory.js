import React, { Component } from 'react';
import "./BidHistory.css";
import axios from "axios";



export default class BidHistory extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            pricesubmitted: false,
            Bids: []
        }
    }

  async  componentWillMount() {
       await axios.get("http://localhost:3003/product/view/" + this.props.title).then((data) => {
            this.setState({ Bids: data.data.bidhistory });
            console.log(this.state.Bids)
        })
    }



    render() {


        const BidHistory = this.state.Bids.map((bids) => {
            return <div className="BidHistory-bid">
                <p className="bid__biddername">{bids.username}</p>
                <p className="bid__bidderprice">{bids.price}</p>
            </div>
        })


        return (<div className="BidHistory">
            <div className="BidHistory-columns">
                <p className="BidHistory__col">Bidder</p>
                <p className="BidHistory__col">Bid Price</p>
            </div>

            <div className="BidHistory-rows">
                {BidHistory}
            </div>


        </div>)
    }


}