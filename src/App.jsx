import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LatestArticle from "./components/LatestArticle";

function App() {
  return (
    <div className="bg-[#fafafa] overflow-hidden">
      <Navbar />
      <Main />
      <LatestArticle />
    </div>
  );
}

export default App;
