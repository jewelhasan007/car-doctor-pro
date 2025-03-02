import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: " Service Details",
    description: "Service Details: Page"
}


const page = async ({params}) => {
    const details = await getServicesDetails(params.id);
    const {_id, service_id, title, img, facility } = details.services

        return (
        <div className='text-center bg-slate-400 m-4 p-5 border-sky-300 rounded-[10px]'>
            <p className='text-black-300 '> Id: {_id}</p>
            <h1 className='text-blue-300'>Service Id: {service_id}</h1>
            <h1 className=' text-red-300 text-5xl'>Title: {title}</h1>
            <Image className='text-center border rounded-[15px]' src={img} width={200} height={200} alt={title}></Image>
            <h1 className='text-blue-300'>Facility: {facility.map((facilityInd)=>(
                <div key={facilityInd.name} className='m-3 p-3 flex'>{facilityInd.name}</div>
            ))}</h1>
        </div>
    );
};

export default page;