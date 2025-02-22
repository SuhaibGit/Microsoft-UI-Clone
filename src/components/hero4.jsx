import React from 'react'
import h1 from "../assets/b1.jpg"
import h2 from "../assets/b2_1.jpg"
import h3 from "../assets/b3_1.jpg"
import h4 from"../assets/b4.jpg"
import "../App.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";


const List2 = () => {
    const trips = [
        { title: "Microsoft 365 Copilot", image: h1, duration: "Save time and focus on the things that matter most with AI in Microsoft 365 for business.", btn:"Learn more" },
        { title: "Get Microsoft Teams for your business", image:h2, duration: "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.", btn:"Find the right plan for your business"  },
        { title: "Welcome to your Windows 365 Cloud PC", image: h3, duration: "Securely stream your Windows experience from the Microsoft cloud to any device.", btn:"Get it today"  },
        { title: "Visual Studio 2022", image: h4, duration: "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.",btn:"Download Visual Studio 2022"  },]
  return (
    <div>
        <div className='listm'>
            <div className="trip-list">
              <h1>For business</h1>
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <h3 className="trip-name">{trip.title}</h3>
            <p className="trip-duration">{trip.duration}</p>
            <a href="/internship">
                    <button className='herobtn2'>{trip.btn}</button>
                  </a>
          </div>
        ))}
        <div className='flt'>
        <div className='follow'>
          <h2>Follow Microsoft</h2>
          <FaFacebookF/>
          <FaXTwitter />
          <FaLinkedin />
        </div>
        <div className='follow'>
        <div className="foot_p1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><IoIosArrowRoundUp />Back to Top</div>

        </div>
      </div>
        </div>
    </div>
    </div>
    
  )
}

export default List2