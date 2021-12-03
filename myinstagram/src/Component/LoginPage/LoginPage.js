import React, { Component } from 'react' //imrc
import './LoginPage.css';
import Grid from '@mui/material/Grid';
import inst_image from '../../images/images/9364675fb26a.svg';
import insta_logo from '../../images/images/logoinsta.png';
import fb from '../../images/images/fb.png';
import appstore from '../../images/images/app.png';
import playstore from '../../images/images/play.png';


class LoginPage extends Component { //ccc
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="454px" />
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage_logo" src={insta_logo} />
                                    <div className="loginpage_signin">
                                        <input className="loginpage_text" type="text" placeholder="Phone number, username, or email" />
                                        <input className="loginpage_text" type="password" placeholder="Password" />
                                        <button className="login_button">Log In</button>

                                        <div className="login_ordiv">
                                            <div className="login_dividor"></div>
                                            <div className="login_or">OR</div>
                                            <div className="login_dividor"></div>
                                        </div>

                                        <div className="login_fb">
                                            <img src={fb} width="15px" style={{ "marginRight": "5px" }} />Log in with Facebook</div>
                                        <div className="login_forgot">Forgot password?</div>
                                    </div>
                                </div>

                                <div className="loginpage_signupoption">
                                    <div className="loginpage_signin">
                                        Don't have an account? <span style={{ "fontWeight": "bold", "color": "#0395f6" }}> Sign up </span>
                                    </div>
                                    <div className="loginpage_signup">
                                        Have an account? <span style={{ "fontWeight": "bold", "color": "#0395f6" }}> Sign in </span>
                                    </div>
                                </div>

                                <div className="loginpage_downloadSection">
                                    <div>
                                        Get the app.
                                    </div>
                                    <div className="loginpage_option">
                                        <img className="loginpage_dwimg" src={appstore} width="136px" />
                                        <img className="loginpage_dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default LoginPage;

