import { exclusiveFeatures } from '@/utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const ExclusiveFeatures = () => {
  return (
    <section class="bg-light section section-lg-bottom">
      <Container class="container">
        <Row>
          <div class="col-12 text-center">
            <p class="subtitle" data-aos="fade-up" data-aos-delay="00">Features</p>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">exclusive features</h2>
          </div>
          {
            exclusiveFeatures.map((feature, index) => (
              <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={index} data-aos="fade-up" data-aos-delay={index + 100}>
                <div class="text-center shadow card py-3 border-0 rounded-sm">
                  <div class="card-body">
                    <FontAwesomeIcon icon={feature.icon} height={40} className='text-primary mb-4' />
                    <h4 class="mb-3">{feature.title}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                      magna.</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default ExclusiveFeatures