import PropTypes from "prop-types";
import { PrismicRichText } from "@prismicio/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const MediaSlideshow = (props) => {
  const { cms } = props;

  MediaSlideshow.propTypes = {
    cms: PropTypes.object.isRequired,
  };

  return (
    <div className="container media">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {cms.articles.map((article, index) => (
          <SwiperSlide key={index}>
            <blockquote className="blockquote text-left">
              <PrismicRichText field={article.article_title} />
              <PrismicRichText field={article.article_content} />
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MediaSlideshow;
