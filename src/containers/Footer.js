

import footerCss from "../css/Footer.css"
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import mail from '../images/mail.svg';


export default function Footer(){

    return(
        <div className="marginlr containerC">
            
            <a className="greyColor">© Frann 2022, All rights reserved.</a>
            
            <div className="icons containerC">
                <div className="containerC ">
                    <img src={instagram}className="imageIcon icons"  />
                    <img src={github} className="imageIcon icons" />
                </div>
                <div className="containerC">
                    <img src={linkedin} className="imageIcon icons" />
                    <img src={mail} className="imageIcon icons" />
                </div>
           
            </div>
                    
                
            
        </div>
    );


}