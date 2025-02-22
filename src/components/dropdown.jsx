import React from "react";
import "../App.css";

const Dropdown = () => {
  const dropdownItems = [
    {
      title: "Software",
      links: ["Windows Apps", "AI", "OneDrive", "Outlook", "Skype", "OneNote", "Microsoft Teams"],
    },
    {
      title: "PCs & Devices",
      links: ["Shop Xbox", "Accessories"],
    },
    {
      title: "Entertainment",
      links: ["Xbox games", "PC games", "Windows digital games"],
    },
    {
      title: "Business",
      links: [
        "Microsoft Cloud",
        "Microsoft Security",
        "Azure",
        "Dynamics 365",
        "Microsoft 365 for business",
        "Microsoft Industry",
        "Microsoft Power Platform",
        "Windows 365",
      ],
    },
    {
      title: "Developer & IT",
      links: [
        "Microsoft Developer",
        "Documentation",
        "Microsoft Learn",
        "Microsoft Tech Community",
        "Azure Marketplace",
        "AppSource",
        "Visual Studio",
      ],
    },
    {
      title: "Other",
      links: ["Free downloads & security", "Education", "Gift cards"],
    },
  ];

  return (
    <div className="dropdown-menu">
      {dropdownItems.map((category, index) => (
        <div key={index} className="dropdown-column">
          <h4>{category.title}</h4>
          <ul>
            {category.links.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
    
  );
};

export default Dropdown;
