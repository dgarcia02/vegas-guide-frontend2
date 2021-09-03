import axios from 'axios';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setShow } from '../actions';

const Shows = () => {
    const dispatch = useDispatch()
    const shows = useSelector(state => state.shows)

    // const getShows = () => {
    //     axios
    //         .get("https://app.ticketmaster.com/discovery/v2/events.json?keyword=rupauls&apikey=2xVQNFpSH4QhJRlTAQkkCqiR1ATG52I9")
    //         .then((response) => {
    //             dispatch(setShow())
    //         })
    // }

    return (
        <div className="shows-container">
            {/* <h3>{shows}</h3> */}
        </div>
    )
}

export default Shows;
