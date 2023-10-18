import { useState } from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  const { cms, restaurant, sendEvent } = props;

  Footer.propTypes = {
    cms: PropTypes.object.isRequired,
    restaurant: PropTypes.number.isRequired,
    sendEvent: PropTypes.func.isRequired,
  };

  const icons = [
    {
      name: "facebook",
      event: "contact_open_facebook_1",
      link: "https://facebook.com/szabad.vegan.bistro",
    },
    {
      name: "facebook",
      event: "contact_open_facebook_2",
      link: "https://facebook.com/szabad.vegan.ujhely",
    },
    {
      name: "instagram",
      event: "contact_open_instagram",
      link: "https://instagram.com/szabad_vegan_bistro",
    },
    {
      name: "mail",
      event: "contact_open_email",
      link: "mailto:szabadbisztro@gmail.com",
    },
  ];

  const [rotateClass, setRotateClass] = useState("");

  const rotateImage = () => {
    setRotateClass("rotate");

    // Remove the class after 1 second to reset the state
    setTimeout(() => {
      setRotateClass("");
    }, 1000);
  };

  return (
    <>
      <div className="footer top mt-3 py-4">
        {icons.map((icon, index) => (
          <a
            key={index}
            onClick={() => sendEvent(icon.event)}
            href={icon.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={`/${icon.name}.svg`} alt={icon.name} />
          </a>
        ))}
      </div>
      <div className="footer bottom invert-selection">
        <div className="row m-0">
          <div className="col-12 col-sm-2 d-none d-sm-block my-2">
            <img
              src="./tes.gif"
              alt=""
              onClick={rotateImage}
              className={`tes ${rotateClass}`}
            />
          </div>
          <div className="col my-2 text">
            {restaurant > 0 && (
              <h5 className="my-0">
                <a
                  onClick={() => sendEvent(`footer_open_maps_${restaurant}`)}
                  href={`https://maps.app.goo.gl/${
                    restaurant === 1 ? "mKPfno5DuBWzaSmE6" : "DjyYWbFpQbpYkbVr6"
                  }
                    `}
                  target="_blank"
                  rel="noreferrer"
                >
                  Szabad Bisztró -{" "}
                  {restaurant === 1
                    ? "Király utca 101."
                    : "Új Hely - Víg utca 30."}
                </a>
              </h5>
            )}
            <h6 className="mt-3">
              <a
                href="https://github.com/dahegyi/szabadbisztro"
                target="_blank"
                rel="noreferrer"
              >
                {cms.pirate}
              </a>
            </h6>
          </div>
          <div className="col-12 col-sm-2 d-none d-sm-block my-2">
            <img
              src="./lec.gif"
              alt=""
              onClick={rotateImage}
              className={`lec ${rotateClass}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
