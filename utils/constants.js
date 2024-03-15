import { faWpexplorer } from "@fortawesome/free-brands-svg-icons"
import { faCloud, faComments, faDesktop, faGears, faLineChart, faObjectUngroup, faSearchPlus, faShield, faUsers } from "@fortawesome/free-solid-svg-icons"

export const headerLinks = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/about',
    name: 'about',
  },
  {
    link: '/services',
    name: 'services',
  },
  {
    link: '/blogs',
    name: 'blogs',
  },
  {
    link: '/contact',
    name: 'contact',
  }
]


export const partners = [
  { src: '/images/partners/client-logo-1.png', height: 37, width: 126 },
  { src: '/images/partners/client-logo-2.png', height: 46, width: 229 },
  { src: '/images/partners/client-logo-3.png', height: 25, width: 222 },
  { src: '/images/partners/client-logo-4.png', height: 39, width: 134 },
  { src: '/images/partners/client-logo-5.png', height: 38, width: 172 }
]

export const homeFeatures = [
  { src: '/images/features/feature-1.png', height: 150, width: 191, title: "No Setup" },
  { src: '/images/features/feature-2.png', height: 150, width: 186, title: "free trail" },
  { src: '/images/features/feature-3.png', height: 152, width: 182, title: "optimized data" },
]


export const pricing = [
  { type: 'Basic', price: 49, title: "Best For Small Individuals", services: ['Express Service', 'Customs Clearance', 'Time-Critical Services'] },
  { type: 'Professional', price: 79, title: "Best For Standard Individuals", services: ['Express Service', 'Customs Clearance', 'Time-Critical Services'] },
  { type: 'Business', price: 129, title: "Best For Large Individuals", services: ['Express Service', 'Customs Clearance', 'Time-Critical Services'] },
]


export const aboutFeatures = [
  { title: 'Networking', color: 'primary', icon: faObjectUngroup },
  { title: 'Social Activity', color: 'yellow', icon: faUsers },
  { title: 'Web Design', color: 'purple', icon: faDesktop },
  { title: 'Cloud Service', color: 'cyan', icon: faCloud },
  { title: 'Consulting', color: 'red', icon: faComments },
  { title: 'SEO Optimization', color: 'green', icon: faSearchPlus },
  { title: 'Usability Testing', color: 'orange', icon: faLineChart },
  { title: 'UX Prototyping', color: 'blue', icon: faWpexplorer },
]


export const teams = [
  { title: 'Justine Marshall', designation: "Designer" },
  { title: 'Liam Hughes', designation: "Developer" },
  { title: 'Neil Roberts', designation: "Marketer" },
]


export const exclusiveFeatures = [
  { title: 'Exclusive Design', icon: faDesktop },
  { title: 'Easy Customize', icon: faGears },
  { title: 'Extreme Security', icon: faShield }
]