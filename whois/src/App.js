import React from "react";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import Search from "./search/container/Search";
import User from "./user/container/User";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Search />} />
      <Route exact path="/user/:name" element={<User />} />
    </Routes>
  );
}

export default App;
