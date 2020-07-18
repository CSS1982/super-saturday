import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function PostsList(props) {
    console.log("user: ", props.user)
    return (
        <div className="PostCard-container">
            {props.posts.items.map(post =>
                <Card key={post.id}
                    style={{
                        width: '250px',
                        border: 'none'
                    }}>
                    <Card.Body
                    >
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Author:
                        </Card.Subtitle>
                        <Card.Text>{post.description}</Card.Text>
                        <hr />
                    </Card.Body>
                </Card>
            )}

            <Link to='/posts/add'>
                <Button variant="outline-info" size='sm'>
                    Add Post
                </Button>
            </Link>
        </div>
    )
}
