import inventImage from '../assets/images/inventImage.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="container my-5 py-5">
        <div className='row'>
            <div className="col-md-6">
                <h1>Product Inventory</h1>
                <p className='my-3'>Our **Product Inventory System** simplifies stock management, providing real-time tracking, automated updates, and insightful reporting. Designed to optimize efficiency, it helps businesses monitor inventory levels, categorize products, and make data-driven decisions with ease and accuracy.</p>

                <Link to="/dashboard" className='btn btn-primary btn-lg w-100 rounded-pill'>Get Started</Link>
            </div>
            <div className="col-md-6">
                <img src={ inventImage } alt="" className='w-100 img-fluid rounded' />
            </div>
        </div>
    
      <section className="icons bg-light rounded p-5">
        <div className="container-xl">
            <div className="row">
                <div className="col-md-4 d-flex gap-4">
                    <i className="fa-solid fa-plus-circle fa-3x text-primary"></i>
                    <div className="">
                        <h5 className="fw-bold">Add New Products Easily</h5>
                        <p className="text-muted">Easily add new products to your store with just a few clicks. Fill out product details like name, price, category, and description. Upload product images to give your customers a visual of what they are buying.
                        Button: Add Your First Product</p>
                    </div>
                </div>

                <div className="col-md-4 d-flex gap-4">
                <i className="fa-solid fa-3x fa-boxes-stacked text-success"></i>
                    <div className="">
                        <h5 className="fw-bold">Organize Your Inventory</h5>
                        <p className="text-muted">Keep track of all your products in one place. View detailed information about each product, including price, stock levels, and descriptions. Edit or delete products anytime to keep your inventory up-to-date and well-organized.
                        Button: Manage Inventory</p>
                    </div>
                </div>

                <div className="col-md-4 d-flex gap-4">
                <i className="fa-solid fa-3x fa-layer-group text-warning"></i>
                    <div className="">
                        <h5 className="fw-bold">Categorize Products for Easy Browsing</h5>
                        <p className="text-muted">Organize your stores products into categories like Electronics, Clothing, and Furniture. With categories, your customers can easily find what they are looking for, enhancing their shopping experience.
                        Button: View Categories</p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Subscription */}

      <section id="subscription" className="my-5">
        <div className="container">
            <div className="col-md-6 offset-md-3 text-center align-items-center">
                <h2 className="fw-bold"><i className="fa-solid fa-envelope text-primary"></i> Stay Updated with the Latest Features</h2>
                <p>Be the first to know about new features, product updates, and tips on maximizing your inventory management system. Subscribe to our newsletter and never miss an important update that can help you streamline your business operations.</p>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center align-items-center">
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder='Enter Email Address'/>
                        <button type='button' className="btn btn-primary text-white rounded-0">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>


    

    
  )
}

export default LandingPage