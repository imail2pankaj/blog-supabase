import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HeadingSection = ({content}) => {
  return (
    <section className="page-title page-title-overlay bg-cover overflow-hidden" style={{ backgroundImage: `url(${content.image})` }}>
      <Container className="container">
        <Row className="row">
          <Col lg={7}>
            <h1 className="text-white position-relative">{content.title}<span className="watermark-sm">{content.title}</span></h1>
            <p className="text-white pt-4 pb-4">{content.text}</p>
          </Col>
          <Col lg={3} className="ml-auto align-self-end">
            <nav className="position-relative zindex-1" aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                <li className="breadcrumb-item text-white fw-bold" aria-current="page">{content.title}</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeadingSection