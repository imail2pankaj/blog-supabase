import { pricing } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className="section section-lg-bottom">
      <Container>
        <Row>
          <div className="col-12 text-center">
            <h4 className="subtitle" data-aos="fade-up">Pricing table</h4>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">choose your plan</h2>
          </div>
          {
            pricing.map((price, index) => (
              <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4" key={index + 100} data-aos="fade-up" data-aos-delay={`${index + 1}00`}>
                <div className="pricing-table position-relative text-center px-4 py-5 rounded-lg shadow transition bg-white">
                  <span className="badge badge-pill badge-light font-weight-medium mb-3 py-2 px-4 text-primary">{price.type}</span>
                  <div className="h1 text-dark">${price.price}<span className="paragraph text-lowercase"> / mo</span></div>
                  <h5 className="mb-4 font-weight-normal text-color">{price.title}</h5>
                  <hr />
                  <ul className="list-unstyled my-4">
                    {price.services.map(service => <li className="my-3" key={service}>{service}</li>)}
                  </ul>
                  <Link href="/" className="btn btn-outline-primary">select plan</Link>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Pricing