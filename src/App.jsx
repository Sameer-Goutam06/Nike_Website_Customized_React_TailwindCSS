/* eslint-disable no-unused-vars */
import React from 'react'
import {Hero,PopularProducts,SuperQuality,SpecialOffers,Services,CustomerReviews,Subscribe,Footer} from "./sections/SectionsImporter"
import Navbar from './components/Navbar'
export default function App(){
  return(
    <main>  
        <Navbar/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className="padding">  
        <PopularProducts/>        
      </section>
      <section className="padding">  
        <SuperQuality/>    
      </section>
      <section className="padding">  
        <Services/>     
      </section>
      <section className="padding">  
        <CustomerReviews/>      
      </section> 
      <section className="padding">  
        <Subscribe/>       
      </section>
      <section className="padding">  
        <Footer/>       
      </section>
    </main>
  )
}

//main refers to main.jsx