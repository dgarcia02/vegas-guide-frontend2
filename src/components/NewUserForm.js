import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { userAuth } from '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewUserForm = () => {

    return (
        <div className="form-container">
            <h4>Create an Account</h4>
            <Form className="newsUser-form">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Enter a password." />
                </Form.Group>

                <Button variant='primary' type='submit'>
                Sign Up
                </Button>
                <br/>
                <br/>
                <span>Have an account?</span>
            </Form>
        </div>
    )
}

export default NewUserForm;
