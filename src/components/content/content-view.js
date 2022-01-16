import { PrismicRichText } from "@prismicio/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContentView = (props) => {
  const { cms } = props;

  return (
    <>
      <Container id="about" className="text-center mt-4">
        <PrismicRichText field={cms?.about_title} />
        <PrismicRichText field={cms?.about_content} />
      </Container>
      <Container id="menu" className="text-center mb-5">
        <div className="text-uppercase mt-5">
          <PrismicRichText field={cms?.menu_title} />
        </div>
        <Row className="mb-5">
          <Col sm="12" md="6">
            <img src={cms?.menu_image_left.url} alt="" width="100%" />
          </Col>
          <Col sm="12" md="6">
            <img src={cms?.menu_image_right.url} alt="" width="100%" />
          </Col>
        </Row>
        <img src={cms?.menu_image_bottom.url} alt="" width="100%" />
        <PrismicRichText field={cms?.plant_based_disclaimer} />
      </Container>
      <div id="contact" className="contact-container">
        <PrismicRichText field={cms?.table_reservation_title} />
        <a href={`tel:${cms?.phone_number}`}>{cms?.phone_number}</a>
      </div>
    </>
  );
};

export default ContentView;
