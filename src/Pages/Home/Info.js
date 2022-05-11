import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:cols-2 lg:grid-cols-3 gap-10'>
            <InfoCard  img={clock} cardTitle="Opening Hours" bgColor=" bg-gradient-to-r from-secondary to-primary" textBody="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
            <InfoCard img={marker} cardTitle="Our Location"  bgColor="bg-accent" textBody="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard  img={phone} cardTitle="Opening Hours" bgColor=" bg-gradient-to-r from-secondary to-primary" textBody="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;