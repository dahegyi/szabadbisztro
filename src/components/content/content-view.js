import { PrismicRichText } from "@prismicio/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const ContentView = (props) => {
  const { cms } = props;

  return (
    <>
      {/*  About */}
      <Container id="about" className="text-center my-5">
        <PrismicRichText field={cms?.about_title} className="mb-3" />
        <PrismicRichText field={cms?.about_content} />
      </Container>
      {/* Slideshow */}
      {cms?.banners.length > 0 ? (
        <Container>
          <Carousel className="mt-2">
            {cms?.banners.map((banner, index) => (
              <Carousel.Item key={index} className="slideshow-item">
                <img
                  className="d-block w-100"
                  src={banner.banner_image.url}
                  alt=""
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      ) : null}
      {/*  Menu images */}
      <Container id="menu" className="text-center mb-5">
        <div className="text-uppercase mt-5">
          <PrismicRichText field={cms?.menu_title} />
        </div>
        <Row className="mb-5">
          <Col sm="12" md="6">
            <img src={cms?.menu_image_left.url} alt="" width="100%" loading="lazy" />
          </Col>
          <Col sm="12" md="6">
            <img src={cms?.menu_image_right.url} alt="" width="100%" loading="lazy" />
          </Col>
        </Row>
        {cms?.menu_image_bottom?.url ? (
          <img
            src={cms?.menu_image_bottom.url}
            alt=""
            width="100%"
            className="mb-5"
            loading="lazy"
          />
        ) : null}
        <PrismicRichText field={cms?.plant_based_disclaimer} />
      </Container>
      {/*  Video slideshow */}
      {cms?.videos.length > 0 ? (
        <Container className="mt-2 mb-5">
          <Carousel variant="dark" interval={null} className="video">
            {cms?.videos.map((video, index) => (
              <Carousel.Item key={index}>
                <iframe
                  className="iframe"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtube_video_id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      ) : null}
      {/*  Collage */}
      {cms?.menu_image_bottom_2?.url ? (
        <img
          src={cms?.menu_image_bottom_2?.url}
          alt=""
          width="100%"
          className="mb-5"
        />
      ) : null}
      {/*  Table reservation */}
      <div id="contact" className="contact-container">
        <PrismicRichText field={cms?.table_reservation_title} />
        <a href={`tel:${cms?.phone_number}`}>{cms?.phone_number}</a>
      </div>
      {/*  Opening hours */}
      {cms?.opening_hours_title && cms?.opening_hours_content ? (
        <div className="opening-hours">
          <PrismicRichText field={cms?.opening_hours_title} />
          <PrismicRichText field={cms?.opening_hours_content} />
        </div>
      ) : null}
    </>
  );
};

export default ContentView;
