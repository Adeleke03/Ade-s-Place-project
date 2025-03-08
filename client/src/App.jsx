import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "./routes/routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import LoadingRing from "./utils/Loader";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Hero from "./layouts/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen ">
              <LoadingRing />
            </div>
          }
        >
          <Navbar />
          <Hero/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<SignUp />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
