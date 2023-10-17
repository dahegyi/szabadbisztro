import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSinglePrismicDocument } from "@prismicio/react";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import Header from "./components/Header";
import Content from "./components/Content";
import MediaSlideshow from "./components/MediaSlideshow";
import Footer from "./components/Footer";

function App() {
  const [cms, { state }] = useSinglePrismicDocument("szabad_bisztro", {
    lang: useSelector((state) => state.languageSwitch.language),
  });

  const data = cms?.data;

  useEffect(() => {
    SwiperCore.use([Autoplay]);
  }, []);

  useEffect(() => {
    if (data) {
      document.title = `${data.app_title} - ${data.app_title_description}`;
    }
  }, [data]);

  const [restaurant, setRestaurant] = useState(0);

  return (
    <>
      {state === "loading" ? (
        <img src="./lec.gif" className="loading" alt="nyugi..." />
      ) : (
        data && (
          <>
            <Header cms={data} restaurant={restaurant} />
            <Content
              cms={data}
              restaurant={restaurant}
              setRestaurant={setRestaurant}
            />
            <MediaSlideshow cms={data} />
            <Footer
              cms={data}
              restaurant={restaurant}
              setRestaurant={setRestaurant}
            />
          </>
        )
      )}
    </>
  );
}

export default App;
