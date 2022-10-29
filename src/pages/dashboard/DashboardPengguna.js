import React from 'react'
import DashboardLayout from '../../common/layout/DashboardLayout';
import Slider from 'react-slick';
import SEO from '../../common/SEO';
import EventTwo from '../../components/event/EventTwo';
import EventData from '../../data/event/EventData.json';
import { ThreeColumnCarousel } from '../../utils/script';
import BannerTwo from '../../components/banner/BannerTwo';

const DashboardPengguna = () => {
  return (
    <>
      <SEO title='Dashboard'/>
        <DashboardLayout>
        {/* <div className='edu-breadcrumb-area breadcrumb-style-1 pt--140 pb--40 ptb_md--40 ptb_sm--40 bg-image'>
            <div className='container'>
                <h4>Selamat datang, John dee</h4>
            </div>
        </div> */}
        <div>
            <BannerTwo/>
        </div>
        <div className="edu-elements-area ptb--60 bg-color-white">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="pre-title">List Beasiswa</span>
                            <h3 className="title">Daftar Beasiswa Sekarang</h3>
                        </div>
                        
                        <Slider 
                            className="eduvibe-event-one-carousel-wrapper mt--40 mb--50 edu-slick-button"
                            { ...ThreeColumnCarousel }
                        >
                            { 
                                EventData.slice( 0, 6 ).map((item) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                        <EventTwo  data={item} classes="eduvibe-event-one-carousel-item" shade="enable" />
                                    </div>
                                ) )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        </DashboardLayout>
    </>
  )
}

export default DashboardPengguna