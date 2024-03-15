'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';

const Testimonial = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    // nextArrow: '<buttton class="nextarrow"></buttton>',
    // prevArrow: '<buttton class="prevarrow"></buttton>'
  };
  return (
    <section class="section bg-light bg-map">
      <Container class="container">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid" src="images/testimonial-img.png" alt="" />
          </div>
          <div class="col-md-6">
            <p class="subtitle">testimonials</p>
            <h2 class="section-title mb-5">What Our Clients Says?</h2>
            <Slider {...settings} className='testimonial-slider-single' data-aos="fade-up" data-aos-delay="200">
              <div class="slider-item">
                <img class="mb-5" src="/images/quotation.png" alt="quote-icon" />
                <p class="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do
                  usmod tempor
                  incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip
                  commodo.</p>
                <h5 class="text-dark">Liam Hughes</h5>
                <h6 class="text-color">Happy client</h6>
              </div>
              <div class="slider-item">
                <img class="mb-5" src="/images/quotation.png" alt="quote-icon" />
                <p class="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do
                  usmod tempor
                  incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip
                  commodo.</p>
                <h5 class="text-dark">Liam Hughes</h5>
                <h6 class="text-color">Happy client</h6>
              </div>
              <div class="slider-item">
                <img class="mb-5" src="/images/quotation.png" alt="quote-icon" />
                <p class="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do
                  usmod tempor
                  incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip
                  commodo.</p>
                <h5 class="text-dark">Liam Hughes</h5>
                <h6 class="text-color">Happy client</h6>
              </div>
              <div class="slider-item">
                <img class="mb-5" src="/images/quotation.png" alt="quote-icon" />
                <p class="font-italic mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do
                  usmod tempor
                  incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip
                  commodo.</p>
                <h5 class="text-dark">Liam Hughes</h5>
                <h6 class="text-color">Happy client</h6>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial