import './Footer.css';
import comicCode from '../../assets/comicCodeAuthorityTransparent.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer__caption">
                <p className="footer__text">Developed By Roger Gaylord</p>
            </div>
            <div className="footer__image">
                <img src={comicCode} alt="comic code" className="footer__copyright" />
            </div>
        </div>
    )
}