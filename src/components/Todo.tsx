import React from 'react';

export default function Todo(): JSX.Element {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input defaultChecked id="todo-0" type="checkbox" />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>

      <div className="btn-group">
        <button className="btn" type="button">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button className="btn btn__danger" type="button">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}
