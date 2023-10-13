import React, { useEffect } from 'react'
import { useState } from 'react'
import authSvc from './auth.service'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container } from 'react-bootstrap'
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const errmsg={
    color:'red',
    float:'right',
    fontSize:'13px'
  
}

const ActivateUser = () => {
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(true)
    const params = useParams();
    const [detail, setDetail] = useState()

    const PasswordSchema = Yup.object({
        password: Yup.string().min(8).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"),null],"Password and Confirm Password should be same")
   
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(PasswordSchema)
    })

    const SubmitForm = async (data) => {
    try{
  let res = await authSvc.setPassword(params.token ,data)
 
  toast.success('Your password have been sucessfully set.Please login')
  navigate('login')
    }catch(exception){
        console.log(exception)
    }
    }



    const TokenVerify = async () => {
        try {
            let response = await authSvc.activationToken(params.token)
            setDetail(response.data.data);
        } catch (exception) {
            // toast.error('token is broken')
            // navigate('/login');
            console.log(exception)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        TokenVerify();
    }, [])
    console.log(errors)

    return (
        <>
            {Loading ? <>loading...</> : <>
                <Container>

                    <form onSubmit={handleSubmit(SubmitForm)}>
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>  <span style={errmsg}> {errors && errors.password?.message}</span>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                {...register('password', { required: true })}
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>  <span style={errmsg}> {errors && errors.confirmPassword?.message}</span>
                            <input type="password" name="confirmPassword" class="form-control" id="exampleInputPassword1"
                                {...register('confirmPassword', { required: true })}
                            />
                        </div>
                     
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Container>


            </>}
        </>
    )
}

export default ActivateUser