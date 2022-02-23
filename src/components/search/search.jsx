import React from "react";
import "./search.scss"

export const SearchBar = ({handleChange, placeholder}) => {
    return(
        <input
            className="searchBar"
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}
