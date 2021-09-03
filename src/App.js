import axios from 'axios';
import './App.css';
// this allows you to call the global states
// dispatch is what actually does the action
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

// Components
import Navbar from './components/Navbar';
import LoginForm from './components/LogIn';

// Bootstrap Components
import Button from 'react-bootstrap/Button';


const App = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    return (
        <div className='container'>
            <Navbar />
            <div className='headerContainer'>
                <img src="https://i.imgur.com/6LtVTDQ.jpg"/>
            </div>
            <>

                <h1>Las Vegas Shows & Events</h1>
                <h3>Upcoming Shows: {counter}</h3>
                <Button onClick={() => dispatch(increment())}>+</Button>
                <Button onClick={() => dispatch(decrement())}>-</Button>

                {isLogged ? <h3>Valuable Information</h3> : ''}
            </>
        </div>
    )
}

export default App;
