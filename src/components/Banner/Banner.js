import React from 'react';
import menuIcon from '../../assets/icon/menu.png';
import categoryIcon from '../../assets/icon/category.png';
import alertIcon from '../../assets/icon/alert.png';

const style = {
  width: '28px'
}

const banner = () => {
  return (
    <div className="container-fluid text-center text-white" id="banner">

      <nav className="container pt-3 pb-5 mb-5 h4">
        <div className="d-flex">
          <a className=" mx-3 mr-auto" href="#"><img src={menuIcon} alt="menu" style={style} /></a>
          <a className=" mx-3" href="#"><img src={categoryIcon} alt="category" style={style} /></a>
          <a className=" mx-3" href="#"><img src={alertIcon} alt="alert" style={style} /></a>
        </div>
      </nav>

      <div className="py-5 mt-5">
        <a href="#"><i className="rounded-circle p-4 border text-white fas fa-play"></i></a>
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