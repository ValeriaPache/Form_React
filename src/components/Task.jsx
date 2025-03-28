import React from 'react'
import { Form } from 'react-router-dom'
import './StilesTask.css'

export const Task = () => {
  return (
    <section className='container'>
        <h1 className='Tittle'>To-Do List</h1>
        <form className='containerForm'>
            <input className='inputForm' type='Text' placeholder='Hacer Ejercicio'></input>
            <textarea className='texttareaForm' type='Text' placeholder='Description'></textarea>
            <button className='buttomForm'>Add Task</button>
        </form>
        <div className='secondContainer'>
            <div className='containerButtomsFilter'>
                <button className='buttomsFilter'>All</button>
                <button className='buttomsFilter' >Pending</button>
                <button className='buttomsFilter'>Completed</button>
            </div>
            <button className='containerListTask'>
                <input type='checkbox'></input>
                <h3 className='titleListTask'>Barrer</h3>
                <p className='textListTask'>Realizar aseo del lugar</p>
            </button>
            <button className='containerListTask'>
                <input type='checkbox'></input>
                <h3 className='titleListTask'>Estudiar para examen</h3>
                <p className='textListTask'>Preparación bimestral</p>
            </button>
        </div>
    </section>
    
  )
}