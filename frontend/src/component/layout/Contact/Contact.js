import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import arrow from '../Contact/arrow.gif'
const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactBox">
                <h1>If You Have Any Query</h1>
                <p>Click on my email given below</p>
            </div>
            <img src={arrow} alt="" />
            <a className="mailBtn" href="mailto:ronaks0988@gmail.com">
                <Button>Contact: ronaks0988@gmail.com</Button>
            </a>
        </div>
    );
};

export default Contact;