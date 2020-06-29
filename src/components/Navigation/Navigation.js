import React from 'react';
import menuIcon from '../../assets/icon/menu.png';
import categoryIcon from '../../assets/icon/category.png';
import alertIcon from '../../assets/icon/alert.png';

const style = {
  width: '28px'
}

const navigation = props => (
  <nav className="container pt-3 pb-5 mb-5 h4">
    <div className="d-flex">
      <a className=" mx-3 mr-auto" href="/"><img src={menuIcon} alt="menu" style={style} /></a>
      <a className=" mx-3" href="/"><img src={categoryIcon} alt="category" style={style} /></a>
      <a className=" mx-3" href="/"><img src={alertIcon} alt="alert" style={style} /></a>
    </div>
  </nav>
);

export default navigation;