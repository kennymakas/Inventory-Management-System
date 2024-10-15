import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/products/ProductsPage';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/products/NotFoundPage';

// Add New Product
const App = () => {
  const newProduct = async (addNewProduct) => {
    const res = await fetch('https://inventory-strapi-data.onrender.com/api/products', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(addNewProduct)});
    return;
  }

// Delete Product
  const deleteProduct = async (id) =>{
    console.log('delete', id)
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/dashboard' element= {<Dashboard />}/>
        <Route index element = {<LandingPage />}/>
        <Route path='*' element = {<NotFoundPage />}/>
        <Route path='/products' element = {<ProductsPage addProductSubmit={newProduct} deleteProduct={ deleteProduct }/>}/>
      </Route>
      
    )
  );
  return (
    <RouterProvider router = {router} />
  );
}

export default App