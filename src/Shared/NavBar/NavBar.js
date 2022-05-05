import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {

    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                    <button onClick={handleSignOut} type="button" class="btn btn-info">SignOut</button>
                                    :
                                    <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;