import React from "react";
import { Services } from "./pages/services/Services";
import { Careers } from "./pages/careers/Careers";
import { Route, Routes } from "react-router-dom";
import { CareerCardData } from "./pages/careers/CareerCardData";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Careers />} />
        <Route path="/career-card-data" element={<CareerCardData />} />
        <Route path="/career-card-data/:id" element={<CareerCardData />} />
      </Routes>
      <Services />
    </>
  );
}

export default App;
