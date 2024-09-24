
const NavigationBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand btn btn-dark" href="#">
                    <div className="fw-bold">
                        <span className="text-white">
                            Inventory Management System
                        </span>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link btn btn-dark" aria-current="page" href="#">
                                <span className="text-white fw-bold text-decoration-underline">
                                 Login <i className="fas fa-sign-in-alt text-warning"></i>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-dark" href="#">
                                <span className='text-white fw-bold'>
                                    Sign-Up <i className="fas fa-user-plus text-decoration-none text-warning"></i>
                                </span>            
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavigationBar