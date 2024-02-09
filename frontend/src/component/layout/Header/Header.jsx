import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/RS-unscreen.gif"
import {FaUserAlt,FaSearch} from "react-icons/fa"
import {FiShoppingCart} from "react-icons/fi"

const Header = () => {
  return <ReactNavbar 
  burgerColorHover= "#eb4034"
  burgerColor="yellow"
  logo={logo}
  logoWidth= "25vmax"
  navColor1= "rgb(16, 20, 22)"
  logoHoverSize= "10px"
  logoHoverColor= "#eb4034"
  link1Text= "Home"
  link2Text= "Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "2vmax"
  link1Transition={1.5}
  link1Color= "white"
  link1Family="Mouse Memoirs"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "chartreuse"
  link1Margin= "0.9vmax"
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  searchIcon={true}
  SearchIconElement={FaSearch}
  cartIcon={true}
  CartIconElement={FiShoppingCart}
  profileIconUrl= "/login"
  profileIconColor= "#d14c2e"
  searchIconColor= "#d14c2e"
  cartIconColor= "#d14c2e"
  profileIconColorHover= "#0bb546"
  searchIconColorHover= "#0bb546"
  cartIconColorHover= "#0bb546"
  cartIconMargin= "2vmax" 
  />;
};

export default Header;