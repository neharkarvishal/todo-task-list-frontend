import React from 'react';

function Form(props): JSX.Element {
  return (
    <form>
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
        type="text"
      />
      <button className="btn btn__primary btn__lg" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
