import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import image from '../images/logo.jpeg'

// import { signOut} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    // console.log('hii');
    if (user) {
      auth.signOut();
    }
    // console.log(user.email);
  };

  return (
    // <div className='header'>
    //   <Link to="/">
    //     <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" />
    //   </Link>
    //     <div className="header__search">
    //         <input type="text" className="header__searchinput" />
    //         <SearchIcon className='header__searchIcon'/>
    //         {/* logo */}
    //     </div>
    //     <div className="header__nav">
    //     <Link to={ !user && '/login'} style={{ textDecoration: 'none' }}>
    //       <div onClick={handleAuthentication} className="header__options">
    //           <span className="header__optionLineOne">Hello {!user? 'Guest' : user.email}</span>
    //           <span className="header__optionLineTwo">{user? 'Sign Out':'Sign In'}</span>
    //       </div>
    //     </Link>
    //     <Link to='/Orders' style={{ textDecoration: 'none' }}>
    //       <div className="header__options">
    //           <span className="header__optionLineOne">Returns</span>
    //           <span className="header__optionLineTwo">& Orders</span>

    //       </div>
    //     </Link>
    //       <div className="header__options">
    //            <span className="header__optionLineOne">Your</span>
    //           <span className="header__optionLineTwo">Prime</span>
    //       </div>

    //       <Link to="/Checkout" style={{ textDecoration: 'none' }}>
    //       <div  className="header__BasketOption">
    //           <ShoppingCartIcon/>
    //           <span className="header__optionLineTwo header__cartCount" >{basket?.length}</span>
    //       </div>
    //       </Link>
    //     </div>
    // </div>

    //     <div className='header'>
    //     <Link to="/">
    //       <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" />
    //     </Link>
    //       <div className="header__search">
    //           <input type="text" className="header__searchinput" />
    //           <SearchIcon className='header__searchIcon'/>
    //           {/* logo */}
    //       </div>
    //

    //       </div>
    //   </div>

    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          {/* <div className="container-fluid"> */}
            <Link to="/">
              <img
                className="header__logo navbar-brand"
                src={image}
                alt=""
              />
            </Link>
            <li className="nav-item header__search">
                    <input type="text" className="header__searchinput"/>
                    <SearchIcon className="header__searchIcon" id="header__searchIcon" />
                    {/* logo */}
            </li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse header__nav"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <Link
                      to={!user && "/login"}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        onClick={handleAuthentication}
                        className='header__options'
                      >
                        <span className="header__optionLineOne">
                          Hello {!user ? "Guest" : user.email}
                        </span>
                        <span className="header__optionLineTwo">
                          {user ? "Sign Out" : "Sign In"}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Orders" style={{ textDecoration: "none" }}>
                      <div className="header__options">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/primes' style={{ textDecoration: "none" }}>
                    <div className="header__options">
                      <span className="header__optionLineOne">Your</span>
                      <span className="header__optionLineTwo">Prime</span>
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Checkout" style={{ textDecoration: "none" }}>
                      <div className="header__BasketOption">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__cartCount">
                          {basket?.length}
                        </span>
                      </div>
                    </Link>
                  </li>
              </ul>
          </div>
        </nav>
      </div>
  );
}

export default Header;
