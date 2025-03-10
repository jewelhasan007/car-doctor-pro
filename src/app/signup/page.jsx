"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const page = () => {
const route = useRouter();
      const handleSignUp = async(event) => {
        event.preventDefault();
        const newUser ={
          name : event.target.name.value,
          email : event.target.email.value,
          password : event.target.password.value,
       
        };
        console.log(newUser);
        const resp = await fetch('process.env.NEXT_PUBLIC_BASE_URL/signup/api',{
          method: 'POST',
          body : JSON.stringify(newUser),
          headers : {
              "content-type" : 'application/json'
          }
      })
      console.log(resp)
      if(resp.status === 200){
        event.target.reset();
        route.push('/')
// sweet alert

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "New User Created",
  showConfirmButton: false,
  timer: 1500
});

      }
   };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/login/login.svg"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
{/* form started */}
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<div className='text-center mt-7'>  <h1 className='text-3xl font-bold'>Sign Up</h1></div>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder=" your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder=" your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder=" Your password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
         
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </div>
<div className='text-center'>
<p>Or Sign in with</p>
<div className='flex justify-center m-4 '>
<button className='btn btn-outline rounded-full' ><FaFacebook className='mr-3' /></button>
<button className='btn btn-outline rounded-full' ><FaLinkedin className='mr-3' /></button>
<button className='btn btn-outline rounded-full' ><FcGoogle /></button>


</div>
<h5>Already have an account? <Link className='text-primary font-bold' href={'/login'} >Log In</Link></h5>
</div>
      </form>
    </div>



{/* form end */}

          </div>
        </div>
      </div>
    );
};

export default page;