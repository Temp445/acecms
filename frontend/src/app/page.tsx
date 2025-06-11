'use client'

import Banner from '@/components/Banner'
import BackToTop from '@/components/BackToTop'
import Clients from '@/components/Clients'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PricingTable from '@/components/PricingTable'
import Scenario from '@/components/Scenario'
import Testimonial from '@/components/testimonial'
import Video from '@/components/Video'
import Why_Choose from '@/components/Why_Choose'
import React, { useEffect } from 'react'
import { trackConversion } from '@/lib/google'
import Navbar1 from '@/components/Navbar1'


const Home = () => {
   
  useEffect(() => {
    trackConversion({
      event: 'cms_homepage_view',
      form_id: 'n/a',
      form_name: 'CMS Homepage Visit'
    });
  }, []);
  
  return (
    <div>
      <div><Navbar1/></div>
    <div className='container mx-auto absolute md:hidden'><Navbar/></div>
    <Hero/>
    <Why_Choose/>
    <Scenario/>
    <Clients/>
    <Banner/>
    <Video/>    
    <Features/>
    <PricingTable/>
    <Testimonial/>
    <Form/>
    <Footer/>
    <BackToTop/>
    </div>
  )
}

export default Home