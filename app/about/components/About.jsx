import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-lg-4 mb-4 mb-md-0">
            <div className="position-relative" data-aos="fade-right">
              <img src="/images/about/about-3.jpg" className="img-fluid rounded-sm" alt="video-bg" />
              <div className="floating-video overlay rounded-sm">
                <img src="/images/about/about-4.jpg" className="img-fluid rounded-sm" alt="video-thumb" />
                <a className="venobox play-icon icon-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                  {/* <FontAwesomeIcon icon={faPlay} className='text-secondary bg-white rounded-circle' fontSize={20} /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center pl-lg-4">
            <p className="subtitle" data-aos="fade-up">About Agico</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">Eausmod tempor magna nostrud exercitation</h2>
            <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor
              incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
            <p data-aos="fade-up" data-aos-delay="500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
              doloreque laudantum.</p>
            <Link className="btn btn-primary" href="/contact" data-aos="fade-up" data-aos-delay="600">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About