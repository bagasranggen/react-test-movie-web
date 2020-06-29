import React from 'react';
import Navigation from '../Navigation/Navigation';

const banner = () => {
  return (
    <div className="container-fluid text-center text-white" id="banner">
      <Navigation />
      <div className="py-5 mt-5">
        <a href="/"><i className="rounded-circle p-4 border text-white fas fa-play"></i></a>
      </div>
      <div className="w-50 py-5 mx-auto">
        <h1 className="font-extra-bold mb-0">RINGS</h1>
        <p>EVIL IS REBORN</p>
        <p className="font-extra-light">Paramount Pictures have just released the first trailer for the upcoming Horror movie
        "Rings".</p>
      </div>
    </div>
  )
}

export default banner;