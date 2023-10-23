import FacebookIcon from '../../assets/images/icon-facebook.svg'
import InstagramIcon from '../../assets/images/icon-instagram.svg'
import TwitterIcon from '../../assets/images/icon-twitter.svg'
import PinterestIcon from '../../assets/images/icon-pinterest.svg'
import Brand from '../../assets/images/logo-footer.svg'

export default function Footer() {
    return (
        <footer>
            <img src={Brand} alt="Sunnyside Logo" />
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
            <div className="socials">
                <a href="#">
                    <img src={FacebookIcon} alt="Facebook icon" />
                </a>
                <a href="#">
                    <img src={InstagramIcon} alt="Instagram icon" />
                </a>
                <a href="#">
                    <img src={TwitterIcon} alt="Twitter icon" />
                </a>
                <a href="#">
                    <img src={PinterestIcon} alt="Pinterest icon" />
                </a>
            </div>
        </footer>
    )
}