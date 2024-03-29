import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "react-scroll";

import { switchLanguage } from "../reducers/language-switcher";

const Header = (props) => {
  const { cms, restaurant, sendEvent } = props;

  Header.propTypes = {
    cms: PropTypes.object.isRequired,
    restaurant: PropTypes.number.isRequired,
    sendEvent: PropTypes.func.isRequired,
  };

  const [headerStyles, setHeaderStyles] = useState({});
  const [headerTexts, setHeaderTexts] = useState([]);

  useEffect(() => {
    // Select and set random image as a style
    const imgs = cms.slideshow_images;
    const headerImage =
      imgs && imgs[Math.floor(Math.random() * imgs.length)].slideshow_image;

    setHeaderStyles({
      backgroundImage: `url(${headerImage?.url})`,
      height: 0.8 * window.innerHeight,
    });

    // Select random texts
    const texts = cms.slideshow_texts;
    const textsLength = texts?.length;

    let rand1 = Math.floor(Math.random() * textsLength);
    let rand2 = rand1;

    while (rand1 === rand2) {
      rand2 = Math.floor(Math.random() * textsLength);
    }

    setHeaderTexts([texts && texts[rand1].text, texts && texts[rand2].text]);
  }, [cms]);

  const navbar = useRef(null);
  const [isTogglerChecked, setIsTogglerChecked] = useState(false);

  const toggleNavigation = () => {
    document.querySelector("body").classList.toggle("overflow-hidden");
    navbar.current.classList.toggle("open");

    setIsTogglerChecked(!isTogglerChecked);
  };

  const closeNavigation = () => {
    document.querySelector("body").classList.remove("overflow-hidden");
    navbar.current.classList.remove("open");

    setIsTogglerChecked(false);
  };

  const handleScroll = (target) => {
    closeNavigation();
    sendEvent(`scroll_to_${target}`);
  };

  const dispatch = useDispatch();

  const changeLanguage = () => {
    closeNavigation();
    dispatch(switchLanguage());
  };

  const [headerTextStyle, setHeaderTextStyle] = useState();

  // this is because some mobile browsers change viewport height when scrolling and we want this text to not move
  useEffect(() => {
    setHeaderTextStyle({
      top: Math.max(0.35 * window.innerHeight, 130),
    });
  }, []);

  return (
    <>
      <div className="d-md-none position-absolute w-100 mt-4 text-center">
        <img src="./logo.webp" alt="Szabad Bisztró" height="48" />
      </div>
      <nav ref={navbar}>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={150}
              onClick={() => handleScroll("about")}
            >
              {cms.about}
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              offset={-50}
              duration={150}
              onClick={() => handleScroll("menu")}
            >
              {cms.menu}
            </Link>
          </li>
          <li className="d-none d-md-inline-block">
            <a href="/">
              <img src="./logo.webp" alt="Szabad Bisztró" height="56" />
            </a>
          </li>
          <li>
            <Link
              to={restaurant ? "contact" : "menu"}
              smooth={true}
              offset={restaurant ? 0 : -50}
              duration={150}
              onClick={() =>
                handleScroll(restaurant ? "contact" : "menu_norestaurant")
              }
            >
              {cms.contact}
            </Link>
          </li>
          <li>
            <a onClick={changeLanguage}>{cms.change_lang}</a>
          </li>
        </ul>
      </nav>

      <input
        id="navbar-toggler"
        type="checkbox"
        onChange={toggleNavigation}
        checked={isTogglerChecked}
      />
      <label htmlFor="navbar-toggler" className="position-absolute">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </label>

      <div className="container-fluid banner" style={headerStyles}>
        <h1 style={headerTextStyle}>
          {headerTexts[0]}
          <br />
          {headerTexts[1]}
        </h1>
      </div>
    </>
  );
};

export default Header;
