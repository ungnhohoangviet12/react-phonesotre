import React from 'react';
import { BackTop } from 'antd';

export default function AppFooter() {
    return (
        <div className='container-footer'>
            <div className="footer">
                <div className="logo">

                    <a href='http://www.google.com'>Shop Store</a>
                </div>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com'><i className='fab fa-facebook-f'></i></a></li>
                    <li><a href='https://www.facebook.com'><i className='fab fa-twitter'></i></a></li>
                    <li><a href='https://www.facebook.com'><i className='fab fa-linkedin-in'></i></a></li>
                    <li><a href='https://www.facebook.com'><i className='fab fa-pinterest-p'></i></a></li>
                    <li><a href='https://www.facebook.com'><i className='fab fa-instagram'></i></a></li>
                </ul>
                <div className='coppyright'>Copyright &copy; 2022 Shop Store</div>
                <BackTop>
                    <div className='goTop'><i className='fas fa-arrow-circle-up'></i></div>
                </BackTop>
            </div>

        </div>
    )
}
