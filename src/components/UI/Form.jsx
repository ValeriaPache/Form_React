import { useContext } from "react"
import { contextTask } from "../../Context/Context"
export const Form = () => {

    const {title,setTitle,description,setDescription,tasks,setTasks} = useContext (contextTask)
    
    const addTask = (e) => {
        e.preventDefault();
    
        const newTask = {
          id: Date.now(),
          title:title,
          description:description,
          completed: false
        };
    
        setTasks([...tasks, newTask]);
      };

  return (
    <>
        <h1 className='Tittle'>To-Do List</h1>
      <form className='containerForm' onSubmit={addTask}>
        <input 
          className='inputForm' 
          type='text' 
          placeholder='Hacer Ejercicio' 
          value={title}
          onChange={(e) => setTitle(e.target.value.trim())} 
        />
        <textarea 
          className='texttareaForm' 
          placeholder='Descripción'
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button className='buttomForm' type="submit">Add Task</button>
      </form>
    </>
  )
}