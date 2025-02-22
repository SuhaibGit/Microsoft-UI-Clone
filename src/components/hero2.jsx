import React from 'react'
import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.avif"
import h3 from "../assets/h3.webp"
import h4 from"../assets/h4.avif"
import "../App.css"

const List = () => {
    const trips = [
        { title: "Designed for life today - and tomorrow", image: h1, duration: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.", btn:"See if your PC is ready" },
        { title: "Microsoft Edge", image:h2, duration: "World-class performance with more privacy, more productivity and more value while you browse.", btn:"Download now"  },
        { title: "Mirosoft Onedrive", image: h3, duration: "Save your files and photos to OneDrive and access them from any device, anywhere.", btn:"Learn More"  },
        { title: "Outlook for iOS and Android", image: h4, duration: "Connect. Organise. Get things done.",btn:"Download now"  },]
  return (
    <div>
        <div className='listm'>
            <div className="trip-list">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <h3 className="trip-name">{trip.title}</h3>
            <p className="trip-duration">{trip.duration}</p>
            <a href="/internship">
                    <button className='herobtn'>{trip.btn}</button>
                  </a>
          </div>
        ))}
      </div>
        </div>
    </div>
    
  )
}

export default List