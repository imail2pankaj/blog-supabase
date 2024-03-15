import { teams } from '@/utils/constants'
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Team = () => {
  return (
    <section class="section section-lg-bottom">
      <Container class="container">
        <Row>
          <div class="col-12 text-center">
            <p class="subtitle" data-aos="fade-up" data-aos-delay="00">Team</p>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Expert Person</h2>
          </div>
          {
            teams.map((team, index) => (
              <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={index + 100}>
                <div class="team-member text-center">
                  <img src={`/images/team-member-${index+1}.jpg`} class="img-fluid w-100 rounded-sm" alt="" />
                  <div class="team-member-content p-4">
                    <h5 class="team-member-name text-white">{team.title}</h5>
                    <p class="team-member-designation text-light">{team.designation}</p>
                    <ul class="list-inline team-member-social">
                      <li class="list-inline-item"><a href="#" class="p-2"><i class="text-white"><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                      <li class="list-inline-item"><a href="#" class="p-2"><i class="text-white"><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                      <li class="list-inline-item"><a href="#" class="p-2"><i class="text-white"><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                      <li class="list-inline-item"><a href="#" class="p-2"><i class="text-white"><FontAwesomeIcon icon={faGoogle} /></i></a></li>
                    </ul>
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

export default Team