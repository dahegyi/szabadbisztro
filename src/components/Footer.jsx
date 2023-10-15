import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const { cms, restaurant } = props;

  return (
    <>
      <Container fluid className="footer footer-light">
        <a
          href="https://facebook.com/Szabad.vegan.bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/facebook.svg"
            alt="Facebook"
            className="icon"
            loading="lazy"
          />
        </a>
        <a
          href="https://instagram.com/szabad_vegan_bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            className="icon"
            loading="lazy"
          />
        </a>
        <a
          href="mailto:szabadbisztro@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/mail.svg" alt="Email" className="icon" loading="lazy" />
        </a>
      </Container>
      <Container fluid className="footer footer-dark">
        <Row>
          <Col xs={12} sm={2} className="my-2">
            <img src="./tes.gif" alt="" />
          </Col>
          <Col className="my-2">
            <div className="text">
              {restaurant > 0 && (
                <h5 className="my-0">
                  <a
                    href={`https://goo.gl/maps/${
                      restaurant === 1
                        ? "mKPfno5DuBWzaSmE6"
                        : "DjyYWbFpQbpYkbVr6"
                    }
                    `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {restaurant === 1
                      ? "Szabad Bisztró - Király utca 101."
                      : "Szabad Bisztró - Új Hely - Víg utca 30."}
                  </a>
                </h5>
              )}
              <h6>{cms?.pirate}</h6>
            </div>
          </Col>
          <Col xs={12} sm={2} className="my-2">
            <img src="./lec.gif" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
