import React from 'react';

export default function Todo({ name }: { name: string }): JSX.Element {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input defaultChecked id="todo-0" type="checkbox" />
        <label className="todo-label" htmlFor="todo-0">
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button className="btn" type="button">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button className="btn btn__danger" type="button">
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}
