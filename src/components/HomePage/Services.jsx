import React from 'react';
import {services} from '../../lib/sevices'
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
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
        </div>
    );
};

export default Services;