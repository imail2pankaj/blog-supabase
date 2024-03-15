import React from 'react'
import HeadingSection from '@/components/HeadingSection'
import About from './components/About'
import Counter from './components/Counter'
import Feature from '../../components/Feature'
import Testimonial from './components/Testimonial'
import Team from './components/Team'
import Subscribe from '../components/Subscribe'

const AboutPage = () => {
  return (
    <>
    <HeadingSection content={{title:'About Us', text:"Cupidatat non proident sunt culpa qui officia deserunt mollit ",image:"/images/about.jpg"}} />
    <About />
    <Counter />
    <Feature />
    <Testimonial />
    <Team />
    <Subscribe />
    </>
  )
}

export default AboutPage