import React from 'react';

function FilterButton(props): JSX.Element {
  return (
    <button aria-pressed="true" className="btn toggle-btn" type="button">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
