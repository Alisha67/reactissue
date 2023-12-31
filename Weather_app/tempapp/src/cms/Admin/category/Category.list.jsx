import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

import LightBoxImage from '../imagegallery/image.viewer'
import CategorySvc from './Category.service'
const Categorylist = () => {
  const [bannerData, setBannerData] = useState();
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      let response = await  CategorySvc.listAllCategoryData(10, 1);
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
          let response = await CategorySvc.deleteCategoryById(id)
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

      <div className="container-fluid px-4">
        <h1 className="mt-4">Banner Manager</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><NavLink to="/addmin/category">DashBoard</NavLink></li>
            <li className="breadcrumb-item"><NavLink to="/addmin/categorylist">Categorylist</NavLink></li>

          </ol>
        </nav>
        <div className="card mb-4">
          <div className="card-body">
            <div className="banner_title">
              <h4>Category form</h4>
              <button type="button" className="btn btn-secondary">Create Banner</button>
            </div>
          </div>
        </div>
        <div ></div>
        <div className="card mb-4"><div className="card-body">

          <table className="table">
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
                      <td>{item.name}</td>
                  
                      <td><LightBoxImage image={process.env.REACT_APP_IMAGE_URL+"/uploads/category/"+item.image}/></td>
                      <td>{item.status}</td>
                      <td>
                        <NavLink to={'/addmin/category/'+ item._id} className="btn btn-sm btn-info">Edit</NavLink>
                        <NavLink onClick={(e) => { e.preventDefault(); handleDelete(item._id) }} to={'/addmin/category/' + item._id} className="btn btn-sm btn-danger">delete</NavLink>
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

export default Categorylist