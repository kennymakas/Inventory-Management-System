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

// Add New Product
const App = () => {
  const [productImage, setProductImage] = useState(null);
  const newProduct = async (addNewProduct) => {
    // const res = await fetch("http://localhost:1337/api/products/upload", {
    const formData =  new FormData()
    formData.append('files', productImage[0])
    formData.append('data', JSON.stringify({
      name: addNewProduct.name,
      category: addNewProduct.category,
      description: addNewProduct.description,
      brand: addNewProduct.brand,
      price: addNewProduct.price,

    }));
    const res = await fetch("http://localhost:1337/api/products", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ data: addNewProduct }),
      body: formData,
      
      mode: "cors"
    });
    let imageId = res.data[0].id
    console.log(res.json());
    return;
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:1337/api/products/${id}`, {
      method: "DELETE",
      mode: "cors"
    });
    console.log(res)
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
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
