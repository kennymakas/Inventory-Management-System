import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [user, setUser] = useState({ initials: '' }); 

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({ initials: 'Username' }); // Replace 'username' with code that calls users name
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand btn btn-dark" to="/">
                        <div className="fw-bold d-none d-sm-block">
                            <span className="text-white">Inventory Management System</span>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarNavDropdown"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto my-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Conditionally render either login link or user initials */}
                                {!isLoggedIn ? (
                                    <Link 
                                        className="nav-link btn btn-dark" 
                                        aria-current="page" 
                                        to="/login"
                                        onClick={handleLogin}
                                    >
                                        <span className="text-white fw-bold text-decoration-underline">
                                            Login <i className="fas fa-sign-in-alt text-warning"></i>
                                        </span>
                                    </Link>
                                ) : (
                                    <span className="nav-link text-white fw-bold">
                                        {user.initials} {/* Display user initials/name/username */}
                                    </span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavigationBar;