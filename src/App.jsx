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
import CreateProduct from "./pages/products/CreateProduct";

// Add New Product
const App = () => {
  const [products, setProductsItems] = useState([]);
  const [error, setError] = useState(null);

  // const [productImage, setProductImage] = useState(null);
  // const newProduct = async (addNewProduct) => {
    
  //   const formData = new FormData();
  //   formData.append("files", productImage);
    
  //   const res = await fetch("http://localhost:1337/api/upload", {
  //     method: "POST",
  //     // headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify({ data: addNewProduct }),
  //     body: formData,

  //     mode: "cors",
  //   });
  //   let data = await res.json();
  //   let imageId = data[0].id;
  //   console.log(data);

  //   const productsData = await fetch("http://localhost:1337/api/products", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ data: {
  //       name: addNewProduct.name,
  //       price: addNewProduct.price,
  //       category: addNewProduct.category,
  //       description: addNewProduct.description,
  //       brand: addNewProduct.brand,
  //       productImage: imageId
  //     } }),
  //   });

  //   let products = await productsData.json()
  //   console.log(products)
  // };

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
        <Route path="/register" element={<UserRegistration/>} />
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createproduct" element={<CreateProduct />} />
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
