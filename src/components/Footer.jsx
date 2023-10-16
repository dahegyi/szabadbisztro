import PropTypes from "prop-types";

const Footer = (props) => {
  const { cms, restaurant } = props;

  Footer.propTypes = {
    cms: PropTypes.object.isRequired,
    restaurant: PropTypes.number.isRequired,
  };

  return (
    <>
      <div className="container-fluid footer footer-light">
        <a
          href="https://facebook.com/Szabad.vegan.bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/facebook.svg" alt="Facebook" className="icon" />
        </a>
        <a
          href="https://instagram.com/szabad_vegan_bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/instagram.svg" alt="Instagram" className="icon" />
        </a>
        <a
          href="mailto:szabadbisztro@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/mail.svg" alt="Email" className="icon" />
        </a>
      </div>
      <div className="container-fluid footer footer-dark">
        <div className="row">
          <div className="col-12 col-sm-2 d-none d-sm-block my-2">
            <img src="./tes.gif" alt="" />
          </div>
          <div className="col my-2 text">
            {restaurant > 0 && (
              <h5 className="my-0">
                <a
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
            <h6 className="mt-3">{cms.pirate}</h6>
          </div>
          <div className="col-12 col-sm-2 d-none d-sm-block my-2">
            <img src="./lec.gif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
