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
const ProductCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listOfCat, setListOfCat] = useState();
  const ProductSchema = Yup.object({
    title: Yup.string().required(),
    categories: Yup.string().required(),
    description: Yup.string().nullable(),
    costPrice: Yup.number().min(1).required(),
    Price: Yup.number().min(1).required(),
    discount: Yup.number().min(0).default(0),
    brand: Yup.string().nullable(),
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
      console.log(data);
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
    let image = e.target.files[0]; // single image ma yeti pathaunai parxa
    //validation of image  size and extension like .png .jpg
    let extension = image.name.split(".").pop();
    let size = image.size;
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
    if (allow.includes(extension.toLowerCase())) {
      if (size <= 400000) {
        setValue("image", image);
      } else {
        setError("image", "image file size should be less than 4mb");
      }
    } else {
      setError("image", "image format is not supported");
    }
    console.log(image);
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
        list.data.data.map((item)=>{
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

  useEffect(() => {
    listALLCat();
  }, []);

  return (
    <>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Product Manager</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink to="/addmin/product">DashBoard</NavLink>
            </li>
            <li class="breadcrumb-item">
              <NavLink to="/addmin/productlist">Product list</NavLink>
            </li>
          </ol>
        </nav>
        <div class="card mb-4">
          <div class="card-body">
            <div className="banner_title">
              <h4>Category Form</h4>
              <button type="button" class="btn btn-secondary">
                Create Brand
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div class="card mb-4">
          <div class="card-body">
            <form class="w-100" onSubmit={handleSubmit(SubmitEvent)}>
              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Title
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
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

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Categories
                </label>
                <div class="col-sm-10">
                  <Select 
       
                  isMulti
                  name="categories"
                  options={listOfCat}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  {...register('categories' ,{require: true})}
                  />

                
       
                  <span>
                    {" "}
                    {errors && errors.categories?.message
                      ? errors.categories.message
                      : ""}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Description
                </label>
                <div class="col-sm-10">
                  <textPath
                    type="text"
                    class="form-control"
                    id=""
                    // defaultValue={detail?.title} 2nd case
                    {...register("description")}
                  />
                  <span>
                    {" "}
                    {errors && errors.description?.message
                      ? errors.description.message
                      : ""}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Cost Price
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"

                    class="form-control"
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
              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                   Price
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    min={1}
                    class="form-control"
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

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Discount(%)
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
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
          
              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
           Brand
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-control"
                    //  defaultValue={detail?.status}
                    {...register("brand", { required: true })}
                  >
                 
                  </select>
                  <span>
                    {" "}
                    {errors && errors.brand?.message
                      ? errors.brand.message
                      : ""}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
               seller
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-control"
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
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
               status
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-control"
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

              <div class="form-group row">
                <label for="" class="col-sm-2 col-form-label">
                  Images
                </label>
                <div class="col-sm-10">
                  <input
                    type="file"
                    class="form-control"
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
                    class="btn btn-success"
                  >
                   Submit
                  </button>{" "}
                  &nbsp;
                  <button type="button" class="btn btn-success">
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
