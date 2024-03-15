import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section className="section pb-0 overflow-hidden">
      <Container>
        <Row className="align-items-center">
          <div className="col-lg-6 col-md-5 text-center text-md-left mb-4 mb-md-0">
            <Image height={439} width={540} src="/images/about/about-1.png" className="img-fluid" alt="about-image" data-aos="fade-right" />
          </div>
          <div className="col-lg-6 col-md-7 text-center text-md-left">
            <p className="subtitle" data-aos="fade-left">about agico</p>
            <h2 className="section-title" data-aos="fade-left" data-aos-delay="200">Eausmod tempor magna nostrud exercitation</h2>
            <p className="mb-4" data-aos="fade-left" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
              exercitation ullamco laboris nisi aliquip commodo consequat. duis aute.</p>
            <Link href="/about" className="btn btn-outline-primary" data-aos="fade-left" data-aos-delay="500">read more about</Link>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default About