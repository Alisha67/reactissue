import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import BrandSvc from './Brand.service';
import LightBoxImage from '../imagegallery/image.viewer'
const Bannerlist = () => {
  const [bannerData, setBannerData] = useState();
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      let response = await  BrandSvc.listAllBrandData(10, 1);
      setBannerData(response.data.data)
      console.log(response)
      return response
    } catch (exception) {
      console.error(exception)
      toast.error('error while fetching banner....')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDelete = async (id) => {
   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true)
        try {
          let response = await BrandSvc.deleteBrandById(id)
          if (response) {
            toast.success(response.data.msg)
          setLoading(true)
            loadData()
          }
          return response;
        } catch (exception) {
          toast.error('Banner cannot be deleted at this momment')
          throw exception
        }
      }
    }
    )
  }

  return (
    <>

      <div class="container-fluid px-4">
        <h1 class="mt-4">Banner Manager</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><NavLink to="/addmin/banner">DashBoard</NavLink></li>
            <li class="breadcrumb-item"><NavLink to="/addmin/brandlist">brandlist</NavLink></li>

          </ol>
        </nav>
        <div class="card mb-4">
          <div class="card-body">
            <div className="banner_title">
              <h4>Banner Form</h4>
              <button type="button" class="btn btn-secondary">Create Banner</button>
            </div>
          </div>
        </div>
        <div ></div>
        <div class="card mb-4"><div class="card-body">

          <table class="table">
            <thead className='table-dark'>
              <tr>
                <th scope="col">  Title</th>

                <th scope="col">Thumnail</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <>
                  <tr>
                    <td colSpan={5} className='text-center'>loading.....</td>
                  </tr>

                </> : (
                  bannerData && bannerData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                  
                      <td><LightBoxImage/></td>
                      <td>{item.status}</td>
                      <td>
                        <NavLink to={'/addmin/brand/'+item._id} className="btn btn-sm btn-info">Edit</NavLink>
                        <NavLink onClick={(e) => { e.preventDefault(); handleDelete(item._id) }} to={'/addmin/brand/' + item._id} className="btn btn-sm btn-danger">delete</NavLink>
                      </td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>


        </div></div>
      </div>



    </>
  )
}

export default Bannerlist