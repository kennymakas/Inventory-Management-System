import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/products/NotFoundPage";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import { useState } from "react";
import ContactPage from "./pages/ContactPage";
import ProductList from "./pages/products/ProductList";
import AdminDashboard from "./components/AdminDashboard";
import StockReport from "./components/StockReport";

// Add New Product
const App = () => {
  const [products, setProductsItems] = useState([]);
  const [error, setError] = useState(null);

  const addProduct = async (addNewProduct) => {
    try {
      // 1. Get products from local storage
      const storedProducts = localStorage.getItem("products");
      const products = storedProducts ? JSON.parse(storedProducts) : [];
  
      // 2. Add new product to local storage
      const updatedProducts = [...products, addNewProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
  
      // 3. Send new product to the backend
      const res = await fetch('https://inventorymanagement-systemwithstrapi.onrender.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addNewProduct),
      });
  
      // Check if the response status is OK (status code 200-299)
      if (!res.ok) {
        throw new Error(`Failed to add product to backend: ${res.statusText}`);
      }
  
      const data = await res.json(); // Parse the response data
      console.log('Product added successfully to backend:', data);
  
      return data; // Return the data from the backend (could be used in your app)
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`https://inventorymanagement-systemwithstrapi.onrender.com/api/products/{id}`, {
        method: "DELETE",
        mode: "cors",
      });
      if(!Response.ok) {
        throw new Error('Failed to delete item');
      }
      // Remove the deleted item from local state
      setProductsItems(products.filter(product => product.id !== id));
    } catch (err) {
      setError(err.message);
    }
    
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/stockstatus" element={<StockReport />} />
        <Route path="/register" element={<UserRegistration/>} />
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
        <Route
          path="/products"
          element={
            <ProductsPage
              addProductSubmit={addProduct}
              deleteProduct={deleteProduct}
              // setProductImage={setProductImage}
              // productImage={productImage}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
