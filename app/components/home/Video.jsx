'use client'
import "venobox/dist/venobox.min.css"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery';

const Video = () => {

  useEffect(() => {
    // $('.venobox').venobox();
  }, [])
  return (
    <section className="section-lg pb-0 bg-cover" style={{ backgroundImage: "url(/images/bg-check-video.png)" }}>
      <Container className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pr-lg-5 mb-md-0 mb-5">
            <div className="mobile-height position-relative rounded-lg overlay-gradient" style={{ backgroundImage: "url(/images/check-video.webp)" }} data-aos="zoom-in">
              <div className="pulse-container">
                <div className="pulse-box">
                  <a className="venobox play-icon icon-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                    {/* <i className="fa fa-play text-secondary"></i> */}
                    <FontAwesomeIcon icon={faPlay} height={40} className='text-secondary' />
                  </a>
                  <Image src={`/images/play.svg`} height={50} width={50} alt='Test' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-4">
            <p className="subtitle" data-aos="fade-up">Check Video</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">Best Way to Chat Your Customers.</h2>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
              laboris nisi aliquip commodo consequat. duis aute.</p>
            <p data-aos="fade-up" data-aos-delay="600">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur excepteur sint
              occaecat cupidatat non proident.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Video