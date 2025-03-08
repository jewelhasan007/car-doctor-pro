"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import {  toast } from 'react-toastify';

const page = ({params}) => {
    const {data} = useSession();
    const today = new Date().toISOString().split('T')[0]
    const [booking, setBooking] = useState([]);
    const loadBooking = async () => {
        const bookingDetails = await fetch (`http://localhost:3000/my-bookings/api/booking/${params.id}`)
        const data = await bookingDetails.json();
        console.log(data);
        setBooking(data.data)
        
    }
console.log(booking)
useEffect(()=>{
    loadBooking()
},[params])

const handleUpdateBooking = async (event) =>{
event.preventDefault();
const updated = {
    date: event.target.date.value,
    phone: event.target.phone.value,
    address: event.target.address.value,
}
    const resp = await fetch (`http://localhost:3000/my-bookings/api/booking/${params.id}`,{
        method : "PATCH",
        body: JSON.stringify(updated) ,
        headers : {
            "content-type" : "application/json",
        }
    })
    console.log(resp)
    if(resp.status === 200){
        toast.success("Updated Succesfully")
    }
}
return (
        <div className='bg-gray-400 '>
               <div className='flex justify-around'>
             <h1>Update Page</h1>
           {/* <Image src={img}
           alt='title'
           width={500}
           height={500}
           style={{width: "20vw"}}
           >
           </Image> */}
               </div>
        <div className='my-12 bg-slate-300 p-12'>
            <form onSubmit={handleUpdateBooking}  >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Name</span>
                    </label>
                    <input defaultValue={data?.user?.name} type="text" name='name' placeholder='Name' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Date</span>
                    </label>
                    <input defaultValue={booking.date} type="date" name='date' placeholder='Date' className='input input-bordered' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Email</span>
                    </label>
                    <input defaultValue={data?.user?.email} type="text" name='email' placeholder='Email' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Due Amount</span>
                    </label>
                    <input 
                    defaultValue={booking.price} 
                    readOnly type="text" 
                    name='amount' 
                    placeholder='$' 
                    className='input input-bordered' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Your Phone</span>
                    </label>
                    <input defaultValue={booking.phone}  type="text" name='phone' placeholder='Phone' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Your Address</span>
                    </label>
                    <input defaultValue={booking.address} type="text" name='address' placeholder='Your Address' className='input input-bordered' />
                </div>
            </div>
            <button className='btn btn-primary outline my-4'>Order Confirm</button>
            </form>
        </div>
        </div>
    );
};

export default page;