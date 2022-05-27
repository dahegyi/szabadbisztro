import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const { cms } = props;

  return (
    <>
      <Container fluid className="footer footer-light">
        <a
          href="https://facebook.com/Szabad.vegan.bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/facebook.png"
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
            src="/instagram.png"
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
          <img src="/email.png" alt="Email" className="icon" loading="lazy" />
        </a>
      </Container>
      <Container fluid className="footer footer-dark">
        <h5 className="my-0">
          <a
            href="https://goo.gl/maps/mKPfno5DuBWzaSmE6"
            target="_blank"
            rel="noreferrer"
          >
            Szabad Bisztró - Király utca 101.
          </a>
        </h5>
        <h6>{cms?.pirate}</h6>
      </Container>
    </>
  );
};

export default Footer;
