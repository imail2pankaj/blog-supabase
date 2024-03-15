import { partners } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Partners = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="col-12">
            <ul className="list-inline d-flex justify-content-between py-3 py-lg-5 border-bottom align-items-center">
              {partners.map(partner =>
                <li key={partner.src} className="list-inline-item">
                  <Image height={partner.height} width={partner.width} className="img-fluid p-2" src={partner.src} alt="partner-1" />
                </li>
              )}
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Partners