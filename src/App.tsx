/* eslint-disable no-undef */
import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';

type Task = {
  completed: boolean;
  name: string;
  id: string;
};

type Tasks = Array<Task>;

const App = ({ tasksList }: { tasksList: Tasks }): JSX.Element => {
  const [tasks, setTasks] = useState<Tasks>(tasksList);

  const taskList = tasks.map((task) => (
    <Todo completed={task.completed} id={task.id} key={task.id}
name={task.name} />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const addTask = (name: string) => {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
