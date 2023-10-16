import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSinglePrismicDocument } from "@prismicio/react";

import Slideshow from "./components/Slideshow.jsx";
import Content from "./components/Content";
import MediaSlideshow from "./components/MediaSlideshow";
import Footer from "./components/Footer";

function App() {
  const [restaurant, setRestaurant] = useState(0);

  useEffect(() => {
    if (data) {
      document.title = `${data.app_title} - ${data.app_title_description}`;
    }
  });

  const [cms, { state }] = useSinglePrismicDocument("szabad_bisztro", {
    lang: useSelector((state) => state.languageSwitch.language),
  });

  const data = cms?.data;

  return (
    <>
      {state === "loading" ? (
        <img src="./lec.gif" className="loading" alt="nyugi..." />
      ) : (
        data && (
          <>
            <Slideshow cms={data} />
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
