import React, { useState } from 'react';

type TodoProps = {
  name: string;
  id: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
};

export default function Todo({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}: TodoProps): JSX.Element {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName);
    setNewName('');
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input
          className="todo-text"
          id={id}
          onChange={handleChange}
          type="text"
          value={newName}
        />
      </div>

      <div className="btn-group">
        <button
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
          type="button"
        >
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>

        <button className="btn btn__primary todo-edit" type="submit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
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
        <button className="btn" onClick={() => setEditing(true)} type="button">
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
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
