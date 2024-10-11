import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/products/ProductsPage';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element = {<HomePage />}/>
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