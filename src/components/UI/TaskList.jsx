/*import React from 'react';

export const TaskList = ({ task }) => {  // Asegúrate de recibir la prop correctamente
  return (
    <div className='containerListTask'>
    <div className='subContainerListTaskOne'>
      <input type='checkbox'></input>
      <h3 className='titleListTask'>{task.title}</h3>
      <p className='textListTask'>{task.description}</p>  
    </div>
    <div className='containerButtomListTask'>
        <button className='buttomListTask'>Delete</button>
    </div>
    </div>
  );
};*/

import { useContext } from "react";
import { contextTask } from "../../Context/Context";
import { DeleteButton } from "./DeleteButton";

export const TaskList = ({ task }) => {
  const { tasks, setTasks } = useContext(contextTask);

  const handleCheck = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='containerListTask'>
      <div className='subContainerListTaskOne'>
        <input type='checkbox' checked={task.completed} onChange={handleCheck} />
        <h3 className='titleListTask'>{task.title}</h3>
        <p className='textListTask'>{task.description}</p>
      </div>
      <div className='containerButtomListTask'>
        <DeleteButton id={task.id} />
      </div>
    </div>
  );
};
