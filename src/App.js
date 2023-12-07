import React from "react";
import "./App.css";
import Header from "./component/Head/Header";
import Home from "./component/Head/Hero/Home";
import Evidence from "./component/Evidence/Evidence";
import Homework from "./component/Homework/Homework";
import Map from "./component/Map/Map";
import Contact from "./component/Contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Evidence />
      <Homework />
      <Map />
      <Contact />
    </>
  );
};
export default App;
