import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="nav-wrapper">
    <div className="left-side">
    <div className="nav-link-wrapper">
      <Link to="/" className="Link">
        Home
      </Link>
      </div>
      <div className="nav-link-wrapper">
       <Link to= "/Shop" className="Link">
       Shop
       </Link>
      </div>
</div>
<div className="right-side">
<div className="nav-link-wrapper">
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : " Sign In"}{" "}
            </span>
          </div>
        </Link>
        </div>

        <Link to="/orders" className="Link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
       
        <Link to="/checkout" className="Link">
          <div className="cart">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
