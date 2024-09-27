import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:p-15xl:px-20 min-h-screen mb-10 bg-[#242424] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:movie_id" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
