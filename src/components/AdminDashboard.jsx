import axios from "axios";
import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom'

function AdminDashboard() {
const [productCount, setProductCount]= useState(0)

useEffect(()=>{
  axios.get("https://inventorymanagement-systemwithstrapi.onrender.com/api/products")
  .then(response=>{
    const products = response.data.data

    setProductCount(products.length)
  })
  .catch(error=>{
    console.error("Error fetching products", error)
  })
},[])



  return (
    
      

      <div className="main">
        <br />
        <br />
        <br />
        <nav className="navbar navbar-expand border-bottom">
          <main className="p-3">
            <div className="container-fluid">
              <div className="mb-3 text-center">
                <h3>Admin Dashboard</h3>
              </div>
            </div>
          </main>
        </nav>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <div className="col">
                    <h3 className="display-3">{productCount}</h3>
                    <h6>Products</h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                <Link to="/productlist">View Details<i className="fa fa-arrow-right"></i></Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <div className="col">
                    <h3 className="display-3">08</h3>
                    <h6>Orders</h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                  <a href="#" className="text-primary">
                    View Details <i className="fa fa-arrow-right"></i>
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <div className="row align-item-center">
                  <div className="col">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <div className="col">
                    <h3 className="display-3">08</h3>
                    <h6>Stock Status</h6>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h5>
                <Link to="/stockstatus">View Details<i className="fa fa-arrow-right"></i></Link>
                </h5>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default AdminDashboard;
