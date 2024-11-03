import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'
const Ourservices = () => {
  return (
    <div>
        <Nav/>
        <section className='nav-top'>
  <h3 class="text-center mb-3 mt-5 text-success">WHAT WE DO</h3>
  <p class="text-center mb-5 text-secondary font-weight-700">
  we're passionate about bringing nature into your home. Our mission is to provide
   you with high-quality plants and stylish pots,<br/> along with the gradening tools. Here's what we offer:
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="far fa-paper-plane text-primary pe-2"></i>1. Curated Plant Selection</h6>
      <p>
      We offer a diverse range of indoor and outdoor plants, carefully selected for their quality and beauty.
       Whether you're a seasoned gardener or just starting out, we have the perfect plant for you.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-pen-alt text-primary pe-2"></i>2. Custom Potting Services</h6>
      <p>
      Choose your favorite plant and pot, and let us do the rest! Our custom
       potting service ensures that your plants are potted with care and precision, using the best soil and materials.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-user text-primary pe-2"></i>3. Delivery and Setup</h6>
      <p>
      We offer convenient delivery services to get your plants and pots right to your doorstep.
       For larger items or special requests, we can also assist with setup in your home or garden.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-rocket text-primary pe-2"></i>4. Subscription Service</h6>
      <p>
      Join our monthly subscription service to receive a new plant or pot each month!
       Enjoy the excitement of discovering new varieties and enhancing your collection.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-home text-primary pe-2"></i> 5. Emergency Plant Care Services</h6>
      <p>
      For those unexpected plant emergencies, we offer an on-call service where you
       can reach out for quick advice or help if your plants are struggling.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark font-weight-bold"><i class="fas fa-book-open text-primary pe-2"></i>6. Plant Maintenance Services</h6>
      <p>
      For businesses or individuals who want the benefits of greenery without the upkeep, we offer regular
       plant maintenance services. Our team will visit to water, prune, and ensure your plants remain healthy and vibrant.
      </p>
    </div>
  </div>
</section>
<Footer/>
        </div>
  )
}

export default Ourservices