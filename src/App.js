import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./view/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Admin from "./view/admin/Admin";
import Article from "./view/article/Article";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Article />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
