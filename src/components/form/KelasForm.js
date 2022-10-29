import React from 'react'

const KelasForm = () => {
  return (
        <div className="login-form-box pt--30 pb--80">
            <form className="login-form" action="#">
            <div className="mb--20">
                    <label>Kelas :</label>
                    <select className='input-box'>
                        <option>Pilih kelas</option>
                        <option>Bahasa Inggris</option>
                        <option>Bahasa Jepang</option>
                        <option>Bahasa Korea</option>
                    </select>
                </div>
                <div className="mb--20">
                    <label>Level :</label>
                    <select className='input-box'>
                        <option>Pilih level</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
                        <option>Beginner</option>
                    </select>
                </div>
                <div className="input-box mb--20">
                    <label>Nama :</label>
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-box mb--20">
                    <label>No. HP :</label>
                    <input type="text" placeholder="+62" />
                </div>
                <div className="input-box mb--40">
                    <label>Email :</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <div className="flex-fill text-center">
                        <h5 className='mb--0'>Price: Rp. 200.000</h5>
                    </div>
                    <div className="read-more-btn flex-fill">
                        <a href="#" className="rn-btn edu-btn w-100 text-center">Buy Now</a>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default KelasForm