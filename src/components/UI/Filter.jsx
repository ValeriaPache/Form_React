/*import { useContext } from "react";
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
};*/
import { useContext } from "react";
import { contextTask } from "../../Context/Context";
import { ButtonFilter } from "./ButtonFilter";
import { TaskList } from "./TaskList";

export const Filter = () => {
  const { tasks, filter } = useContext(contextTask);

  const filteredTasks = tasks.filter(task => {
    if (filter === "All") return true;
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className='secondContainer'>
      <ButtonFilter />
      {filteredTasks.map(task => (
        <TaskList key={task.id} task={task} />
      ))}
    </div>
  );
};
