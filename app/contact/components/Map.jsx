'use client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

const Map = () => {

  return (
    <section className="section">
      <Container>
        <Row>
          <div className="col-lg-8 rounded-xs mobile-height mb-5 mb-lg-0" id="map_canvas" data-latitude="51.507351" data-longitude="-0.127758" data-marker="images/marker.png">
            <img src={`/images/google-map.png`} className='img-fluid' alt='Map' />
          </div>
          <div className="col-lg-4">
            <div className="p-5 rounded-xs shadow">
              <h3 className="text-dark">Keep in Touch</h3>
              <p className="border-bottom pb-4">Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor</p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay="100">
                  <i className="fa fa-map-o icon-primary"></i>
                  <div className="pl-3">
                    <h6 className="text-dark">Address</h6>
                    <ul className="list-unstyled">
                      <li>Studio 76d, Riley Ford, North Michaelchester, CF99 6QQ</li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
                  <i className="fa fa-envelope-o icon-primary"></i>
                  <div className="pl-3">
                    <h6 className="text-dark">Email</h6>
                    <ul className="list-unstyled">
                      <li>hello@agico.com</li>
                      <li>info@example.com</li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay="300">
                  <i className="fa fa-phone icon-primary"></i>
                  <div className="pl-3">
                    <h6 className="text-dark">Mobile</h6>
                    <ul className="list-unstyled">
                      <li>(+091) 413 554 8598</li>
                      <li>(+091) 413 554 8599</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Map