import React, { useEffect, useState } from 'react';
import '../index.css'
import { data } from '../Data/index.js'
function ListComments(props) {
    const comments = props.comments;
    const listComments = comments.map((comment) =>
        <li key={comment.name.toString()}>
            <h5>
                {comment.name}:
            </h5>
            <p>
                {comment.content}
            </p>
            <p>
                {comment.date}
            </p>
        </li>
    );
    return (
        <ul>{listComments}</ul>
    );
}
export default ListComments;