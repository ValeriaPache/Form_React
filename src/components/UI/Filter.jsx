import React from 'react'

export const Filter = () => {
  return (
    
        <div className='secondContainer'>
        <div className='containerButtomsFilter'>
          <button className='buttomsFilter'>All</button>
          <button className='buttomsFilter'>Pending</button>
          <button className='buttomsFilter'>Completed</button>
        </div>

       {/*{tasks.map(task => (*/}
          <div /*key={task.id}*/ className='containerListTask'>
            <input type='checkbox'></input>
            <h3 className='titleListTask'>{/*{task.title}*/}</h3>
            <p className='textListTask'>{/*{task.description}*/}</p>
          </div>
        {/* ))} */}
      </div>
    
  )
}