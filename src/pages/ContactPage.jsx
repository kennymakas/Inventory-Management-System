

const ContactPage = () => {
  return (
    <div className='bg-light'>
        <section className="my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Contact Information</h1>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Form */}
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                           <div className="mb-3">
                                <input type="text" name='name' className="form-control form-control-lg" placeholder='Enter Your Name'/>
                            </div>
                            <div className="mb-3">
                                <input type="email" name='email' className="form-control form-control-lg" placeholder='Enter Your Email'/>
                            </div>
                            <div className="mb-3">
                                <textarea name="message" id="" className='form-control form-control-lg' rows='6' placeholder='Enter Message'></textarea>
                            </div>
                            <div className="d-grid">
                                <button className='btn btn-primary text-white my-3'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactPage