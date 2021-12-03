import React, { Component } from 'react';
import Post from '../Post/Post';
import "./MainPage.css";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => { //API
        let data = [
            {
                "postId": "123456",
                "userName": "anonymous",
                "postImageURL": "https://i.natgeofe.com/k/dfc7bec2-0657-4887-81a7-6d024a8c3f70/WH-XmasTree.jpg",
                "timeStamp": "12345",
                "likes": "1K"
            }
        ];
        this.setState({ postArray: data });
    }
    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;