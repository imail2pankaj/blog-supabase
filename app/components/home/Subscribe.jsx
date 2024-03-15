import React from 'react'
import { Container } from 'react-bootstrap'

const Subscribe = () => {
  return (
    <section className="subscription">
      <Container>
        <div className="subscription-wrapper">
          <div
            className="d-flex position-relative mx-5 justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
            <h3 className="text-white flex-fill">Subscribe <br /> to our newsletter</h3>
            <form action="#" className="flex-fill">
              <div className="row">
                <div className="col-lg-7 my-md-2 my-2">
                  <input type="email" className="form-control text-white px-4 border-0 w-100 text-center text-md-left"
                    id="email" placeholder="Your Email" name="email" />
                </div>
                <div className="col-lg-5 my-md-2 my-2">
                  <button type="submit" className="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Subscribe