import React from "react";
import "../styles/Search.css";

const Search = (props) => {

  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="        Search by name"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startFilter(event)}
        />
      </form>
    </div>
  );

}

export default Search;