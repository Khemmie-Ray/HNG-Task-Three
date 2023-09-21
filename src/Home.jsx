import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeGallery from './components/HomeGallery'

const Home = () => {
  return (
    <div>
        <header>
          <NavLink to="/" className="logo"><span>Photo</span>-Pro <i class="ri-camera-lens-fill logoImg"></i></NavLink>
          <NavLink to="/login" className='login-btn'>Log In</NavLink>
        </header>
        <main>
          <div className="content">
        <h1>Welcome <span> to</span> Photo-Pro</h1>
        <p>Your gateway to a world of visual storytelling. Immerse yourself in our captivating photo gallery, where each image tells a unique story. From breathtaking landscapes to intimate moments, we invite you to explore the artistry of the world through our lens.</p>
        </div>
        <div>
            <HomeGallery />
        </div>
        </main>
    </div>
  )
}

export default Home