import { PrismicRichText } from "@prismicio/react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const MediaSlideshow = (props) => {
  const { cms } = props;

  return (
    <Container id="media">
      <Carousel variant="dark">
        {cms?.articles.map((article, index) => (
          <Carousel.Item key={index}>
            <blockquote className="blockquote text-left">
              <PrismicRichText field={article.article_title} />
              <PrismicRichText field={article.article_content} />
            </blockquote>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MediaSlideshow;
