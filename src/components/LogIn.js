import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-responsive-modal';

const Login = () => {

    return (
        <div id="modal">
            <Modal className="modal-input">
                <a id="close" href="#">Close</a>
                <Form>
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
                </Form>
                <p>Need an account?</p>
            </Modal>
        </div>
    )
}

export default Login;
