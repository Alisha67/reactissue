import React from 'react'
import img1 from "../../assets/CSS/images/ban1.png"
import img2 from "../../assets/CSS/images/banner2.png"
import img3 from "../../assets/CSS/images/Untitled design (1).png"
const HomeBanner = () => {
  return (
<>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={img1}  className="d-block w-100 img-fluid" alt="..." width="100%"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." width="100%"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." width="100%"/>
    </div>
  </div>
</div>

</>
  )
}

export default HomeBanner