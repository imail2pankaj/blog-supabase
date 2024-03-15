'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from 'react-bootstrap'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick';

const Testimonials = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dot: false,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <section className="section bg-shape-triangles">
      <Container>
        <Row>
          <div className="col-12 text-center">
            <p className="subtitle" data-aos="fade-up">testimonial</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">What Our Clients Says?</h2>
          </div>
        </Row>
        <Slider {...settings} className='row' data-aos="fade-up" data-aos-delay="200">
          <div>
            <div className="card px-4 py-5 border-0 rounded-lg shadow text-center card-border-bottom mb-5 mt-3">
              <FontAwesomeIcon icon={faQuoteLeft} height={40} className='icon-quote mb-4 mx-auto text-primary' />
              <p className="mb-4">Lorem ipsum dolor amet constur adipi sicing elit sed eiusmtempor incid dolore magna aliqu.
                enim minim veniam quis nostrud exercittion.ullamco laboris nisi ut aliquip excepteur sint occaecat cuida
                tat nonproident sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis.</p>
              <h4>Brayan Trecy</h4>
              <span className="h6">Happy client</span>
            </div>
          </div>
          <div>
            <div className="card px-4 py-5 border-0 rounded-lg shadow text-center card-border-bottom mb-5 mt-3">
            <FontAwesomeIcon icon={faQuoteLeft} height={40} className='icon-quote mb-4 mx-auto text-primary' />
              <p className="mb-4">Lorem ipsum dolor amet constur adipi sicing elit sed eiusmtempor incid dolore magna aliqu.
                enim minim veniam quis nostrud exercittion.ullamco laboris nisi ut aliquip excepteur sint occaecat cuida
                tat nonproident sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis.</p>
              <h4>Alice kelly</h4>
              <span className="h6">Happy client</span>
            </div>
          </div>
          <div>
            <div className="card px-4 py-5 border-0 rounded-lg shadow text-center card-border-bottom mb-5 mt-3">
            <FontAwesomeIcon icon={faQuoteLeft} height={40} className='icon-quote mb-4 mx-auto text-primary' />
              <p className="mb-4">Lorem ipsum dolor amet constur adipi sicing elit sed eiusmtempor incid dolore magna aliqu.
                enim minim veniam quis nostrud exercittion.ullamco laboris nisi ut aliquip excepteur sint occaecat cuida
                tat nonproident sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis.</p>
              <h4>Calimon Dian</h4>
              <span className="h6">Happy client</span>
            </div>
          </div>
          <div>
            <div className="card px-4 py-5 border-0 rounded-lg shadow text-center card-border-bottom mb-5 mt-3">
            <FontAwesomeIcon icon={faQuoteLeft} height={40} className='icon-quote mb-4 mx-auto text-primary' />
              <p className="mb-4">Lorem ipsum dolor amet constur adipi sicing elit sed eiusmtempor incid dolore magna aliqu.
                enim minim veniam quis nostrud exercittion.ullamco laboris nisi ut aliquip excepteur sint occaecat cuida
                tat nonproident sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis.</p>
              <h4>Danny Boy</h4>
              <span className="h6">Happy client</span>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default Testimonials