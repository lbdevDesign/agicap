import React from "react";

//Organisms
import Header from "../components/organisms/header/header";
import HeroSection from "../components/organisms/heroSection/heroSection";
import Features from "../components/organisms/features/features";
import Presentation from "../components/organisms/presentation/presentation";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Features />
      <Presentation />
    </div>
  );
}

export default App;
