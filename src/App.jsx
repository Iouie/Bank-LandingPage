import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LatestArticle from "./components/LatestArticle";
import FooterComponent from "./components/FooterComponent";
import MobileComponent from "./components/MobileComponent";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // check if using mobile device

function App() {
  return (
    <>
      {isMobile ? (
        <MobileComponent />
      ) : (
        <div className="bg-[#fafafa] overflow-hidden">
          <Navbar />
          <Main />
          <LatestArticle />
          <FooterComponent />
        </div>
      )}
    </>
  );
}

export default App;
