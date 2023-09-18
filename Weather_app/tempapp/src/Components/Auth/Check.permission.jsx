import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import authSvc from './auth.service'
const Permission = (Componet, role) => {
    // let loggedInUser = {
    //     role: 'admin'
    // }
    const [loggedInUser, setloggedInUser] = useState();
    const [loading ,setLoading]= useState(true);
    const navigate = useNavigate();
    const loadLoggedInUser = async () => {
        try {
            let detail = await authSvc.getLoggedInUser()    
            if (!detail) {
                toast.error("Please login first")
                return navigate("/login")
            }
            else {
                setloggedInUser(detail.data.data)
            }
            // console.log(loggedInUser)
        } catch (exception) {
            throw exception
        }finally{
            setLoading(false)
        }
    }


    useEffect(() => {

        let token = localStorage.getItem('token');
        if (!token) {
            toast.error("User haven't logged In! Please logged In first")
            navigate('/login')

        }
        else {
            loadLoggedInUser()
        }
    }, [])




    if(loading){
        return <>loading.....</>

    }
    else{
        if (loggedInUser && loggedInUser.role === role) {
            return Componet
        }
        else {
            toast.warn("You donot have previlage to acess " + role + " panel !")
            return <Navigate to={'/' + loggedInUser.role}></Navigate>
        }
    }
}

export default Permission
