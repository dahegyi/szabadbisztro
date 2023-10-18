import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSinglePrismicDocument } from "@prismicio/react";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import ReactGA from "react-ga4";

import Header from "./components/Header";
import Content from "./components/Content";
import MediaSlideshow from "./components/MediaSlideshow";
import Footer from "./components/Footer";

function App() {
  const [cms, { state }] = useSinglePrismicDocument("szabad_bisztro", {
    lang: useSelector((state) => state.languageSwitch.language),
  });

  const cmsData = cms?.data;

  useEffect(() => {
    SwiperCore.use([Autoplay]);
  }, []);

  useEffect(() => {
    if (cmsData) {
      document.title = `${cmsData.app_title} - ${cmsData.app_title_description}`;
    }
  }, [cmsData]);

  const [restaurant, setRestaurant] = useState(0);

  const sendEvent = (event) => {
    ReactGA.event({
      category: "User",
      action: event,
      label: state.languageSwitch.language,
    });
  };

  return (
    <>
      {state === "loading" ? (
        <img src="./lec.gif" className="loading" alt="nyugi..." />
      ) : (
        cmsData && (
          <>
            <Header
              cms={cmsData}
              restaurant={restaurant}
              sendEvent={sendEvent}
            />
            <Content
              cms={cmsData}
              restaurant={restaurant}
              setRestaurant={setRestaurant}
              sendEvent={sendEvent}
            />
            <MediaSlideshow cms={cmsData} />
            <Footer
              cms={cmsData}
              restaurant={restaurant}
              setRestaurant={setRestaurant}
              sendEvent={sendEvent}
            />
          </>
        )
      )}
    </>
  );
}

export default App;
