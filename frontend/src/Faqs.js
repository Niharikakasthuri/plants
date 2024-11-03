import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'
const Faqs = () => {
  return (
    <div>
        <Nav/>
        
<section className='nav-top'>
  <h3 class="text-center mb-3 mt-3">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="far fa-paper-plane text-primary pe-2"></i>Q. Whay is your replacement and returns policy?</h6>
      <p>
      Minor in-transit shock is quite natural. In the rare cases that your plant reaches you in a severely damaged condition, 
      we provide free replacements once you share your order ID and images of the damaged product with us. 
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-pen-alt text-primary pe-2"></i>Q. What are the shipping charges?</h6>
      <p>
      We offer free shipping for orders above 1000/- for all online Orders.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-user text-primary pe-2"></i>Q. Where are you based?</h6>
      <p>
        Currently, we are based in Chennai, Hyderabad, Bangalore, Delhi.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-rocket text-primary pe-2"></i>Q. The plants I received are in a very small pot. Should I repot them?</h6>
      <p>
      We do not recommend repotting plants immediately after delivery as the plants have just travelled for some days before
       reaching you. You can repot your plant a couple of weeks after it settles in its new environment.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-home text-primary pe-2"></i> Q. Where do you deliver?</h6>
      <p>We deliver all over India.</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-book-open text-primary pe-2"></i>Q. Won't plants die during shipping?</h6>
      <p>
      Plants when packed well can be shipped around the world. We securely pack each plant with great care to
       make sure it reaches you in a healthy and happy condition.We only sell hardy plants online, and are confident
        that our plants will reach you feeling excited to be in a new home. 
      </p>
    </div>
  </div>
</section>
<Footer/>
        </div>
  )
}

export default Faqs