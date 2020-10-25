/* eslint-disable no-undef */
import React from 'react';

type Props = Array<{
  completed: boolean;
  name: string;
  uid: string;
}>;

const App = ({ data }: { data: Props }): JSX.Element => {
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
      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
      >
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
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button className="btn" type="button">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button className="btn btn__danger" type="button">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button className="btn" type="button">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button className="btn btn__danger" type="button">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
