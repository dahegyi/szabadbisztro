import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-scroll";

import { switchLanguage } from "../reducers/language-switcher";

const Slideshow = (props) => {
  const { cms, restaurant } = props;

  Slideshow.propTypes = {
    cms: PropTypes.object.isRequired,
    restaurant: PropTypes.number.isRequired,
  };

  const [slideshowStyles, setSlideshowStyles] = useState({});
  const [slideshowTexts, setSlideshowTexts] = useState([]);

  useEffect(() => {
    // Select and set random images as a style
    const imgs = cms.slideshow_images;
    const slideshowImage =
      imgs && imgs[Math.floor(Math.random() * imgs.length)].slideshow_image;

    setSlideshowStyles({
      backgroundImage: `url(${slideshowImage?.url})`,
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

    setSlideshowTexts([texts && texts[rand1].text, texts && texts[rand2].text]);
  }, [cms]);

  const dispatch = useDispatch();

  const navbar = useRef(null);
  const [isTogglerChecked, setIsTogglerChecked] = useState(false);

  const toggleNavigation = () => {
    document.querySelector("body").classList.toggle("overflow-hidden");
    navbar.current.classList.toggle("open");

    setIsTogglerChecked(!isTogglerChecked);
  };

  return (
    <>
      <div className="d-lg-none position-absolute w-100 mt-3 text-center">
        <img src="./logo.png" alt="Szabad Bisztró" height="48" />
      </div>
      <nav ref={navbar}>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={150}
              onClick={toggleNavigation}
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
              onClick={toggleNavigation}
            >
              {cms.menu}
            </Link>
          </li>
          <li className="d-none d-lg-inline-block">
            <a href="/">
              <img src="./logo.png" alt="Szabad Bisztró" height="56" />
            </a>
          </li>
          <li>
            <Link
              to={restaurant ? "contact" : "menu"}
              smooth={true}
              offset={restaurant ? 0 : -50}
              duration={150}
              onClick={toggleNavigation}
            >
              {cms.contact}
            </Link>
          </li>
          <li>
            <a onClick={() => dispatch(switchLanguage())}>{cms.change_lang}</a>
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

      <div className="container-fluid banner" style={slideshowStyles}>
        <h1 style={{ top: Math.max(0.35 * window.innerHeight, 130) }}>
          {slideshowTexts[0]}
          <br />
          {slideshowTexts[1]}
        </h1>
      </div>
    </>
  );
};

export default Slideshow;
