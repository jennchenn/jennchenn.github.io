import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Splash from "./components/splash";


export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
          <Routes>
            <Route path="*" element={<Splash />} />
          </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}
