import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CategorySvc from './Category.service';
import { NavItem } from 'react-bootstrap';


const CategoryCreate = () => {
    const navigate= useNavigate();
    const [loading ,setLoading] = useState(false);
    const [listOfCat ,setListOfCat] = useState();
    const CategorySchema = Yup.object({
        name: Yup.string().required(),
      parent: Yup.string().nullable(),
        status :Yup.string().matches(/active|inactive/).default('active'),
        // image:Yup.object().nullable()
    })
    const { register, handleSubmit, formState:{ errors }, setError, setValue, watch } = useForm({
        resolver:yupResolver(CategorySchema)
    }
       
    )

    const SubmitEvent =async(data) => {
    try{
      
        console.log(data);
        setLoading(true);
        if(!data.image){
            setError('image', {message:'image is required'})
        }else{
            let response =await CategorySvc.createCategory(data)
            toast.success(response.data.msg)
            navigate('/addmin/categorylist')
            console.log(response)
        }

    }catch(exception){
     console.log(exception)
        toast.error(exception.data?.msg)
    } finally{
        setLoading(false);
    }
        console.log(data);
    }

    const handleImage = (e) => {
        // console.log(e.target.files);
        let image = e.target.files[0];  // single image ma yeti pathaunai parxa
        //validation of image  size and extension like .png .jpg
        let extension = (image.name.split('.')).pop();
        let size = image.size;
        let allow = ['jpg', 'png', 'jpeg', 'gif', 'svg', 'bmp', 'webp','PNG','JPEG']
        if (allow.includes(extension.toLowerCase())) {
            if (size <= 400000) {
                setValue('image', image)
            } else {
                setError('image', "image file size should be less than 4mb")
            }
        }
        else {
            setError('image', "image format is not supported")
        }
        console.log(image);
        console.log(errors);

    }
    // const inputField = watch('image')
    // console.log(inputField)

// listing category in parent dropdown
    const listALLCat = async() => {
        try{
            const list = await CategorySvc.listAllCategoryData();
            setListOfCat(list.data.data);
        }catch(exception){
            throw exception
        }
    }

useEffect(()=>{
    listALLCat()
},[])

    return (
        <>
        <div class="container-fluid px-4">
                <h1 class="mt-4">Category Manager</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to="/addmin/category">DashBoard</NavLink></li>
                        <li class="breadcrumb-item"><NavLink to="/addmin/categorylist">categorylist</NavLink></li>
                     
                    </ol>
                </nav>
                <div class="card mb-4">
                    <div class="card-body">
                        <div className="banner_title">
                            <h4>Category Form</h4>
                            <button type="button" class="btn btn-secondary">Create Brand</button>
                        </div>
                    </div>
                </div>
                <div ></div>
                <div class="card mb-4"><div class="card-body">

                    <form class="w-100" onSubmit={handleSubmit(SubmitEvent)}>

                        <div class="form-group row">
                            <label htmlFor="" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input  type="text" class="form-control" id=""
                                    {...register("name", { required: true })} />
                                <span> {(errors && errors.name?.message) ? errors.name.message : ''}</span>
                            </div>
                        </div>
                
                        <div class="form-group row">
                            <label htmlFor="" class="col-sm-2 col-form-label">status</label>
                            <div class="col-sm-10">
                                <select  class="form-control"  {...register('status', { required: true, value: "active" })} >
                                    <option value={"active"}>publish</option>
                                    <option value={"inactive"}>Unpublish</option>
                                </select>
                                <span> {(errors && errors.status?.message) ? errors.status.message : ''}</span>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label htmlFor="" class="col-sm-2 col-form-label">Parent</label>
                            <div class="col-sm-10">
                                <select  class="form-control"  {...register('parent', { required: false, value: "active" })} >
                                    <option value="">--select one--</option>
                                    {listOfCat && listOfCat.map((cat,index)=>(
                                        <option key ={index} value={cat._id}>{cat.name}</option>
                                    ))}
                                  
                                </select>
                                <span> {(errors && errors.status?.message) ? errors.status.message : ''}</span>
                            </div>
                        </div>
                        
                        {/* <div class="form-group row">
                            <label htmlFor="" class="col-sm-2 col-form-label">Parent</label>
                            <div class="col-sm-10">
                                <input  type="text" class="form-control" id=""
                                    {...register("parent", { required: true })} />
                                <span> {(errors && errors.parent?.message) ? errors.parent.message : ''}</span>
                            </div>
                        </div> */}
                
                        <div class="form-group row">
                            <label htmlFor="" class="col-sm-2 col-form-label">Images</label>
                            <div class="col-sm-10">
                                <input  type="file" class="form-control" id=""
                                    //    {...register('image', {required:true})}
                                    onChange={handleImage}
                                />
                                <span> {(errors && errors.image?.message) ? errors.image.message : ''}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-2">
                                <button type="submit" disabled={loading} class="btn btn-success">Create Brand</button> &nbsp;
                                <button type="button" class="btn btn-success">Cancel</button>

                            </div>
                        </div>
                    </form>



                </div></div>
            </div>

        </>
    )
}

export default CategoryCreate