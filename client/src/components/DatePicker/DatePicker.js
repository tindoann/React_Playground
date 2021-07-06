import React, { useState } from "react";
import "./DatePicker.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function DatePicker() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <div className="search">
          {showSearch && <Search />}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="banner__searchbutton"
          >
            {showSearch ? "Hide" : "Search Dates"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
