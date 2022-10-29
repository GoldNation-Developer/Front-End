import React from 'react';
import { Link } from 'react-router-dom';

const CardTes = ({ data, classes }) => {
    const price = Number( data.price );
    const oldPrice = data.oldPrice ? Number( data.oldPrice ) : 0;
    const isOffer = data.oldPrice && price < oldPrice;
    const offerInPercentage = Math.round( 100 * (oldPrice - price) / oldPrice );
    return (
        <div className={`edu-card card-type-5 radius-small ${ classes ? classes : '' }`}>
            <div className="inner">
                <div className="content">
                    <h6 className="title">
                        <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link>
                    </h6>
                    <div className="price-list price-style-03 mb--10">
                        {
                            data.price === '0' ?
                                <div className="price current-price">Free</div>
                            :
                                <div className="price current-price">${data.price}</div>
                        }
                        { 
                            data.oldPrice && <div className="price old-price">${data.oldPrice}</div> 
                        }
                    </div>
                    <ul className="edu-meta meta-01">
                        <li><i className="icon-time-line"></i>{data.duration}</li>
                        <li><i className="icon-group-line"></i>{data.student} Students</li>
                    </ul>
                    <div className="card-bottom">
                        <div className="read-more-btn">
                            <Link className="btn-transparent" to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>
                                Daftar Sekarang<i className="icon-arrow-right-line-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardTes;