import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../actions';
import { open_close } from '../actions';
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.isLogged)
    const loginOpen = useSelector(state => state.loginOpen)

    return (
        <div className="nav-container">
            <nav className="navbar">
                <h2 id="nav-logo">Logo</h2>
                <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-menu">
                    <li>
                        <a href="#" className="nav-links">Home</a>
                    </li>
                    {
                        isLogged ?
                        <li><a href="#" className="nav-links">Profile</a></li>
                        : ''
                    }

                    {
                        isLogged ?
                        <li>
                            <Button onClick={()=> dispatch(logIn())}>Log Out</Button>
                        </li>
                        :
                        <li>
                            <Button onClick={()=> dispatch(open_close())}>Log In</Button>
                            <Modal
                                open={ loginOpen }
                                onClose={ dispatch(open_close()) }
                                center
                                classNames={{
                                    overlay: 'customOverlay',
                                    modal: 'customModal',
                                }}>
                                <h3>Testing Modal</h3>
                            </Modal>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
