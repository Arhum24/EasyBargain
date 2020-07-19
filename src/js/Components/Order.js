import React, { Component } from 'react'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'
import axios from "axios";
import '../../App.css';

export default class Order extends Component {

    constructor(props) {
        super(props);
        this.state={
            product:{}
        }
    }
    

    componentWillMount(){

        let prodName  = this.props.location.state.productName


        axios.get("http://localhost:3003/product/view/"+ prodName).then((val)=>{
            this.setState({product:val.data})
          
        })
    }



    render() {

     

        return (
            <div>


                <Header navigationProps={this.props.history} />

                <div className="titleContainer">
                    <h1 className="title">Congratulations  You Have Won the Bid</h1>
                    <p className="description">Details of the Product are given below</p>
                    <p className="description">Check your email for notification</p>
                </div>

                <div className="product">


                <div className="productImage">
                    <img  className="prodImg" src="data:image/jpeg;base64,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ic8cR3CfmVIPJrq9zbPpLwbzgRTnO6ek89eQ4TvU1rxToZ88bNhm89fw8246MsTaFGnSbkxoE7TvJ4kye1XSItx460zadZEREQIiICIiAiIgIiICIiArHTOiqdqoupVWy05bwdjm8fiRkVfIia2ms6w531x1Or2F5JBdS2Pa0XIOUzkc8PE5rVb7hv7R8F1babOyo0se0Oa7AtcJB6wVGusnJPTfefZXXTiebdEdTXRh29617YuztbPvGto0ycp+H7IcD3ce53uTniNo8VnNMaoWmyn62i5o2GGlvDymgjsWHNmduiePw6lXo6EXiY1hRFUgyC2cPD+6y92nbaYa8htVo8l8bPRfvb7DPFY00TvP83vd1LyKLgZEg5zmcDj5yRMxOsJ4qzE1tGsS8xWsdSHAt8WuG9jhmPitt0TrHRrANqhpjKcCOorFWXSvk3K7A6ntnFo4yOiepfamgrJWxpVXUnei7y24bjIcO2VZNq268pYUpkxxpT/3XtPKYbZ9Fou8ph7CRPADISqVaxxN1hd2tA4Yz7OK1elq5bmf5VVjxjEP2dTmhXDdF6RPSqUmji4E+AWM19cLItEz6No933Zp9jMyXNptGGd55wOcKjTtjGzSsrbz/Of73uGA6t+MK1smr7nuDalapXfODKYIE8YxhSVqzqCGBptAa1oyos9lVwz6h3lRFZnonLtGPBGt+Xz937sLqRqia7udqzzc+W7LnCPMp7mZyezeRLDWgCBgAvlNgaAAAABAAwAAyAGxels0pFYec2va77Rfinp+ECIiyagiIgIiICIiAiIgIiICIiAiIgIiIPhErGWnVyyVDL7NRJ33Gz3gLKImjKtrV6S1utqJo92dmaP4XPb7HK2fycaPM/VOEmcKj/CSttRY8MdlkbRlj80++WjP5K7CRE1h1Pb4S1W1TklspMitWzJxuHPfDRKkJE4K9mUbXmj80o9p8ltJpwtNWN0DtxBzWUsPJ7ZGGX85VxMB7sI4gRK25FHh17M527aJjSbytbBo2lQaG0abWCI8kQe05ntV0iLNqzMzOsiIiIEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=" />
                </div>

                <div className="productDetail">
                        <p className="detailtxt">{this.state.product.name}</p>
                        <p className="detailtxt">Price: {this.state.product.price}</p>
                        <p className="detailtxt">{this.state.product.description}</p>
                </div>


                </div>

                <Footer />


            </div >
        )
    }
}
