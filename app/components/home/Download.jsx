import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Download = () => {
  return (
    <section className="bg-triangles bg-gradient-primary overflow-hidden">
      <Container className="container">
        <Row>
          <Col lg={6} className="text-center text-lg-left">
            <div className="section">
              <h2 className="section-title text-white" data-aos="fade-up">Download Agico Now</h2>
              <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
              <ul className="list-inline">
                <li className="list-inline-item mb-3 mb-lg-0">
                  <a className="btn btn-white" href="#" data-aos="zoom-in" data-aos-delay="400"><Image height={30} width={30} src="/images/001-google-play.png" className="img-fluid mr-2" alt="Download app from Google Play" />Google Play</a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-white" href="#" data-aos="zoom-in" data-aos-delay="500">
                    <FontAwesomeIcon icon={faApple} fontSize={25} />&nbsp;
                     app store</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="align-self-end" data-aos="fade-left" data-aos-delay="600">
            <Image src="/images/download-mobile-img.jpg" height={394} width={540} className="img-fluid w-100" alt="mobile-screen" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Download