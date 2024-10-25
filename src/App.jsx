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

// Add New Product
const App = () => {
  const [products, setProductsItems] = useState([]);
  const [error, setError] = useState(null);

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
    } catch (error) {
      setError(error.message);
    }
    
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegistration/>} />
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/products"
          element={
            <ProductsPage deleteProduct={deleteProduct}/>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
