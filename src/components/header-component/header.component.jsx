import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util"
import { connect } from "react-redux";

const Header = ({currentUser}) => (
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
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})


export default connect(mapStateToProps)(Header);
