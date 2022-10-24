import React from 'react';
import { Element } from 'react-scroll';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerTwo from '../../components/banner/BannerTwo';
import FooterOne from '../../common/footer/FooterOne';
import HomeOneAbout from '../../components/home-one/HomeOneAbout';
import HomeTwoEvents from '../../components/home-two/HomeTwoEvents';
import HomeOneCourses from '../../components/home-one/HomeOneCourses';
import HomeTwoTestimonial from '../../components/home-two/HomeTwoTestimonial';
import HeaderLandingPage from '../../common/header/HeaderLandingPage';
import ScrollAnimation from 'react-animate-on-scroll';


const LandingCustom = () => {
    return (
        <>
            <SEO title="Home" />

            {/* <HeaderTwo styles="header-transparent header-style-2" /> */}

            <HeaderLandingPage styles="header-transparent" />

{/*============== section cari universitas ===================*/}
            <BannerTwo />

{/*============== section about ===================*/}
        <section>
            <Element
                name='about'
            >
                <ScrollAnimation
                    animateIn="fadeInUp" 
                    animateOut="fadeInOut" 
                    className="pre-section-title text-center" 
                    animateOnce={ true }
                >
                    <HomeOneAbout />
                </ScrollAnimation>
            </Element>
        </section>

{/*============== section kelas ===================*/}
        <section>
            <Element
                name='kelas'
            >
                <ScrollAnimation
                    animateIn="fadeInUp" 
                    animateOut="fadeInOut" 
                    className="pre-section-title text-center" 
                    animateOnce={ true }
                >
                    <HomeTwoEvents/>
                </ScrollAnimation>
            </Element>
        </section>

 {/*============== section program ===================*/}
        <div>
            <Element
                name='program'
            >
                <ScrollAnimation
                    animateIn="fadeInUp" 
                    animateOut="fadeInOut" 
                    className="pre-section-title text-center" 
                    animateOnce={ true }
                >
                    <HomeOneCourses />
                </ScrollAnimation>
            </Element>
        </div>

{/*============== section testimoni ===================*/}
        <div>
            <Element
                name='testimoni'
            >
                <ScrollAnimation
                    animateIn="fadeInUp" 
                    animateOut="fadeInOut" 
                    className="pre-section-title text-center" 
                    animateOnce={ true }
                >
                     <HomeTwoTestimonial />
                </ScrollAnimation>
            </Element>
        </div>

 {/*============== footer ===================*/}
            <FooterOne />
        </>
    )
}

export default LandingCustom;