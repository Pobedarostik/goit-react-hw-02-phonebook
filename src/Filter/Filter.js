import React from "react";
import PropTypes from "prop-types";
import style from './Filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={style.div}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        placeholder="Search"
        
      />
    </div>
  );
}


Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};