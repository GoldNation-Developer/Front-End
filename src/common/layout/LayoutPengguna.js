import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterOne from '../footer/FooterOne'
import HeaderTwo from '../header/HeaderTwo'

const LayoutPengguna = (props) => {
  return (
    <>
        <HeaderTwo/>
        <div className='container'>
            <Outlet {...props} />
        </div>
        <FooterOne/>
    </>
  )
}

export default LayoutPengguna