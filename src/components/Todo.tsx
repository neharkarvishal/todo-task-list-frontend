import React from 'react';

type TodoProps = {
  name: string;
  id: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function Todo({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
}: TodoProps): JSX.Element {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          defaultChecked={completed}
          id={id}
          onChange={() => toggleTaskCompleted(id)}
          type="checkbox"
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button className="btn" type="button">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
          type="button"
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}
