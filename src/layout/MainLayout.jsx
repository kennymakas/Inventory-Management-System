import {  Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
        <NavigationBar/>
        <Outlet />
        <Footer />
    </>
    
  )
}

export default MainLayout