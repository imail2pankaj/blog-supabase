import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className="hero-area bg-cover" style={{backgroundImage: `url(/images/banner.png)`}}>
      <Container>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 pl-lg-0 text-center text-lg-left">
            <h1 className="text-white position-relative" data-aos="fade-up" data-aos-delay="1000">Build Your Business Together<span className="watermark">Build</span></h1>
            <p className="text-white pt-2 pb-3" data-aos="fade-up" data-aos-delay="1200">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest
              laborum sed ut perspiciatis.</p>
            <a href="#" className="btn btn-primary" data-aos="fade-up" data-aos-delay="1400">Get Agico</a>
          </div>
          <div className="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
            <Image height={472} width={543} src="/images/banner-1.png" className="img-fluid" alt="banner-image" data-aos="zoom-in" data-aos-delay="1500" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection