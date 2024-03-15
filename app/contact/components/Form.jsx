import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Form = () => {
  return (
    <section className="section section-lg-bottom bg-light">
      <Container>
        <Row>
          <div className="col-12 text-center">
            <p className="subtitle">Message</p>
            <h2 className="section-title">Leave A Message</h2>
          </div>
          <div className="col-12 text-center">
            <form action="#" className="row">
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" placeholder="Your email" />
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" placeholder="Your Name" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control mb-4" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" className="form-control mb-4" placeholder="Message"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit Now</button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Form