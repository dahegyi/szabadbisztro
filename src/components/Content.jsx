import PropTypes from "prop-types";

import { PrismicRichText } from "@prismicio/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";

const Content = (props) => {
  const { cms, restaurant, setRestaurant, sendEvent } = props;

  Content.propTypes = {
    cms: PropTypes.object.isRequired,
    restaurant: PropTypes.number.isRequired,
    setRestaurant: PropTypes.func.isRequired,
    sendEvent: PropTypes.func.isRequired,
  };

  const mappedRestaurants = [undefined, "Szabad Bisztró", "Új Hely"];

  const chooseRestaurant = (restaurant) => {
    sendEvent(`contact_choose_restaurant_${restaurant}`);
    setRestaurant(restaurant);
  };

  return (
    <>
      {/*  About */}
      <div name="about" className="container about text-center my-5">
        <PrismicRichText field={cms.about_title} className="mb-3" />
        <PrismicRichText field={cms.about_content} />
      </div>

      {/* Slideshow */}
      <div className="container">
        <Swiper
          loop={true}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          navigation={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Keyboard]}
          className="image-slideshow"
        >
          {cms.banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                className="d-block w-100"
                src={banner.banner_image.url}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  Menu */}
      <div name="menu" className="container text-center mb-5">
        <div className="text-uppercase mt-5 mb-3">
          <PrismicRichText
            field={restaurant === 0 ? cms.choose_restaurant : cms.menu_title}
          />
        </div>

        {/*  Restaurant selector */}
        {restaurant === 0 ? (
          <>
            {mappedRestaurants.map(
              (restaurant, i) =>
                restaurant && (
                  <button
                    key={i}
                    className="btn m-3"
                    onClick={() => chooseRestaurant(i)}
                  >
                    {restaurant}
                  </button>
                ),
            )}
          </>
        ) : (
          <div className="container">
            <h3 className="mb-3">{mappedRestaurants[restaurant]}</h3>

            <button className="btn link mb-5" onClick={() => setRestaurant(0)}>
              &laquo; {cms.back_to_choose_restaurant}
            </button>
            <div className="row mb-5">
              <div className="col-12 col-md-6">
                <img
                  src={
                    restaurant === 1
                      ? cms.menu_image_left.url
                      : cms.ujhely_menu_image_left.url
                  }
                  alt=""
                  width="100%"
                  loading="lazy"
                />
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={
                    restaurant === 1
                      ? cms.menu_image_right.url
                      : cms.ujhely_menu_image_right.url
                  }
                  alt=""
                  width="100%"
                  loading="lazy"
                />
              </div>
            </div>
            {restaurant === 1 && cms.menu_image_bottom?.url && (
              <img
                src={cms.menu_image_bottom.url}
                alt=""
                width="100%"
                className="mb-5"
                loading="lazy"
              />
            )}
            {restaurant === 2 && cms.ujhely_menu_image_bottom?.url && (
              <img
                src={cms.ujhely_menu_image_bottom.url}
                alt=""
                width="100%"
                className="mb-5"
                loading="lazy"
              />
            )}
            <PrismicRichText field={cms.plant_based_disclaimer} />
          </div>
        )}
      </div>

      {/*  Video slideshow */}
      {cms.videos.length > 0 && (
        <div className="container mb-3">
          <Swiper loop={true} navigation={true} modules={[Navigation]}>
            {cms.videos.map((video, index) => (
              <SwiperSlide key={index}>
                <iframe
                  className="iframe"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtube_video_id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/*  Table reservation */}
      {restaurant > 0 && (
        <div name="contact" className="contact-container invert-selection">
          <div className="reservation">
            <PrismicRichText field={cms.table_reservation_title} />

            <a
              onClick={() => sendEvent(`contact_open_maps_${restaurant}`)}
              href={`https://maps.app.goo.gl/${
                restaurant === 1 ? "ZWda2yxCHYWXnHQ5A" : "DjyYWbFpQbpYkbVr6"
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {restaurant === 1 ? "Király utca 101." : "Víg utca 30."}
            </a>

            <br />

            <a
              onClick={() => sendEvent(`contact_bell_number_${restaurant}`)}
              href={`tel:${
                restaurant === 1 ? cms.phone_number : cms.ujhely_phone_number
              }`}
              className="phone-number mt-2"
            >
              {restaurant === 1 ? cms.phone_number : cms.ujhely_phone_number}
            </a>
          </div>

          {/*  Opening hours */}
          <div className="opening-hours">
            <PrismicRichText field={cms.opening_hours_title} />
            <PrismicRichText
              field={
                restaurant === 1
                  ? cms.opening_hours_content
                  : cms.ujhely_opening_hours_content
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
