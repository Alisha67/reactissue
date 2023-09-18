import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import bannerService from '../../service/banner.service';
import { toast } from 'react-toastify';

const BannerHomeComp = () => {
    const [bannerlist ,setBannerlist]=useState();
    
    const loadBanner = async()=>{
        try{
let response = await bannerService.getAllHomeBanner();
if(response.data.data){
    setBannerlist(response.data.data)
}
        } catch (exception){
            console.log(exception)
          toast.error("error fetching banner....")
        }
    }

    useEffect(()=>{
        loadBanner()
    },[])

  return (
  <>
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <h1>hello i m banner section</h1>
{bannerlist && bannerlist.map((bannerimg ,index)=>(
  <div className={'carousel-item' + ((index===0) ? 'active' :'')} key={index}>
  <img src={process.env.REACT_IMAGE_URL+"/banner/"+ bannerimg.image} className="d-block w-100" alt="..."/>
</div>
))}
  

  </div>
</div>
  
  </>
  )
}

export default BannerHomeComp