import React from 'react';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-3.webp';
import img3 from '../images/img-4.jpg';

const Carousle = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <form className="d-flex pt-10">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    style={{ color: '#000000', backgroundColor: '#E0F4FF'}} // Set the text color of input field
  />
  <button
    className="btn btn-outline-success text-white"
    type="submit"
    style={{
      backgroundColor: '#87C4FF',
      borderColor: '#87C4FF',
      color: 'white'
    }}
  >
    Search
  </button>
</form>

                    </div>
                    <div className="carousel-item active">
    <img src={img1} className="d-block w-100" style={{ filter: "brightness(30%)", height: "520px", objectFit: "fill" }} alt="..." />
</div>
<div className="carousel-item">
    <img src={img2} className="d-block w-100" style={{ filter: "brightness(30%)", height: "520px", objectFit: "fill" }} alt="..." />
</div>
<div className="carousel-item">
    <img src={img3} className="d-block w-100" style={{ filter: "brightness(30%)", height: "520px", objectFit: "fill" }} alt="..." />
</div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ zIndex: "10" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ zIndex: "10" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousle;
