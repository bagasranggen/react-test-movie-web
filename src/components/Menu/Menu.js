import React from 'react';

const menu = () => {
  return (
    <div className="container text-center" id="menu">
      <ul className="list-inline text-dark-gray font-medium py-5">
        <li className="list-inline-item p-4 menu-active">IN THEATERS</li>
        <li className="list-inline-item p-4">COMING SOON</li>
        <li className="list-inline-item p-4">CHARTS</li>
        <li className="list-inline-item p-4">TV SERIES</li>
        <li className="list-inline-item p-4">TRAILERS</li>
        <li className="list-inline-item p-4">MORE</li>
      </ul>
    </div>
  )
}

export default menu;