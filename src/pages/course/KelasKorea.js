import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeThree from '../../components/course/CourseTypeThree';
import CourseData from '../../data/course/CourseData.json';
import { Link } from 'react-router-dom';

const KelasKorea = () => {
    const CourseItems = CourseData.slice(0, 3);

    return (
        <>
            <SEO title="Bahasa Korea" />
            <Layout>
                <BreadcrumbOne 
                    title="Kelas Bahasa Korea"
                    rootUrl="/dashboard"
                    parentUrl="Dashboard"
                    currentUrl="Bahasa Korea"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <Link to={process.env.PUBLIC_URL + `/daftar-korea`}>
                                            <CourseTypeThree data={item} />
                                        </Link>
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

export default KelasKorea;