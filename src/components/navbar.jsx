"use client";
import logo from "../assets/microlg.png";
import "../App.css";
import Dropdown from "./dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia"
import { PiShoppingCartThin } from "react-icons/pi";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./sidebar";
import { RiCloseLine } from "react-icons/ri"; // Close Icon

const Navbar = () => {
  const [ showNav, setShowNav] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseClick = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  // Close search bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      
      {/* Logo */}
      <div className="prt1">
        <img src={logo} alt="Logo" />
      </div>

      {/* First List */}
      <div className="cont">
        <div className="prt2">
          <ul>
            <li>Microsoft 365</li>
            <li>Office</li>
            <li>Copilot</li>
            <li>Windows</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Second List */}
        <div className="prt3">
          <ul>
            {["All Microsoft"].map((menu) => (
              <li key={menu} onClick={() => handleMouseClick(menu)} style={{ position: "relative" }}>
                {menu}
                {activeDropdown === menu && <Dropdown />}
                <RiArrowDropDownLine />
              </li>
            ))}
            <li onClick={() => setShowSearch(true)} style={{ cursor: "pointer" }}>Search<LiaSearchSolid /></li>
            <li>Cart<PiShoppingCartThin /></li>
            <li>Sign in<PiUserCirclePlusLight /></li>
          </ul>
      {showSearch && (
        <div className="search-overlay">
          <div className="search-container" ref={searchRef}>
            <input type="text" placeholder="Search..." className="search-bar" />
            <RiCloseLine className="close-icon" onClick={() => setShowSearch(false)} />
          </div>
        </div>
      )}
        </div>
      </div>
      <div className='menu'>
           <IoMenu onClick={()=> setShowNav(!showNav)} />
            <Sidebar show={showNav}/>
      </div>
      
      
    </div>
  );
};

export default Navbar;
