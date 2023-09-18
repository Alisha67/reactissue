import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import axios from 'axios's
import axiosInstance from '../config/axios.config'
import { toast } from 'react-toastify'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authSvc from './Auth/auth.service'
const errormsg = {
    color: 'red',
    float: 'right'
}

const Register = () => {
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
        const registerSchema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        role: Yup.string().matches(/1|2|3/).required(),
        address: Yup.object({
            billing: Yup.string(),
            shipping: Yup.string()
        }),
        // images: Yup.object()
    })

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            // data.image = data.image[0];  //form data
            // delete data.images;
            //   file upload in react ..we apend all data 
            //   let formData =new FormData();
            //   console.log(data);
            //   formData.append('images', data.images , data.images.name);
            //   formData.append('name', data.name);
            //   formData.append('email', data.email);
            //   formData.append('phone', data.phone);
            //   formData.append('role', data.role);
            //   formData.append('address', data.address);


            // let response = await axiosInstance.post('/v1/auth/register', data, {
            //     headers: {
            //         "content-type": "multipart/form-data"
            //     }
            // })
            let response = await authSvc.register(data)
            toast.success('your account has been register.check ur email for activation link')
            navigate('/login');
            console.log(response)
        } catch (exception) {
            console.log(exception)
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        let token = localStorage.getItem('token');
        let user=JSON.parse(localStorage.getItem('user'))
        
          if(token && user){
            toast.info('you have already Register your account')
            navigate('/'+user.role)
          }
        
      },[])

    console.log(errors)
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Name</label>
                    <span style={errormsg}>{errors.name && errors.name?.message}</span>
                    <input {...register("name", { required: true })} type="text" className="form-control" aria-describedby="emailHelp" />


                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Email</label>
                    <span style={errormsg}>{errors.email && errors.email?.message}</span>
                    <input {...register("email", { required: true })} type="email" className="form-control" />

                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Phone no</label>
                    <span style={errormsg}>{errors.phone && errors.phone?.message}</span>
                    <input {...register("phone", { required: true })} type="text" className="form-control" />

                </div>
                <div className="form-group">
                    <label htmlfor="exampleFormControlSelect1">Role</label>
                    <span style={errormsg}>{errors.role && errors.role?.message}</span>
                    <select {...register("role", { required: true })} className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Address(shipping)</label>
                    <span style={errormsg}>{errors.address && errors.address['shippingAddress']?.message}</span>
                    <textarea {...register("address.shippingAddress.", { required: true })} className="form-control" rows="3"></textarea>

                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Billing</label>
                    <span style={errormsg}>{errors.address && errors.address['billingAddress']?.message}</span>
                    <textarea {...register("address.billingAddress", { required: true })} className="form-control" rows="3"></textarea>

                </div>
                <div className="form-group">
                    <label htmlfor="exampleFormControlFile1">Example file input</label>
                    <span style={errormsg}>{errors.images && errors.images?.message}</span>
                    <input onChange={(e) => {
                        let image = e.target.files[0]
                        setValue('image', image)
                    }} type="file" className="form-control-file" id="exampleFormControlFile1" />

                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>Submit</button>
            </form>
        </div>
    )
}

export default Register