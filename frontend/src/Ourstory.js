import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'
const Ourstory = () => {
  return (
    <div>
        <Nav/>
<section class="py-3 py-md-5 nav-top">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src="https://www.littletreegardenmarket.ca/files/images/news/plants-safe-for-pets-1000x750-63bb34fe20582_n.webp" alt="About 1"/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="mb-3 mt-3">From Hobby to Business</h2>
            <p class="mb-5">
              What started as a small collection of houseplants in our living room quickly blossomed into a thriving business. 
              We found ourselves captivated by the vibrant colors, unique textures, and calming presence of plants. Friends and
               family often sought our advice on plant care and selection, and it became evident that there was a shared 
               enthusiasm for all things green.
            </p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div>
                    <h2 class="h4 mb-3">Our Values</h2>
                    <p class="text-secondary mb-0">
                    At Chaperone, we believe that every plant tells a story. We are dedicated to sourcing our plants
                     from sustainable growers who share our commitment to the environment. Our pots are carefully chosen not
                      just for their aesthetic appeal but also for their quality and sustainability.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div>
                    <h2 class="h4 mb-3 mt-3">Growing Together</h2>
                    <p class="text-secondary mb-0">
                    As we continue to grow, our goal remains the same: to inspire and empower individuals to embrace the
                     beauty of nature. We offer a diverse selection of plants, unique pots, and a range of services designed
                      to enhance your experience. From personalized consultations to plant care workshops, we’re committed to
                       helping you cultivate your green thumb.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
        </div>
  )
}

export default Ourstory