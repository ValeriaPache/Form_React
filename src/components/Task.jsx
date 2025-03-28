import React from 'react'
import { Form } from 'react-router-dom'

export const Task = () => {
  return (
    <section >
        <h1>To-Do List</h1>
        <form>
            <input type='Text' placeholder='Hacer Ejercicio'></input>
            <textarea type='Text' placeholder='Description'></textarea>
            <button>Add Task</button>
        </form>
        <div>
            <div>
                <button>All</button>
                <button>Pending</button>
                <button>Completed</button>
            </div>
            <button>
                <input type='checkbox'></input>
                <h3>Barrer</h3>
                <p>Realizar aseo del lugar</p>
            </button>
            <button>
                <input type='checkbox'></input>
                <h3>Estudiar para examen</h3>
                <p>Preparación bimestral</p>
            </button>
        </div>
    </section>
    
  )
}