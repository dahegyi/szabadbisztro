import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSinglePrismicDocument } from "@prismicio/react";

import Slideshow from "./components/slideshow";
import Content from "./components/content";
import MediaSlideshow from "./components/media-slideshow";
import Footer from "./components/footer";

import "./App.scss";

function App() {
  useEffect(() => {
    if (data) {
      document.title = `${data.app_title} - ${data.app_title_description}`;
    }
  });

  const currentLanguage = useSelector((state) => state.languageSwitch.language);

  const [cms, { state }] = useSinglePrismicDocument("szabad_bisztro", {
    lang: currentLanguage,
  });

  const data = cms?.data;

  return (
    <>
      {state === "loading" ? (
        <div className="spinner">
          <img src="./loading.png" alt="nyugi" />
        </div>
      ) : (
        <>
          <Slideshow cms={data} />
          <Content cms={data} />
          <MediaSlideshow cms={data} />
          <Footer cms={data} />
        </>
      )}
    </>
  );
}

export default App;
