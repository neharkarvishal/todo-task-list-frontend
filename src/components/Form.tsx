import React, { useState } from 'react';

type Props = { addTask: (name: string) => void };

function Form({ addTask }: Props): JSX.Element {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label className="label__lg" htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>
      <input
        autoComplete="off"
        className="input input__lg"
        id="new-todo-input"
        name="text"
        onChange={handleChange}
        type="text"
        value={name}
      />
      <button className="btn btn__primary btn__lg" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
