import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { USERNAME, RANKING, INC, DEC } from '../Features/Form/FormSlice'

export default function index() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [ranking, setRanking] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(USERNAME(username.toUpperCase()));
        dispatch(RANKING(ranking.toUpperCase()));
    }

    return (
        <>
            <h2>Redux-State-Form</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} required /><br />
                <input type="text" className="form-control" placeholder="RANKING"  onChange={(e) => setRanking(e.target.value)} required /><br />
                <button className="btn btn-dark">
                    SEND
                </button>
            </form><br />
            INC_DEC : <button className="btn btn-success" onClick={() => {dispatch(INC())}}>+</button>&nbsp;<button className="btn btn-danger" onClick={() => {dispatch(DEC())}}>-</button><br /><br />
        </>
    );
}