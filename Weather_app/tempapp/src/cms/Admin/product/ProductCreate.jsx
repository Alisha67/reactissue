import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductSvc from "./ProductSvc";
import Select from 'react-select'
import CategorySvc from "../category/Category.service";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BrandSvc from "../Brand/Brand.service";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listOfCat, setListOfCat] = useState();
  const [brandlist ,setBrandList] = useState();
  const ProductSchema = Yup.object({
    title: Yup.string().required(),
    categories: Yup.array().required(),
    description: Yup.string().nullable(),
    costPrice: Yup.number().min(1).required(),
    Price: Yup.number().min(1).required(),
    discount: Yup.number().min(0).default(0),
    brand: Yup.array().nullable(),
    status: Yup.string().matches(/active|inactive/).default('active'),
    sellerId: Yup.string().nullable()
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(ProductSchema),
  });

  const SubmitEvent = async (data) => {
    try {
      console.log('hello');
      setLoading(true);
      if (!data.image) {
        setError("image", { message: "image is required" });
      } else {
        let response = await ProductSvc.createProduct(data);
        toast.success(response.data.msg);
        navigate("/addmin/categorylist");
        console.log(response);
      }
    } catch (exception) {
      console.log(exception);
      toast.error(exception.data?.msg);
    } finally {
      setLoading(false);
    }
    console.log(data);
  };

  const handleImage = (e) => {
    // console.log(e.target.files);
    let images = Object.values(e.target.files); // single image ma yeti pathaunai parxa
    //validation of image  size and extension like .png .jpg
    let allow = [
      "jpg",
      "png",
      "jpeg",
      "gif",
      "svg",
      "bmp",
      "webp",
      "PNG",
      "JPEG",
    ];
    let validImages=[];
    images.map((imgitem)=>{
      console.log(imgitem.name)
      let extension = imgitem.name.split(".").pop();
      
      let size = imgitem.size;
      if (allow.includes(extension.toLowerCase())) {
        if (size <= 400000) {
        validImages.push(imgitem)
        } else {
          setError("image", "image file size should be less than 4mb");
        }
      } else {
        setError("image", "image format is not supported");
      }
    })
    setValue('images' , validImages)



    console.log(images);
    console.log(errors);
  };
  // const inputField = watch('image')
  // console.log(inputField)

  // listing category in parent dropdown
  const listALLCat = async () => {
    try {
      const list = await CategorySvc.listAllCategoryData();
      let selectFormatData =[];
      if(list.data.data){
        selectFormatData =list.data.data.map((item)=>{
          return{
            value: item._id,
            label:item.name
          }
        })
      }
      setListOfCat(selectFormatData);
    } catch (exception) {
      throw exception;
    }
  };


  const listAllBrand =async()=>{
    try{
  const listB = await BrandSvc.listAllBrandData();
  let selectFormatData =[];
  if(listB.data.data){
    selectFormatData =listB.data.data.map((item)=>{
      return{
        value: item._id,
        label:item.title
      }
    })
  }
   setBrandList(selectFormatData)

    }catch(exception){
      throw exception;
    }
  }

  useEffect(() => {
    listALLCat();
    listAllBrand();
  }, []);

  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Product Manager</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/addmin/product">DashBoard</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/addmin/productlist">Product list</NavLink>
            </li>
          </ol>
        </nav>
        <div className="card mb-4">
          <div className="card-body">
            <div className="banner_title">
              <h4>Product Form</h4>
              <button type="button" className="btn btn-secondary">
                Create Product
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div className="card mb-4">
          <div className="card-body">
            <form className="w-100" onSubmit={handleSubmit(SubmitEvent)}>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    // defaultValue={detail?.title} 2nd case
                    {...register("title", { required: true })}
                  />
                  <span>
                    {" "}
                    {errors && errors.title?.message
                      ? errors.title.message
                      : ""}
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Categories
                </label>
                <div className="col-sm-10">
                  <Select 
       
                  isMulti
                   options={listOfCat}
                  className="basic-multi-select"
                  classNamePrefix="select"
              required
              onChange={(selOpt)=>{
                setValue("categories",selOpt)
              }}
                  />
           
                
       
                  <span>
                    {" "}
                    {errors && errors.categories?.message
                      ? errors.categories.message
                      : ""}
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                <CKEditor
                    editor={ ClassicEditor }
                  data=""
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setValue('description' ,data)
                        console.log( { event, editor, data } );
                    } }
                  
                />
                  {/* <textPath
                    type="text"
                    className="form-control"
                    id=""
                    // defaultValue={detail?.title} 2nd case
                    {...register("description")}
                  /> */}
                  <span>
                    {" "}
                    {errors && errors.description?.message
                      ? errors.description.message
                      : ""}
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Cost Price
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"

                    className="form-control"
                    id=""
                    min={1}
                    // defaultValue={detail?.title} 2nd case
                    {...register("costPrice", { required: true })}
                  />
                  <span>
                    {" "}
                    {errors && errors.costPrice?.message
                      ? errors.costPrice.message
                      : ""}
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                   Price
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    min={1}
                    className="form-control"
                    id=""
                    // defaultValue={detail?.title} 2nd case
                    {...register("Price", { required: true })}
                  />
                  <span>
                    {" "}
                    {errors && errors.Price?.message
                      ? errors.Price.message
                      : ""}
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Discount(%)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    // defaultValue={detail?.title} 2nd case
                    {...register("discount", { required: true })}
                  />
                  <span>
                    {" "}
                    {errors && errors.discount?.message
                      ? errors.discount.message
                      : ""}
                  </span>
                </div>
              </div>
          
              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
           Brand
                </label>
                <div className="col-sm-10">
                <Select 
       
                  isMulti
               
                  options={brandlist}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  required
                  onChange={(selOpt)=>{
                    setValue("brand",selOpt)
                  }
                }
                  />
           
                  <span>
                    {" "}
                    {errors && errors.brand?.message
                      ? errors.brand.message
                      : ""}
                  </span>
                </div>
              </div>
{/* 
              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
               seller
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    //  defaultValue={detail?.status}
                    {...register("brand", { required: true})}
                  >
                  
                  </select>
                  <span>
                    {" "}
                    {errors && errors.status?.message
                      ? errors.status.message
                      : ""}
                  </span>
                </div>
              </div> */}
              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
               status
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    //  defaultValue={detail?.status}
                    {...register("status", { required: true, value: "active" })}
                  >
                    <option value={"active"}>publish</option>
                    <option value={"inactive"}>Unpublish</option>
                  </select>
                  <span>
                    {" "}
                    {errors && errors.status?.message
                      ? errors.status.message
                      : ""}
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Images
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id=""
                    //    {...register('image', {required:true})}
                    onChange={handleImage}
                    multiple
                  />
                  <span>
                    {" "}
                    {errors && errors.images?.message
                      ? errors.images.message
                      : ""}
                  </span>
                </div>

             
              </div>

              <div className="row">
                <div className="col-sm-10 offset-sm-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-success"
                  >
                   Submit
                  </button>{" "}
                  &nbsp;
                  <button type="button" className="btn btn-success">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
