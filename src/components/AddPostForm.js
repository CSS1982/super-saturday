import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddPostForm = (props) => {
    const {posts, setPosts} = props;
    const arrLength = posts.items.length + 1
    const [localPost, setLocalPost] = useState({id: arrLength.toString(), title: '',
    description: ''})
    
    const handleChange = (e) => {
        setLocalPost({...localPost, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts(posts => ({items: [...posts.items, localPost]}))
        setLocalPost({id: (arrLength + 1).toString(), title: '',
        description: ''})
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter here a post title" onChange={handleChange} value={localPost.title}>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" placeholder="Enter here a post description" row="·" onChange={handleChange} value={localPost.description}>
                </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Add post</Button>
            </Form>
        </div>
    );
};

export default AddPostForm;
