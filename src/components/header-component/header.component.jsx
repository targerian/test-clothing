import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util"
import { connect } from "react-redux";
import CartIcon from "../shop-bag/shop-bag.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
    
    {currentUser && <div className="option"> Welcome  {currentUser.displayName}</div>}

      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {
        currentUser?
        <div className="option" onClick={()=> auth.signOut()}>
          SIGN OUT
        </div> : 
        <Link className="option" to="/sign">
          SIGN IN
        </Link>
        
      }
      <CartIcon />
      
    </div>
    {!hidden && (<CartDropdown />)}
  </div>
);

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
})


export default connect(mapStateToProps)(Header);
