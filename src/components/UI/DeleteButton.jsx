import { useContext } from "react";
import { contextTask } from "../../Context/Context";

export const DeleteButton = ({ id }) => {
  const { tasks, setTasks } = useContext(contextTask);

  const handleDelete = () => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return <button className='buttomListTask' onClick={handleDelete}>Delete</button>;
};
