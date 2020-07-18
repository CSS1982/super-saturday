import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {userHistory} from 'react-router-dom'

const AddComentForm = (props) => {
    const initialState = {
            id: '',
            idReceta: '1',
            title: '',
            description: ''
    }
    const {push} = userHistory();
    const [newComent, setComent] = useState(initialState)
    
    const handleOnChange = (event) => {
        setComent({
            ...newComent, 
            [event.target.name] : event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const commentList = [...props.comentarios.items]
        commentList.push(newComent);
        props.setComentariosRecetas({
            items : commentList,
        })
        push('/recetas')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={handleOnChange} type="text" placeholder="Enter title" name="title" value={newComent.title}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleOnChange} type="text" placeholder="Description" name="description" value={newComent.description}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddComentForm
