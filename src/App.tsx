/* eslint-disable no-undef */
import React from 'react';

import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';

type Task = {
  completed: boolean;
  name: string;
  id: string;
};

type Tasks = Array<Task>;

const App = ({ tasks }: { tasks: Tasks }): JSX.Element => {
  const taskList: JSX.Element[] = tasks.map((task) => (
    <Todo completed={task.completed} id={task.id} key={task.id} name={task.name} />
  ));

  const addTask = (name: string) => {
    alert(name);
  };

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
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
