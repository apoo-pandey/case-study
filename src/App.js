import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Menu from "./Menu";
import Contact from "./Contact";
import BookaTable from "./BookaTable";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import BrandName from "./BrandName";
import ReduxCart from "./Cart/ReduxCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { show } from "./Cart/ActionsCart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  //const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const cart = useSelector((state) => {
    console.log(state);
    return state.cart;
  });
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menunavbar">
          <div className="img">
            <BrandName />
          </div>
          <div className="navbar">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/About">
              About
            </Link>
            <Link className="link" to="/Service">
              Service
            </Link>
            <Link className="link" to="/Menu">
              Menu
            </Link>
            <Link className="link" to="/Cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <Link className="link" to="/Contact">
              Contact
            </Link>
            <Link className="linktable" to="/BookaTable">
              Book a Table
            </Link>
          </div>
        </div>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
