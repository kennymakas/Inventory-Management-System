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
// import { useState } from "react";
import ContactPage from "./pages/ContactPage";

// Add New Product
const App = () => {

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
            <ProductsPage/>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
