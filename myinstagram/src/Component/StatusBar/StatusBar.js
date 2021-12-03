import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg from "../../images/images/pp1.png";
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "hhhrrrhhhhh",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/images/pp1.png"
            }
        ]
        this.setState({ statusList: data });
    }

    render() {
        return (
            <div>
                <div className="statusbar_container">
                    {
                        this.state.statusList.map((item, index) => (
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_text">{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;