import React, { Component } from 'react'
import "./SignUp.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginpage_text" type="text" placeholder="Mobile number or Email" />
                <input className="loginpage_text" type="text" placeholder="Full Name" />
                <input className="loginpage_text" type="text" placeholder="Username" />
                <input className="loginpage_text" type="password" placeholder="Password" />
                <button className="login_button">Log In</button>
            </div>
        );
    }
}

export default SignUp;