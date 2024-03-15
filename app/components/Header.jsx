"use client"
import { headerLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
// https://demo.themefisher.com/agico-bootstrap/about.html
const Header = () => {

  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 10) {
        setNavClass('nav-bg')
      } else {
        setNavClass('')
      }
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navClass]);

  return (
    <div className={`naviagtion fixed-top transition ${navClass}`}>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link className="navbar-brand p-0" href="/"><Image height={43} width={148} src="/logo.png" alt="Agico" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav mx-auto">
              {headerLinks.map(link => (
                <li className="nav-item" key={link.link}>
                  <Link className="nav-link text-white text-capitalize" href={link.link}>{link.name}</Link>
                </li>
              ))}

            </ul>
            <Link href="/signup" className="btn btn-outline-primary text-white ml-3">sign up</Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header