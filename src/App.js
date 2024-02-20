import React from "react";
import Home from "./component/home";
import PizzaCard from "./component/PizzaCard";
import "./App.css";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="container">
      <Home />
      <PizzaCard />
      <Footer />
    </div>
  );
};

export default App;
