import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LatestArticle from "./components/LatestArticle";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="bg-[#fafafa] overflow-hidden">
      <Navbar />
      <Main />
      <LatestArticle />
      <FooterComponent />
    </div>
  );
}

export default App;
