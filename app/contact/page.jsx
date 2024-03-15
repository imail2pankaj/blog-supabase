import HeadingSection from '@/components/HeadingSection'
import React from 'react'
import Map from './components/Map'
import Form from './components/Form'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <>
      <HeadingSection content={{ title: 'Services', text: "Cupidatat non proident sunt culpa qui officia deserunt mollit ", image: "/images/about.jpg" }} />
      <Map />
      <Form />
      <Subscribe />
    </>
  )
}

export default Contact