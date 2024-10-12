import { Link } from 'react-router-dom'
import profilePicture from '../assets/images/User.jpg'
const HeaderSection = () => {
  return (
    <div>
      <header className="container my-5 py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={ profilePicture } className="card-img-top" alt="..."/>
              <hr className="w-auto"/>
              <div className="p-2">
                
                <h5 className="card-title fw-bold"><i className="fa-solid fa-id-card"></i> Profile Info.</h5>
                <p className="card-text fw-normal">Watuulo-Richard</p>
                <p className="card-text">Admin</p>
                <p className="card-text">Last Login : xxxx-xx-xx</p>
                <Link to="#" className="btn btn-sm btn-primary w-100"><i className="fa-solid fa-pen-to-square text-warning"></i> Edit Profile</Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-2 border border-1 border-dark-subtle rounded">
            <div className="row">
              <h1 className="fw-bold text-info">Welcome Admin... <i className="fa-solid fa-door-open fs-1 text-warning"></i></h1>
              <hr className="w-auto"/>
            </div>
            <div className="row">
              <div className="col-sm-4 d-none d-lg-block">
                <iframe src="https://free.timeanddate.com/clock/i9k6af6b/n115/szw210/szh210/hocfff/hbw0/cf100/hnc33f/facfff/fdi76/mqcfff/mql10/mqw4/mqd98/mhcfff/mhl5/mhw4/mhd98/mmc000/mml10/mmw1/mmd98" frameborder="0" width="210" height="210" className=''></iframe>
              </div>
              <div className="col-sm-8">
                <div className="card mx-2">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">New Orders</h5>
                      <hr className="w-auto"/>
                        <p className="card-text">
                          Here You Can Make Invoices And Create New Orders
                        </p>
                        <Link to="#" className="btn btn-sm btn-primary"><i className="fa-solid fa-cart-plus text-warning"></i> New Orders</Link>
                  </div> 
                </div>
              </div>

              <div className="col-md-12 my-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fw-bold"><i className="fa-brands fa-product-hunt"></i> Products</h5>
                      <hr className="w-auto"/>
                      <p className="card-text">
                        Here You Can Manage Your Products And You Can Add New A Products
                      </p>
                      <div>
                        <Link to="/products" className="btn btn-sm btn-primary w-100 mb-2"><i className="fa-solid fa-circle-plus text-warning"></i> Add</Link>
                      </div>
                      <div>
                        <Link to="/edit" className="btn btn-sm btn-primary w-100"><i className="fa-solid fa-people-roof text-warning"></i> Manage Products</Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        

      </header>
    </div>
  )
}

export default HeaderSection