import React, { Component } from 'react';
import "./Welcome.css";
import BidTimer from '../BitTimer/BidTimer';



export default class Welcome extends React.Component {


    constructor(props) {
        super(props)
        this.state = { pricesubmitted: false }
    }



    render() {
        return (<div className="Welcome">

                <input placeholder="Enter your name" className="Welcome_inp" />
                <button className="Welcome_inp" >Submit</button>

        </div>)
    }


}