import HeadingSection from '@/components/HeadingSection'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

export default function NotFound() {
  return (
    <>
      <HeadingSection content={{ title: 'Page Not Found', text: "Cupidatat non proident sunt culpa qui officia deserunt mollit ", image: "/images/about.jpg" }} />
      <Container className='text-center my-4'>
        <h1>404 Page Not Found</h1>
        <Link href={'/'}>Return to Home</Link>
      </Container>
    </>
  )
}