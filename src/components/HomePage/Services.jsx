import React from 'react';
import {services} from '../../lib/sevices'
import ServiceCard from '../cards/ServiceCard';

const getServicesDB = async () =>{
    const resp = await fetch('http://localhost:3000/services/api/get-all')
    const data = resp.json()
    return data
}

const Services =async () => {
    const data =await getServicesDB();
    const sevicesDB = data.services
    return (
        <div className='min-h-screen'>
            <div className='text-center container mx-auto'>
        <h2 className='text-primary'>Service</h2>
        <h1>Our Service Area</h1>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map((service) => (
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5'>
                <h1>Services Data get from MongoDB</h1>
                {
                  sevicesDB?.length > 0 &&  sevicesDB?.map((service) => (
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;