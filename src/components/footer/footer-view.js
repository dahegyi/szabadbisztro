import Container from "react-bootstrap/Container";

const FooterView = (props) => {
  const { cms } = props;

  return (
    <>
      <Container fluid className="footer footer-light">
        <a
          href="https://facebook.com/Szabad.vegan.bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/facebook.png" alt="Facebook" className="icon" />
        </a>
        <a
          href="https://instagram.com/szabad_vegan_bistro"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/instagram.png" alt="Facebook" className="icon" />
        </a>
        <a
          href="mailto:szabadbisztro@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/email.png" alt="Facebook" className="icon" />
        </a>
      </Container>
      <Container fluid className="footer footer-dark">
        <h5 className="my-0">Szabad Bisztró - Király utca 101.</h5>
        <h6>{cms?.pirate}</h6>
      </Container>
    </>
  );
};

export default FooterView;
