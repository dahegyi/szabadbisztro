import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { switchLanguage } from "../../reducers/language-switcher";

const SlideshowView = (props) => {
  const { cms, slideshowTexts, dispatch } = props;

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
      <Container className="banner">
        <h1>
          {slideshowTexts[0]}
          <br />
          {slideshowTexts[1]}
        </h1>
        <Carousel controls={false} fade={true} indicators={false} interval={10000}>
          {cms?.slideshow_images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image.slideshow_image.url} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default SlideshowView;
