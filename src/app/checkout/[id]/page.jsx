"use client"
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = ({params}) => {
    const today = new Date().toISOString().split('T')[0]
    const {data } = useSession();
    const [service, setService] = useState({});

    const loadService  = async () =>{
    const details = await getServicesDetails(params.id);
    console.log('details for checkout',details.services)
    setService(details.services);
    
}
    //    const details = await getServicesDetails(params.id);
      const {_id, service_id, price, title, img, facility } = service || {};   
      console.log('service array is=',service) 

        const handleBooking =async (event) =>{
            event.preventDefault();
            const newBooking = {
                email : data?.user?.email,
                name : data?.user?.name,
                address : event.target.address.value,
                phone : event.target.phone.value,
                date : event.target.date.value,
                serviceTitle : title,
                serviceId : _id,
                price : price,
            }
            const resp = await fetch('process.env.NEXT_PUBLIC_BASE_URL/checkout/api/new-booking', {
                method : "POST",
                body : JSON.stringify(newBooking),
                headers : {
                    "content-type" : "application/json"
                }
            })

            const response = await resp?.json();
            toast.success(response?.message)
            event.target.reset() 
        };

        useEffect(()=>{
            loadService();
        },[params])
    return (
        <div className='bg-gray-400 '>
               <div className='flex justify-around'>
               <div>
               <h1>title: {title}</h1>
           <h1> id: {_id}</h1>
           <h1> service id: {service_id}</h1>
           <h1> price:{price}</h1>
           
               </div>
           {/* <Image src={img}
           alt='title'
           width={500}
           height={500}
           style={{width: "20vw"}}
           >
           </Image> */}
               </div>
        <div className='my-12 bg-slate-300 p-12'>
            <form onSubmit={handleBooking} >
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
                    <input  type="date" name='date' placeholder='Date' className='input input-bordered' />
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
                    <input defaultValue={price} readOnly type="text" name='amount' placeholder='$' className='input input-bordered' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Your Phone</span>
                    </label>
                    <input  type="text" name='phone' placeholder='Phone' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className='label-text'>Your Address</span>
                    </label>
                    <input type="text" name='address' placeholder='Your Address' className='input input-bordered' />
                </div>
            </div>
            <button className='btn btn-primary outline my-4'>Order Confirm</button>
            </form>
        </div>
        </div>
    );
};

export default Checkout;