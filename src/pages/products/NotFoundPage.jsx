import { Link } from 'react-router-dom'
import Spinners from '../../components/Spinners'

const NotFoundPage = () => {
  return (
    <section className='container my-5 py-5'>
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center justify-content-center h-100">
              <Spinners />
                <i className="fas fa-exclamation-triangle text-warning fa-4x mb-4"></i>
                <h1 className="fs-2 fw-bold mb-4">404 Not Found</h1>
                <p className="fs-3 mb-4">This Page Does Not Exist</p>
                <Link to="/" className="btn btn-primary rounded px-3 py-2">Go Back</Link>
            </div>
        </div>
    </section>
  )
}

export default NotFoundPage