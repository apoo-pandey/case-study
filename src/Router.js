import React from "react";
import Home from "./Home";
import About from "./About-page/About";
import Service from "./Service";
import Menu from "./Menu";
import Contact from "./Contact-Page/Contact";
import BookaTable from "./BookTable/BookaTable";
import { Routes, Route } from "react-router-dom";
import ReduxCart from "./Cart/ReduxCart";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/Home/BookaTable" element={<BookaTable />} />
      </Route>
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Cart" element={<ReduxCart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/BookaTable" element={<BookaTable />} />
    </Routes>
  );
};

export default Router;
