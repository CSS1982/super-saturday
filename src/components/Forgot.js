import React, {useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';


function Forgot() {

       //ESTADO inicial
        const initialState = {
            email: "",
            validated: false,
            sent: false
    }

    //HOOKS
    const [state, setState] = useState(initialState)


    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const inputSave = (event) => {
        if (event.currentTarget.checkValidity()) {
            setState({...state,validated: true, sent: true})
        }
        event.preventDefault()
    }


    if (state.sent){
        return (
            <div>
                <h1>Correo enviado con éxito!!</h1>
                <Link to="/">Home</Link>
            </div>
        )
            
    }else{
        return (
            <div>
                <Form onSubmit={inputSave} noValidate validated={state.validated}>
                    <FormGroup>
                        <FormLabel>Email:</FormLabel>
                        <FormControl type="email" name="email" required onChange={handleInput} value={state.email} placeholder='Ingrese su email'/>
                        <FormControl.Feedback>Tu email es válido!</FormControl.Feedback>
                        <FormControl.Feedback type="invalid">Debe insertar un email válido!</FormControl.Feedback>
                    </FormGroup>
                    <Button variant='primary' type="submit">Enviar el nuevo password</Button>
                </Form>
            </div>
        )
    }
    
}



export default Forgot
