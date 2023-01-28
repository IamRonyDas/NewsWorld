import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import New from "./Components/New";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <New
              key="general"
              pagesize={6}
              country="in"
              category="general"
              // country="in"
            />
          }
        />
        <Route
          exact
          path="/Kharichacha"
          element={
            <New key="general" pagesize={6} country="in" category="general" />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <New key="business" pagesize={6} country="in" category="business" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <New
              key="entertainment"
              pagesize={6}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <New key="health" pagesize={6} country="in" category="health" />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <New key="science" pagesize={6} country="in" category="science" />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <New key="sports" pagesize={6} country="in" category="sports" />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <New
              key="technology"
              pagesize={6}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
