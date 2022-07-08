import React from "react";

import "./DemoFilter.css";

const DemoFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); 
  };
  return (
    <div className="demo-filter">
      <div className="demo-filter__control">
        <select onChange={dropdownChangeHandler}>
          <option value="">Edit</option>
          <option value="">Import</option>
          <option value="">Delete</option>
        </select>
      </div>
    </div>
  );
};

export default DemoFilter;