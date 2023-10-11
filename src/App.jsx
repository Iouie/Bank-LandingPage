import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LatestArticle from "./components/LatestArticle";
import FooterComponent from "./components/FooterComponent";
import MobileComponent from "./components/MobileComponent";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      {/* <div className="bg-[#fafafa] overflow-hidden">
        <Navbar />
        <Main />
        <LatestArticle />
        <FooterComponent />
      </div> */}
      <MobileComponent />
    </>
  );
}

export default App;
