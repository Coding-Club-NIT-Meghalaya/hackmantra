import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

library.add(faTwitter, faYoutube, faInstagram, faLinkedin);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
