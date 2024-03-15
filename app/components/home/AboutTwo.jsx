import Image from 'next/image'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const AboutTwo = () => {
  return (
    <section className="section pb-0 overflow-hidden">
      <Container>
        <Row className="align-items-center">
          <div className="col-lg-6 col-md-7 text-center text-md-left order-md-1 order-2">
            <p className="subtitle" data-aos="fade-right">about agico</p>
            <h2 className="section-title" data-aos="fade-right" data-aos-delay="200">Rehenderit volupate velit proident sunt culpa</h2>
            <p className="mb-4" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
              exercitation ullamco laboris nisi aliquip commodo consequat. duis aute.</p>
            <a href="about.html" className="btn btn-outline-primary" data-aos="fade-right" data-aos-delay="500">read more</a>
          </div>
          <div className="col-lg-6 col-md-5 text-center text-md-left order-1 order-md-2 mb-4 mb-md-0">
            <Image height={439} width={540} src="/images/about/about-2.png" className="img-fluid w-100" alt="about-2" data-aos="fade-left" />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default AboutTwo