import React from 'react';

export const TaskList = ({ task }) => {  // Asegúrate de recibir la prop correctamente
  return (
    <div className='containerListTask'>
      <input type='checkbox'></input>
      <h3 className='titleListTask'>{task.title}</h3>
      <p className='textListTask'>{task.description}</p>
    </div>
  );
};
