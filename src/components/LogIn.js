import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {

    return (
        <div id="form-container">
            <Form className="loginForm">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password." />
                </Form.Group>

                <Button variant="primary" type="submit">
                Log In
                </Button>
                <br/>
                <br/>
                <p>Need an account?</p>
            </Form>
        </div>
    )
}

export default LoginForm;
