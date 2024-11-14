import "./Header.css";
import spidermanAvatar from "../../assets/spidermanAvatar.jpg";
import settings from "../../assets/settings-gear-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Header({ handleChangeClick }) {
  return (
    <header className="header">
      <div className="header__contents">
        <div className="header__title">
          <Link to="/" className="header__link">
            <p className="header__title-name">MCS</p>
          </Link>
        </div>
      </div>
      <div className="header__nav">
        <nav className="header__nav-bar">
          <ul className="header__nav-content">
            {/* <li>
                  <button className='header__nav-signup header__hover'>Sign Up</button>
                </li>
                <li>
                  <button className='header__nav-login header__hover'>Log In</button>
                </li> */}
            <li className="header__nav-avatars">
              <img
                className="header__nav-avatar"
                src={spidermanAvatar}
                alt="avatar"
              />
            </li>
            <li>
              <p className="header__nav-name">Roger Gaylord</p>
            </li>
            <li className="header__nav-button">
              <button
                className="header__nav-settings"
                type="button"
                onClick={handleChangeClick}
              ></button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
