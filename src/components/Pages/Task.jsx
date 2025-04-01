import './StilesTask.css'
import { Form } from '../UI/Form';
import { Filter } from '../UI/Filter';

export const Task = () => {

  return (
    <section className='container'>
    <div className='subContainer'>
    <Form/>
     <Filter/> 
    </div>    
    </section>
  );
};
