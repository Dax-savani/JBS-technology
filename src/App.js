import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" />
        <Route path="/careers" />
        <Route path="/careers/:id" />
        <Route path="/contact" />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
