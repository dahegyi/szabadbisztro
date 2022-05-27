import { useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { switchLanguage } from "../reducers/language-switcher";

const Slideshow = (props) => {
  const { cms } = props;

  // Select and set random images as a style
  const imgs = cms?.slideshow_images;
  const slideshowImage =
    imgs && imgs[Math.floor(Math.random() * imgs.length)].slideshow_image;
  const slideshowStyles = {
    backgroundImage: `url(${slideshowImage?.url})`,
  };

  // Select random texts
  const texts = cms?.slideshow_texts;
  const textsLength = texts?.length;

  let rand1 = Math.floor(Math.random() * textsLength);
  let rand2 = rand1;

  while (rand1 === rand2) {
    rand2 = Math.floor(Math.random() * textsLength);
  }

  const slideshowTexts = [
    texts && texts[rand1].text,
    texts && texts[rand2].text,
  ];

  const dispatch = useDispatch();

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

      <Container className="banner" style={slideshowStyles}>
        <h1>
          {slideshowTexts[0]}
          <br />
          {slideshowTexts[1]}
        </h1>
      </Container>
    </>
  );
};

export default Slideshow;
