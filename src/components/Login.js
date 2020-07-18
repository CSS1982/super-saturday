import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Form, FormGroup, Button} from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to= '/'/>
        }
    }
    inputSave = (event) => {
        event.currentTarget.checkValidity()
                console.log(event.currentTarget.checkValidity())
        event.preventDefault()
        this.setState({email:'',
                password:'',
                selectInputValue:''})
        if(event.currentTarget.checkValidity()){
            this.setState({
                redirect: true
              })
        }
    }
    render() {
        return (
            <div className="Login">
                
                <Form noValidate validated={this.state.validated} onSubmit={this.inputSave}>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" required onChange={this.handleInput} value={this.state.email}  />
                    <Form.Control.Feedback>Email checked </Form.Control.Feedback>
                </FormGroup>
                <FormGroup><Form.Label> Password</Form.Label>
                    <Form.Control type="password" name="password" required onChange={this.handleInput} value={this.state.password} />
                    <Form.Control.Feedback type="invalid">Wrong or missing password</Form.Control.Feedback>

                    </FormGroup>
                
                    <Button onClick={this.setRedirect} variant="primary" type="submit" value="Login">Login</Button> 
                    {this.renderRedirect()}
                </Form>
            </div>
        )
    }}

export default Login

