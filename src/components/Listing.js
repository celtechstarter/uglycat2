import React from "react";
import "../styles/Listing.css";

const Listing = ({ Name, Alter, Menge, imageURL }) => {
  return (
    <div className="listing-item">
      <h2>{Name}</h2>
      <p>Alter: {Alter}</p>
      <p>Menge: {Menge}</p>
      <img src={imageURL} alt={Name} className="katzenbild" />
      <button type="button" className="btn btn-primary btn-lg">
        Kauf Mich
      </button>
    </div>
  );
};

export default Listing;
