import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
    py-14 bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How AirBnB Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals Accepted</p>
        <p>@Abhijeet|Nigam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Decide Your Place</p>
        <p>Choose Your Event</p>
        <p>Organise Your Idea</p>
        <p>Plan Your Meal</p>
        <p>Get Set Go</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>help Centre</p>
        <p>Trust & Safety</p>
        <p>Privacy Policy</p>
        <p>Terms $ Conditions</p>
        <p>For The Win</p>
      </div>
    </div>
  );
}

export default Footer;
