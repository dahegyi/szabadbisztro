import { PrismicRichText } from "@prismicio/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Content = (props) => {
  const { cms, restaurant, setRestaurant } = props;

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

      {/*  Menu */}
      <Container id="menu" className="text-center mb-5">
        <div className="text-uppercase mt-5 mb-2">
          <PrismicRichText
            field={restaurant === 0 ? cms?.choose_restaurant : cms?.menu_title}
          />
        </div>
        {/*  Restaurant selector */}
        {restaurant === 0 ? (
          <Col>
            <Button variant="link" onClick={() => setRestaurant(1)}>
              Szabad Bisztró
            </Button>
            -
            <Button variant="link" onClick={() => setRestaurant(2)}>
              újHely
            </Button>
          </Col>
        ) : (
          <Container>
            <Row className="mb-3">
              <Button variant="link" onClick={() => setRestaurant(0)}>
                {cms?.back_to_choose_restaurant}
              </Button>
            </Row>
            <Row className="mb-5">
              <Col sm="12" md="6">
                <img
                  src={
                    restaurant === 1
                      ? cms?.menu_image_left.url
                      : cms?.ujhely_menu_image_left.url
                  }
                  alt=""
                  width="100%"
                  loading="lazy"
                />
              </Col>
              <Col sm="12" md="6">
                <img
                  src={
                    restaurant === 1
                      ? cms?.menu_image_right.url
                      : cms?.ujhely_menu_image_right.url
                  }
                  alt=""
                  width="100%"
                  loading="lazy"
                />
              </Col>
            </Row>
            {restaurant === 1 && cms?.menu_image_bottom?.url ? (
              <img
                src={cms?.menu_image_bottom.url}
                alt=""
                width="100%"
                className="mb-5"
                loading="lazy"
              />
            ) : null}
            {restaurant === 2 && cms?.ujhely_menu_image_bottom?.url ? (
              <img
                src={cms?.ujhely_menu_image_bottom.url}
                alt=""
                width="100%"
                className="mb-5"
                loading="lazy"
              />
            ) : null}
            <PrismicRichText field={cms?.plant_based_disclaimer} />
          </Container>
        )}
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
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
      {restaurant > 0 ? (
        <div className="contact-container">
          <div id="contact" className="reservation">
            <PrismicRichText field={cms?.table_reservation_title} />
            <a
              href={`tel:${
                restaurant === 1 ? cms?.phone_number : cms?.ujhely_phone_number
              }`}
            >
              {restaurant === 1 ? cms?.phone_number : cms?.ujhely_phone_number}
            </a>
          </div>
          {/*  Opening hours */}
          <div className="opening-hours">
            <PrismicRichText field={cms?.opening_hours_title} />
            <PrismicRichText
              field={
                restaurant === 1
                  ? cms?.opening_hours_content
                  : cms?.ujhely_opening_hours_content
              }
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Content;
