import React from "react";

//Organisms
import Header from "../components/organisms/header/header";
import HeroSection from "../components/organisms/heroSection/heroSection";
import Features from "../components/organisms/features/features";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
}

export default App;
