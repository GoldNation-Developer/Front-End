import React from 'react';
import SEO from '../../common/SEO';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutSeven from '../../components/about/AboutSeven';
import AboutUsOneService from '../../components/about-us-one/AboutUsOneService';
import AboutSix from '../../components/about/AboutSix';
import AboutOne from '../../components/about/AboutThree';
import AboutUsOneTeam from '../../components/about-us-one/AboutUsOneTeam';
import HomeTwoTestimonial from '../../components/home-two/HomeTwoTestimonial';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';

const AboutUsCustom = () => {
    return (
        <>
            <SEO title="About Us" />

            <HeaderTwo />

            <BreadcrumbOne 
                title="About Us"
                rootUrl="/"
                parentUrl="Home"
                currentUrl="About Us"
            />

            <AboutSeven />
            
            <AboutUsOneService />

            <AboutSix />

            <AboutOne />

            <AboutUsOneTeam />

            <HomeTwoTestimonial />

            <FooterOne />
        </>
    )
}

export default AboutUsCustom;