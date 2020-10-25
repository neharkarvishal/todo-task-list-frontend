import React from 'react';

type TodoProps = {
  name: string;
  id: string;
  completed: boolean;
};

export default function Todo({ name, completed, id }: TodoProps): JSX.Element {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input defaultChecked={completed} id={id} type="checkbox" />
        <label className="todo-label" htmlFor={id}>
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
