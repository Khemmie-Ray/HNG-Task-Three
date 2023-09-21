import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import SearchImage from './SearchImage';

const ImageGallery = () => {
  const [imageInfo, setImageInfo] = useState([]);
  const [layouts, setLayouts] = useState({ lg: [] });

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=friends&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU', {
      cache: 'force-cache'
    })
      .then(response => response.json())
      .then(data => {
        setImageInfo(data.results);
        // Initialize the layout with a regular grid pattern
        const initialLayouts = data.results.map((_, index) => ({
          i: index.toString(),
          x: (index % 5) * 2, 
          y: Math.floor(index / 5) * 2, 
          w: 2, 
          h: 2, 
        }));
        setLayouts({ lg: initialLayouts });
      })
  }, []);

  return (
    <div>
      <header>
        <NavLink to="/" className="logo"><span>Photo</span>-Pro <i className="ri-camera-lens-fill logoImg"></i></NavLink>
        <NavLink to="/" className='logout-btn'><i className="ri-logout-circle-fill logout-icon"></i> Log Out</NavLink>
      </header>
      <main>
        <SearchImage />
        <section className='card'>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 8, sm: 4, xs: 2, xxs: 1 }} 
          rowHeight={180} 
          width={window.innerWidth} 
          onLayoutChange={(newLayout) => setLayouts({ lg: newLayout })}
        >
          {imageInfo.map((info, index) => (
            <div key={info.id} className={`image-card ${index % 5 === 0 ? 'large-image' : 'small-image'}`}>
              <img src={info.urls.regular} alt="" />
            </div>
          ))}
        </ResponsiveGridLayout>
        </section>
      </main>
    </div>
  )
}

export default ImageGallery;
