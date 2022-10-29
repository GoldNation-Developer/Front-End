import React from 'react'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import Layout from '../../common/Layout'
import SEO from '../../common/SEO'
import KelasForm from '../../components/form/KelasForm'

const KelasDetails = () => {
  return (
    <>
        <SEO title='Form'/>
        <Layout>
            <BreadcrumbOne 
                title="Form Daftar"
                rootUrl="/dashboard"
                parentUrl="Dashboard"
                currentUrl="Daftar kelas"
            />
            <div className='container'>
                <KelasForm/>
            </div>
        </Layout>
    </>
  )
}

export default KelasDetails