import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <a href="#top" id="navBackToTop">
                <div class="navFooterBackToTop">
                    <span class="navFooterBackToTopText">Back to top</span>
                </div>
            </a>
            <div className='layer__two'>
                <div className='col1'>
                    <h3>Get to Know Us</h3>
                    <a href='#'>About Us</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Press Releases</a>
                    <a href='#'>Amazon Cares</a>
                    <a href='#'>Gift a Smile</a>
                </div>                
                <div className='col2'>
                    <h3>Connect with Us</h3>
                    <a href='#'>Facebook</a>
                    <a href='#'>Twitter</a>
                    <a href='#'>Instagram</a>
                </div>
                <div className='col3'>
                    <h3>Make Money with Us</h3>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                </div>
                <div className='col4'>
                    <h3>Let Us Help You</h3>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                </div>
            </div>

            <div className='layer__three'>
                <a href='#'>Conditions of Use & Sale</a>
                <a href='#'>Privacy Notice</a>
                <a href='#'>Interest-Based Ads</a>
            </div>
        </div>
    )
}

export default Footer
