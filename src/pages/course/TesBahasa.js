import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFive from '../../components/course/CourseTypeFive'
import CourseData from '../../data/course/CourseData.json';
import CardTes from '../../components/course/CardTes';

const TesBahasa = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="TOEFL" />
            <Layout>
                <BreadcrumbOne 
                    title="Tes Bahasa"
                    rootUrl="/dashboard"
                    parentUrl="Dashboard"
                    currentUrl="TOEFL"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <h3>TOEFL</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</p>
                        <div className="row g-5 mt--5">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CardTes data={item} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TesBahasa;