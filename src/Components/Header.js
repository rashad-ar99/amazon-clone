import React from "react";
import {Link} from 'react-router-dom'
import './CSS Components/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket, ShoppingCart } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to='/'>
        <img className="header__logo"
        src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineOne">
                Hello Guest
            </span>
            <span className="header__optionLineTwo">
                Sign in
            </span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">
                Returns
            </span>
            <span className="header__optionLineTwo">
                & Orders
            </span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">
                Your
            </span>
            <span className="header__optionLineTwo">
                Prime
            </span>
        </div>

        <Link to='/checkout'>
        <div className="header__optionBasket">
          <ShoppingCart/>
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
