import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Landing page/Welcome";
import TableView from "./Landing page/TableView";
import ListView from "./Landing page/ListView";
import AddEntry from "./Landing page/AddEntry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/table" element={<TableView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/addEntry" element={<AddEntry/>} />
    </Routes>
  );
}

export default App;
