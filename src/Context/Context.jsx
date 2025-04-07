import { createContext, useState, useEffect } from "react";

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
};
