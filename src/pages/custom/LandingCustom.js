import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerTwo from '../../components/banner/BannerTwo';
import FooterOne from '../../common/footer/FooterOne';
import HomeOneAbout from '../../components/home-one/HomeOneAbout';
import HomeTwoEvents from '../../components/home-two/HomeTwoEvents';
import HomeOneCourses from '../../components/home-one/HomeOneCourses';
import HomeTwoTestimonial from '../../components/home-two/HomeTwoTestimonial';
import CourseTwo from '../../components/course/CourseTypeTwo';
import HomeOneCategory from '../../components/home-one/HomeOneCategory';


const LandingCustom = () => {
    return (
        <>
            <SEO title="Home" />

            <HeaderTwo styles="header-transparent header-style-2" />

            <BannerTwo />

            <HomeOneAbout />

            <HomeTwoEvents/>


            <HomeOneCourses />

            <HomeTwoTestimonial />

            <FooterOne />
        </>
    )
}

export default LandingCustom;