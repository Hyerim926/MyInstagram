import React, { Component } from 'react';
import "./NavBar.css";
import { Grid } from '@mui/material';
import insta_log from "../../images/images/logoinsta.png";
import home from "../../images/images/home.svg";
import message from "../../images/images/share.svg";
import find from "../../images/images/find.svg";
import react from "../../images/images/love.svg";
import Avatar from '@mui/material/Avatar';
import pp from "../../images/images/pp1.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="navbar_barContent">
                    <Grid container>
                        <Grid item xs={2}>
                            ddd
                        </Grid>
                        <Grid item xs={3}>
                            <img className="navbar_logo" src={insta_log} width="105px" />
                        </Grid>
                        <Grid item xs={3}>
                            <input text="text" className="navbar_searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{ "display": "flex" }}>
                            <img className="navbar_img" src={home} width="25px" />
                            <img className="navbar_img" src={message} width="25px" />
                            <img className="navbar_img" src={find} width="25px" />
                            <img className="navbar_img" src={react} width="25px" />
                            <Avatar src={pp} className="navbar_img" style={{ "maxWidth": "25px", "maxHeight": "25px" }} />
                        </Grid>
                        <Grid></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;
