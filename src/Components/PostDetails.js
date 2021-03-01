import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import queryString from 'query-string';
import '../index.css'

import ListComments from './Comments';
function PostDetails(props) {
    if (props.post) {
        return (
            <div>
                <div className="post-title">
                    <h3>{props.post.title}</h3>
                </div>
                <div>
                    <div className="post-content">{props.post.content}</div>
                </div>
                <div className="post-comment">
                    <h4>Comments: </h4>
                    <ListComments comments={props.post.comments}></ListComments>
                </div>
            </div>
        )
    }


    return null
}

export default PostDetails;