import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  return (
    <section class="bg-light py-5">
      <Container>
        <Row>
          <Col md={3} sm={6} class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p class="h2 text-dark"><span class="counter" data-count="8">10</span>K+</p>
            <h6 class="text-dark font-weight-normal">Downloads per day</h6>
          </Col>
          <Col md={3} sm={6} class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p class="h2 text-dark"><span class="counter" data-count="20">20</span>+</p>
            <h6 class="text-dark font-weight-normal">Design awards</h6>
          </Col>
          <Col md={3} sm={6} class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p class="h2 text-dark"><span class="counter" data-count="25">30</span>K+</p>
            <h6 class="text-dark font-weight-normal">Totally satisfied users</h6>
          </Col>
          <Col md={3} sm={6} class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p class="h2 text-dark"><span class="counter" data-count="30">40</span>+</p>
            <h6 class="text-dark font-weight-normal">People behind this app</h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Counter