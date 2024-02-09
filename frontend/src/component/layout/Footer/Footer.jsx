import React from 'react'
import "./Footer.css"
import { FaInstagram } from 'react-icons/fa'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <div>
            <footer>
                <div className='leftFooter'>
                    <h3>Ronak <span>Developer</span></h3>
                    <h2>High Quality is our first priority</h2>
                </div>
                <div className='centerFooter'>
                    <h1>RS <span>SHOP</span></h1>
                    <p>Copyrights 2022 : Ronak Sharma</p>
                </div>
                <div className='rightFooter'>
                    <h1>Follow Us</h1>
                    <div>
                        <a href="https://www.Instagram.com/ronak8119"><FaInstagram style={{ fontSize: '3vmax', marginTop: "1vmax", color: "white", transition: "all 0.2s" }} className="social" /></a>
                        <a href="https://www.linkedin.com/in/nitroronak-aa699a198/"><LinkedInIcon style={{ fontSize: '3vmax', marginTop: "1vmax", color: "white", transition: "all 0.2s" }} className="social"></LinkedInIcon></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
