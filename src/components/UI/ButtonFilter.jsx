/*import React from 'react'
import { Button } from './Button'
export const ButtonFilter = () => {
  return (
    <div className='containerButtomsFilter'>
        <Button name="All"/>
        <Button name="Pending"/>
        <Button name="Completed"/>
    </div>
  )
}*/
import React, { useContext } from 'react';
import { Button } from './Button';
import { contextTask } from '../../Context/Context';

export const ButtonFilter = () => {
  const { setFilter } = useContext(contextTask);

  return (
    <div className='containerButtomsFilter'>
      <button className='buttomsFilter' onClick={() => setFilter("All")}>All</button>
      <button className='buttomsFilter' onClick={() => setFilter("Pending")}>Pending</button>
      <button className='buttomsFilter' onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
};
