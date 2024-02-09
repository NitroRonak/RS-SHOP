import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import {withRouter} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <div className="searchContainer">
      <MetaData title="Search A Product -- CoolShop" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit"> <FaSearch/> </button>
      </form>
    </div>
  );
};

export default withRouter(Search);
