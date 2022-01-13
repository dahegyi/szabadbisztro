import { useDispatch } from "react-redux";

import SlideshowView from "./slideshow-view";

const Slideshow = (props) => {
  const { cms } = props;

  // Select random images
  const imgs = cms?.slideshow_images;
  const randomSlideshowImage =
    imgs && imgs[Math.floor(Math.random() * imgs.length)].slideshow_image;

  // Select random texts
  const texts = cms?.slideshow_texts;
  const textsLength = texts?.length;

  let rand1 = Math.floor(Math.random() * textsLength);
  let rand2 = rand1;

  while (rand1 === rand2) {
    rand2 = Math.floor(Math.random() * textsLength);
  }

  const randomSlideshowTexts = [
    texts && texts[rand1].text,
    texts && texts[rand2].text,
  ];

  const dispatch = useDispatch();

  return (
    <SlideshowView
      cms={cms}
      slideshowImage={randomSlideshowImage}
      slideshowTexts={randomSlideshowTexts}
      dispatch={dispatch}
    />
  );
};

export default Slideshow;
