

const Footer = () => {
  return (
    <footer className='footer footer-bg bg-dark py-5 text-white position-relative'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-3">
                    <h4 className="text-center text-md-start fw-bold">About Product Inventory</h4>
                    <p className="text-center text-md-start">Our Inventory Management System is designed to streamline your business operations by giving you full control over your stock in real-time. Whether you're managing hundreds of products or just a few.</p>
                </div>
                <div className="col-md-4 my-3">
                    <h4 className="text-center text-md-start fw-bold">Links</h4>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Important: <a href="#">Terms & Conditions</a>
                        </li>
                    </ul>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Useful: <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <ul className="list-unstyled text-center text-md-start">
                        <li>Menu: <a href="#">Home</a>
                        <a href="#">Dashboard</a>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 my-3">
                    <div className="mb-4 text-center text-md-start">
                        <a href="#" className="text-decoration-none">
                            <i className="fab fa-facebook fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-x-twitter fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-instagram fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-youtube fa-3x text-light mx-2"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fa-brands fa-whatsapp fa-3x text-light mx-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer