import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { switchLanguage } from "../../reducers/language-switcher";

const SlideshowView = (props) => {
  const { cms, slideshowImage, slideshowTexts, dispatch } = props;

  const slideshowStyles = {
    backgroundImage: `url(${slideshowImage?.url})`,
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className="w-100 position-absolute text-uppercase"
      >
        <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto me-2" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link href="#about">{cms?.about}</Nav.Link>
            <Nav.Link href="#menu">{cms?.menu}</Nav.Link>
            <Nav.Link href="/">
              <img src="./logo-light.png" alt="Szabad Bisztró" height="64" />
            </Nav.Link>
            <Nav.Link href="#contact">{cms?.contact}</Nav.Link>
            <Nav.Link onClick={() => dispatch(switchLanguage())}>
              {cms?.change_lang}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="bg" style={slideshowStyles}>
        <h1>
          {slideshowTexts[0]}
          <br />
          {slideshowTexts[1]}
        </h1>
      </Container>
    </>
  );
};

export default SlideshowView;
