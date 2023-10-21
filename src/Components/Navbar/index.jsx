import React from 'react'
import { useSelector } from 'react-redux'

export default function index() {

    const username = useSelector((state) => state.form.username);
    const ranking = useSelector((state) => state.form.ranking);
    const inc_dec = useSelector((state) => state.form.value);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                        REDUX-STATE
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page" href="#">
                                    {username}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" href="#">
                                    {ranking}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" href="#">
                                    INC_DEC: {inc_dec}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}