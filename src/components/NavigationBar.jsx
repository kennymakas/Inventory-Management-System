import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand btn btn-dark" to="/">
                    <div className="fw-bold">
                        <span className="text-white">
                            Inventory Management System
                        </span>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-dark" aria-current="page" to="#">
                                <span className="text-white fw-bold text-decoration-underline">
                                 Login <i className="fas fa-sign-in-alt text-warning"></i>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-dark" to="#">
                                <span className='text-white fw-bold'>
                                    Sign-Up <i className="fas fa-user-plus text-decoration-none text-warning"></i>
                                </span>            
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavigationBar