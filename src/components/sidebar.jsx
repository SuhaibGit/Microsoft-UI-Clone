import React from 'react'
import { Link } from 'react-router-dom';

import { RiArrowDropDownLine } from "react-icons/ri";
const Sidebar = ({show}) => {
  return (

    <div className={show ? 'sidenav active':'sidenav '}>
      <ul>
        
        
        <li><Link to="/">Microsoft 365</Link></li>
        <li><Link to="/">Copilot</Link></li>
        <li><Link to="/">Office</Link></li>
        <li><Link to="/">Windows</Link></li>
        <li><Link to="/">Support</Link></li>
        <li><Link to="/">Software <RiArrowDropDownLine /></Link></li>
        <li><Link to="/">PC & Devices <RiArrowDropDownLine /></Link></li>
        <li><Link to="/">Entertainment <RiArrowDropDownLine /></Link></li>
        <li><Link to="/">Business <RiArrowDropDownLine /></Link></li>
        <li><Link to="/">Developer & IT <RiArrowDropDownLine /></Link></li>
        <li><Link to="/">Others <RiArrowDropDownLine /></Link></li>
      </ul>
      </div>
      
  )
}

export default Sidebar