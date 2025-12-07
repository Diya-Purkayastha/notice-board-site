import React from 'react';
import Slider from '../components/Slider';

import HowItWorks from '../components/HowItWorks';

import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import Additional from '../components/Additional';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
        
            <Additional></Additional>
            <HowItWorks></HowItWorks>
            {/* <TestimonialSection></TestimonialSection> */}
            <div className='max-w-7xl mx-auto'>
                   <NewsletterSection></NewsletterSection>
            </div>
        </div>
    );
};

export default Home;