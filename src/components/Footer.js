import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="row footer-row">
                    <div className="col-6 foot">
                        <h4>IronShop</h4>
                        <ul>
                            <li href="/aboutUs">About Us</li>
                            <li>Blog</li>
                            <li>Work with Us</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="col-6 foot ">
                        <h4>Follow Us!</h4>
                        <ul className="follow">
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                        </ul>
                    </div>
                    <p>&copy; Copyright 2020 [BCN-PT-032020] - All Rights Reserved</p>
                </div>
            </footer>



        )
    }
}
