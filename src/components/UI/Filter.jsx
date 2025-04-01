import { useContext } from "react";
import { contextTask } from "../../Context/Context";
import { ButtonFilter } from "./ButtonFilter";
import { TaskList } from "./TaskList";

export const Filter = () => {
    const { tasks } = useContext(contextTask); // Obtén las tareas del contexto

    return (
      <div className='secondContainer'>
        <ButtonFilter />
          {tasks.map(task => (
            <TaskList key={task.id} task={task} />
          ))}
      </div>
    );
};
