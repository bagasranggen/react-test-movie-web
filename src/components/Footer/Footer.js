/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const footer = () => {
  return (
    <div className="container-fluid text-center py-4">
      <ul className="list-inline">
        <li className="list-inline-item px-2 h4">
          <a className="text-gray" href="#"><i className="fab fa-twitter"></i></a>
        </li>
        <li className="list-inline-item px-2 h4">
          <a className="text-gray" href="#"><i className="fab fa-facebook-square"></i></a>
        </li>
        <li className="list-inline-item px-2 h4">
          <a className="text-gray" href="#"><i className="fab fa-instagram"></i></a>
        </li>
      </ul>
      <hr />
      <a className="text-orange" href="#"><small className="font-semibold mb-0">MENU</small></a>
    </div>
  )
}

export default footer;