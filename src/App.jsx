import React from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Recipe from "./Component/Recipe";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Banner />
      <Recipe />
    </div>
  );
}

export default App;
