import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./Post.css";
import postimage from "../../images/images/post.jpg";
import love from "../../images/images/love.svg";
import comment from "../../images/images/comment.svg";
import share from "../../images/images/share.svg";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => { //API backend
        let data = [ //JSON Format
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment 1"
            }
        ];

        this.setState({ commentList: data });
    }
    render() {
        return (
            <div className="post_container">
                {/* Header */}
                <div className="post_header">
                    <Avatar className="post_image" src="" />
                    <div className="post_username">{this.props.userName}</div>
                </div>

                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="615px" />
                </div>

                {/* Analytics */}
                <div>
                    <div style={{ "marginLeft": "5px" }}>
                        <img src={love} className="post_reactimage" />
                        <img src={comment} className="post_reactimage" />
                        <img src={share} className="post_reactimage" />
                    </div>
                    <div style={{ "fontWeight": "bold", "marginLeft": "20px" }}>
                        {this.props.likes} likes
                    </div>

                </div>

                {/* Comment Section */}
                <div>
                    {
                        this.state.commentList.map((item, index) => (
                            <div className="post_comment">{item.username}: {item.description}</div>
                        ))
                    }
                    <input text="text" className="post_commentbox" placeholder="Add a comment..." />
                </div>
            </div>
        );
    }
}

export default Post;