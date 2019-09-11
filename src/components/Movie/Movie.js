import React from 'react';

const movie = props => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-2">
      <div className="card h-100">
        <div className="card-img-top position-relative">
          <img className="w-100" src={props.moviePoster} alt="cap" />
          <div className="position-absolute overlay-film text-white text-center">
            <span className="bg-red font-semibold p-1">16</span>
            <p className="font-semibold pt-3">{props.movieTitleHover}</p>
            <button
              className="btn btn-dark w-75 form-control bg-transparent border rounded-0 my-2 font-semibold">SINOPSE</button>
            <button
              className="btn btn-dark w-75 form-control bg-transparent border rounded-0 my-2 font-semibold">TRAILER</button>
          </div>
          <div className={"position-absolute launch bg-orange py-2 px-3 " + props.launch}>
            <small className="font-semibold text-red m-0 p-1">LAUNCH</small>
          </div>
          <div className="position-absolute plus btn-more bg-orange pt-2 pl-3 pr-2">
            <a href="#"><h6 className="font-semibold h3 text-white m-0">+</h6></a>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text font-semibold text-dark-gray m-0 text-uppercase">{props.movieTitle}</p>
          <small className="card-text text-orange font-medium">Action, Adventure, Sci-Fi</small>
          <div className="d-block text-orange pt-2">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="pl-3 h5 font-semibold text-dark-gray">8.3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default movie;