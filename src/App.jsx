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
import { useState } from "react";
import {useHistory} from 'react-router-dom'

// Add New Product
const App = () => {
  const [productImage, setProductImage] = useState(null);
  const newProduct = async (addNewProduct) => {
    
    const formData = new FormData();
    formData.append("files", productImage);
    
    const res = await fetch("http://localhost:1337/api/upload", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ data: addNewProduct }),
      body: formData,

      mode: "cors",
    });
    let data = await res.json();
    let imageId = data[0].id;
    console.log(data);

    const productsData = await fetch("http://localhost:1337/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: {
        name: addNewProduct.name,
        price: addNewProduct.price,
        category: addNewProduct.category,
        description: addNewProduct.description,
        brand: addNewProduct.brand,
        productImage: imageId
      } }),
    });

    let products = await productsData.json()
    console.log(products)
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const res = await fetch('http://localhost:1337/api/products/' + id, {
      method: "DELETE",
      mode: "cors",
    }).then(() => {
      history.push('/dashboard')
    })
    console.log(res);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              addProductSubmit={newProduct}
              deleteProduct={deleteProduct}
              setProductImage={setProductImage}
              productImage={productImage}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
