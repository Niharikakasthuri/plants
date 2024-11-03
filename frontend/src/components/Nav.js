import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from '../CartContext';
import { FaRegIdCard } from "react-icons/fa";
const Nav = () => {
  const {cartItems} = useContext(CartContext)

  return(
    <div className='mb-5'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link to = '/' className='link'>
<img className='img-logo' src = '/logo.png' alt = 'logo'/>
<h1 className='nav-heading'>Chaperone</h1>
</Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="ml-auto">
      <Link to = '/' className='effect'>
      <li className="nav-list">
        Plants&Pots
      </li>
      </Link>
<Link to = '/ourservice'>
<li className='nav-list'>Our Services</li>
</Link>
<Link to = '/ourstory'>
<li className='nav-list'>Our Story</li>
</Link>
<Link to = '/faqs'>
<li className='nav-list'>FAQs</li>
</Link>
<Link to = '/registration'>
<li className='nav-list'><FaRegIdCard /><br/>Registration</li>
</Link>
<Link to = '/profile'>
<li className='nav-list'><CgProfile /><br/>Login</li>
</Link>
<Link to = '/cart'>
<li className='nav-list'><CgShoppingCart /><br/>Cart<span style={{color:'red'}} className='ml-1'>({cartItems.length})</span></li>
</Link>

    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav