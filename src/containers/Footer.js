

import instagram from '../social-media-images/instagram.svg';
import github from '../social-media-images/github.svg';
import linkedin from '../social-media-images/linkedin.svg';
import mail from '../social-media-images/mail.svg';
import general from '../css/general.css'
import footerCss from "../css/Footer.css"


export default function Footer(){

    return(
        <div  className="bottom-position width-100 margin-top" >
            <div className="margin-container" id="footer">
            
            <a className="color-grey " id='check-out'>©Frann 2022, All rights reserved.</a>
            
            <div className="icons">
                <a href="https://github.com/xFrann">
                    <img src={github} className="image-icon icons" />
                </a>
                <a href="https://www.instagram.com/frann.dev/">
                    <img src={instagram} className="image-icon icons" />
                </a>
                <a href="https://www.linkedin.com/in/frangumadalin215/">
                    <img src={linkedin} className="image-icon icons" />
                </a>
                <a href="mailto:someone@yoursite.com">
                    <img src={mail} className="image-icon icons" />
                </a>
                         
            </div>
                    
        </div>
        </div>
        
    );


}