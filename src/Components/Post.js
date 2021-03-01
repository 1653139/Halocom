import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Col, Row } from 'react-bootstrap';
function Post(props) {

    // const handleClick = () => {

    //     history.push(`/posts/view?id=${props.post.id}`)
    // }

    return (
        <Link to={`/post/${props.post.id}`} style={{ color: '#222', textDecoration: 'none' }}>
            <div>
                <h3>{props.post.title}</h3>
                <div>
                    <span className="post-meta">{props.post.points} points</span>
                    <span className="post-meta"> {props.post.author}</span>
                    <span className="post-meta">  {props.post.time} years</span>
                    <span className="post-meta"> {props.post.comments.length} comments</span>
                    <span className="post-meta">  {props.post.link}</span>
                </div>
            </div>
        </Link>
    )
}

export default Post;