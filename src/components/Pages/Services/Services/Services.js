import React from 'react';
import ServicesBanner from '../ServicesBanner/ServicesBanner';
import ServicesCollection from '../ServicesCollection/ServicesCollection';

const Services = () => {
    return (
        <div className='bg-white'>
            <ServicesBanner></ServicesBanner>
            <ServicesCollection></ServicesCollection>
        </div>
    );
};

export default Services;