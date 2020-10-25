/* eslint-disable no-undef */
import React from 'react';

import FilterButton from './components/FilterButton';
import Form from './components/Form';
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
      <Form />
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
