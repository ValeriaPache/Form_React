import './StilesTask.css'
import { Form } from '../UI/Form';
import { Filter } from '../UI/Filter';

export const Task = () => {
  /*const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title:title,
      description:description,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };*/

  return (
    <section className='container'>
    <div className='subContainer'>
    <Form/>
     <Filter/> 
    </div>    
    </section>
  );
};
