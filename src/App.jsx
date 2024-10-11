import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/products/ProductsPage';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/dashboard' element= {<Dashboard />}/>
      <Route index element = {<LandingPage />}/>
      <Route path='/products' element = {<ProductsPage />}/>
    </Route>
    
  )
);
const App = () => {
  return (
    <RouterProvider router = {router} />
  );
}

export default App