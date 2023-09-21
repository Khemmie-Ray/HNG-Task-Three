import React, { useEffect, useState } from 'react'

const HomeGallery = () => {
    const [imageData, setImageData] = useState([]);

    // fetch('https://api.unsplash.com/search/photos?query=photography&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU') 
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setImageData(data.results)
    // })

    useEffect(() => {
        fetch('https://api.unsplash.com/search/photos?query=photography&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU', {
            cache: 'force-cache'
        }) 
        .then(response => response.json())
        .then(data => {
            setImageData(data.results)
    })
    }, [])

    console.log(imageData)
    const ImageElement = imageData.map((info, index) => (
        <div key={info.id} className={`image-card ${index % 5 === 0 ? 'large-image' : 'small-image'}`}>
            <img src={info.urls.regular} alt="" />
        </div>
    ))

  return (
    <div className='image-container'>
        {ImageElement}
    </div>
  )
}

export default HomeGallery