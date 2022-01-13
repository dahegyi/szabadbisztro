import { useSelector } from "react-redux";
import { useSinglePrismicDocument } from "@prismicio/react";

import Loading from "./components/loading";
import Slideshow from "./components/slideshow";
import Content from "./components/content";
import MediaSlideshow from "./components/media-slideshow";
import Footer from "./components/footer";

import "./App.scss";

function App() {
  const currentLanguage = useSelector((state) => state.languageSwitch.language);

  const [cms, { state }] = useSinglePrismicDocument("szabad_bisztro", {
    lang: currentLanguage,
  });

  const data = cms?.data;

  return (
    <>
      {state === "loading" ? (
        <Loading />
      ) : (
        <>
          <Slideshow cms={data} />
          <Content cms={data} />
          <MediaSlideshow cms={data} />
          <Footer cms={data} />
          {currentLanguage}
        </>
      )}
    </>
  );
}

export default App;
