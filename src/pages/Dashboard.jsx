
import HeaderSection from '../components/HeaderSection'
import Spinners from '../components/Spinners'
import { useState, useEffect } from 'react'
const Dashboard = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{setLoading(false)}, 2000)
      }, []);

    if(loading) {
        return <Spinners loading={ loading }/>
      }
  return (
    <HeaderSection />
  )
}

export default Dashboard