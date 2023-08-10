import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImpThings from "./components/ImpThings";
import Introduction from "./components/Introduction";
import Sharing from "./components/Sharing";

function App() {
  return (
    <div className="App mx-20 my-5">
      <Header />
      <HeroSection />
      <Introduction />
      <ImpThings />
      <Sharing />
    </div>
  );
}

export default App;
