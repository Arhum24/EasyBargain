import React, { Component } from 'react';
import logo from './logo.png';
import '../../App.css';
import ProductCard from './ProductCard/ProductCard';
import axios from "axios";
import Welcome from './Welcome/Welcome';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            products: [],
            dataLoaded: false,
            user: "",
            nameSubmitted: false,
            loggedIn: false,

        }
    }


    componentWillMount() {



        axios.get("http://localhost:3003/product/viewordinaryproduct").then((data) => {
            this.setState({ products: data.data })
            this.setState({ dataLoaded: true })

            if (localStorage.userName != undefined) {
                this.setState({ loggedIn: true })
                this.setState({ user: localStorage.userName })
            }




        })
    }




    render() {

        console.log(localStorage.isLoggedIn)




        if (localStorage.isLoggedIn == "true") {

            if (this.state.dataLoaded) {

                const Products = this.state.products.map((prod) =>
                    <ProductCard   navigationProps={this.props.history}     title={prod.name} price={prod.price} description={prod.description} username={this.state.user} />
                )

                return (
                    <>

                        <div className="HomePageContainer">
                            <Header />
                            {/* <Welcome/>  */}

                            <div className="Welcome">

                                {!this.state.nameSubmitted && !this.state.loggedIn &&
                                    <div>
                                        <input placeholder="Enter Name here" className="Welcome_inp" onChange={(e) => { this.setState({ user: e.target.value }) }} />
                                        <button className="Welcome_inp" onClick={() => {
                                            this.setState({ nameSubmitted: true })
                                            localStorage.userName = this.state.user
                                            console.log(this.state)
                                        }} >Submit</button>
                                    </div>
                                }


                                {this.state.nameSubmitted &&
                                    <div>
                                        <h4> Hey {this.state.user}! Welcome to Easy Bargain</h4>
                                        <h6>Our featured products are here </h6>
                                    </div>
                                }

                                {this.state.loggedIn &&
                                    <div>
                                        <h4> Hey {localStorage.userName}! Welcome to Easy Bargain</h4>
                                        <h6>Our featured products are here </h6>
                                    </div>
                                }




                            </div>






                            <div className="ProductList">
                                {Products}

                            </div>
                            <Footer />
                        </div>
                    </>
                );

            }

            else {
                return <h1>Fetching Data</h1>
            }

        }
        else {
            return <Redirect
                to="/"
            />
        }
    }
}
