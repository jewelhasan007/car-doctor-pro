import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: " Service Details",
    description: "Service Details: Page"
}


const page = async ({params}) => {
    const details = await getServicesDetails(params.id);
    const {_id, service_id,price, title, img, facility } = details.services

        return (
        <div className='text-center bg-slate-400 m-4 p-5 border-sky-300 rounded-[10px]'>
            <div className='flex justify-evenly'>
            <p className='text-black-300 '> Id: {_id}</p>
            <h1 className='text-blue-300'>Service Id: {service_id}</h1>
            </div>
          
            <div className='flex justify-evenly'>
            <h1 className=' text-red-300 text-4xl'>Title: {title}</h1>
            <h1 className=' text-green-300 text-4xl'>Price: {price}</h1>
            <Link href={`/checkout/${_id}`}> <button className='btn btn-primary outline'>Check Out</button></Link>
            </div>
       
            <Image className='text-center border rounded-[15px]' src={img} width={200} height={200} alt={title}></Image>
            <div className='grid grid-cols-3 gap-10 border-emerald-400'>
            <h1 className='text-blue-300'>Facility: {facility.map((facilityInd)=>(
                <div key={facilityInd.name} className='m-3 p-3 '>{facilityInd.name}</div>
            ))}</h1>
            </div>
         
        </div>
    );
};

export default page;