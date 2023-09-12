import { Link } from "react-router-dom";
import BrandName from "./BrandName";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";


export const Header = () => {
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
    )
}
