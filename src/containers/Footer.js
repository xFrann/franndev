

import footerCss from "../css/Footer.css"
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import mail from '../images/mail.svg';


export default function Footer(){

    return(
        <div  className="bottom-position" >
            <div className="margin-container" id="footer">
            
            <a className="color-grey">©Frann 2022, All rights reserved.</a>
            
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