import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import PostDetails from '../Components/PostDetails'
import { data } from '../Data/index.js'
function PostPage(props) {

    const [post, setPost] = useState();
    useEffect(() => {
        const { id } = props.match.params;
        const postDetail = data.find(element => element.id == id);
        setPost(postDetail)
    }, []);
    const handleChange = (change) => {



    }
    if (post) {
        return (
            <div>
                <Header onChange={handleChange} ></Header>
                <PostDetails post={post}></PostDetails>
            </div>
        );
    }
    return null

}


export default PostPage;