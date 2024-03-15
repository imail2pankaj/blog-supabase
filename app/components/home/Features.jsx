import { homeFeatures } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <section className="section pb-0">
      <Container>
        <Row className="row">
          <div className="col-12 text-center">
            <p className="subtitle" data-aos="fade-up">Features</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">exclusive features</h2>
          </div>
          {homeFeatures.map(feature => (
            <Col lg={4} sm={6} className="mb-4" data-aos="fade-up" key={feature.src}>
              <div className="text-center position-relative px-4 py-5 rounded-lg shadow card-active">
                <Image height={feature.height} width={feature.width} src={feature.src} className="img-fluid" alt={`Images for the - ${feature.title}`} />
                <h5 className="pt-5 pb-3 text-capitalize card-title">{feature.title}</h5>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                  magna.</p>
                <Link className="btn btn-outline-primary" href="/">read more - {feature.title}</Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features