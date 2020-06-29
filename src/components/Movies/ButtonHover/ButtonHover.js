import React from 'react';

const buttonHover = props => (
  <button
    className="btn btn-dark w-75 form-control bg-transparent border rounded-0 my-2 font-semibold">
    {props.children}
  </button>
);

export default buttonHover;