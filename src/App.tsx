/* eslint-disable no-undef */
import React from 'react';

import Todo from './components/Todo';

type Props = Array<{
  completed: boolean;
  name: string;
  id: string;
}>;

const App = ({ tasks }: { tasks: Props }): JSX.Element => {
  const taskList = tasks.map((task) => (
    <Todo completed={task.completed} id={task.id} key={task.id} name={task.name} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>YA-TODO</h1>
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
      <div className="filters btn-group stack-exception">
        <button aria-pressed="true" className="btn toggle-btn" type="button">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button aria-pressed="false" className="btn toggle-btn" type="button">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button aria-pressed="false" className="btn toggle-btn" type="button">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
        role="list"
      >
        {taskList}
      </ul>
    </div>
  );
};

export default App;
