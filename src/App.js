import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Contact from "./Contact";
import Success from "./Success"; 
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
