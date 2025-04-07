/*import { createContext, useState, useEffect } from "react";

export const contextTask = createContext();

export const ProviderTask = ({ children }) => { 

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]); // Estado para las tareas filtradas
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setFilteredTasks([...tasks]); // Evita duplicaciones
    }, [tasks]);

    return(
        <contextTask.Provider value={{
            title, setTitle,
            description, setDescription,
            tasks, setTasks,
            filteredTasks, setFilteredTasks
        }}>
            {children}
        </contextTask.Provider>
    );
};*/

import { createContext, useState } from "react";

export const contextTask = createContext();

export const ProviderTask = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <contextTask.Provider value={{
      tasks, setTasks,
      title, setTitle,
      description, setDescription,
      filter, setFilter
    }}>
      {children}
    </contextTask.Provider>
  );
};
