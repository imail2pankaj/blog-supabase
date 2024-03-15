import Feature from '@/components/Feature'
import HeadingSection from '@/components/HeadingSection'
import React from 'react'
import ExclusiveFeatures from './components/ExclusiveFeatures'
import Subscribe from '../components/Subscribe'

const page = () => {
  return (
    <>
      <HeadingSection content={{ title: 'Services', text: "Cupidatat non proident sunt culpa qui officia deserunt mollit ", image: "/images/about.jpg" }} />
      <Feature />
      <ExclusiveFeatures />
      <Subscribe />
    </>
  )
}

export default page