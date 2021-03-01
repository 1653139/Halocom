import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import Post from './Post.js'
function ListPost(props) {
    return (
        <ListGroup variant="flush">
            {props.data.map((item) => <ListGroup.Item key={item.id}><Post post={item}></Post></ListGroup.Item>)}
        </ListGroup>

    )

}

export default ListPost;