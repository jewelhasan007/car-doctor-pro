"use client"
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {
const route = useRouter();

const handleSignIn = async (event) => {
event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
const resp = await signIn('credentials',{
  email, 
  password, 
  redirect : false
});
if(resp.status === 200){
route.push('/')
}
console.log(resp)
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
<div className='text-center mt-7'>  <h1 className='text-3xl font-bold'>Login</h1></div>
      <form onSubmit={handleSignIn}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder=" your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder=" Your password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign in</button>
        </div>
<div className='text-center'>
<p>Or Sign in with</p>
<div className='flex justify-center m-4 '>
<button className='btn btn-outline rounded-full' ><FaFacebook className='mr-3' /></button>
<button className='btn btn-outline rounded-full' ><FaLinkedin className='mr-3' /></button>
<button className='btn btn-outline rounded-full' ><FcGoogle /></button>
<button className='btn btn-outline rounded-full' ><FcGoogle /></button>

</div>
<h5>not have account? <Link className='text-primary font-bold' href={'/signup'} >Sign Up</Link></h5>
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