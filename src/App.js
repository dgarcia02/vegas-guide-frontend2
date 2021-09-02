import axios from 'axios';
import './App.css';
// this allows you to call the global states
// dispatch is what actually does the action
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Las Vegas Shows & Events</h1>
            <h3>Upcoming Shows: {counter}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {isLogged ? <h3>Valuable Information</h3> : ''}
        </>
    )
}

export default App;
