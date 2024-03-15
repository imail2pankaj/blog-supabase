import { aboutFeatures } from '@/utils/constants'
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons'
import { faCloud, faComments, faDesktop, faLineChart, faObjectUngroup, faSearchPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Feature = () => {
  return (
    <section class="section">
      <Container class="container">
        <Row class="row">
          <div class="col-12 text-center">
            <p class="subtitle" data-aos="fade-up">Services</p>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Our Service Area</h2>
          </div>
          {
            aboutFeatures.map((feature, index) => (
              <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={index + 100}>
                <div class="card border-0 shadow rounded-xs pt-5">
                  <div class="card-body">
                    <i class={`icon-lg icon-${feature.color} icon-bg-${feature.color} icon-bg-circle mb-3 fs-10`}>
                      <FontAwesomeIcon icon={feature.icon} height={40} />
                    </i>
                    <h4 class="mt-4 mb-3">{feature.title}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="00">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3 fs-10">
                  <FontAwesomeIcon icon={faObjectUngroup} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Networking</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faUsers} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Social Activity</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faDesktop} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faCloud} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Cloud Service</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="00">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-red icon-bg-red icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faComments} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Consulting</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-green icon-bg-green icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faSearchPlus} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">SEO Optimization</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faLineChart} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">Usability Testing</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
            <div class="card border-0 shadow rounded-xs pt-5">
              <div class="card-body">
                <i class="icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3">
                  <FontAwesomeIcon icon={faWpexplorer} height={40}  />
                </i>
                <h4 class="mt-4 mb-3">UX Prototyping</h4>
                <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
              </div>
            </div>
          </div> */}
        </Row>
      </Container>
    </section>
  )
}

export default Feature