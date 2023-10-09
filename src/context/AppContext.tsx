import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type TaskType = {
    id: string,
    item: string,
    status: 'pending' | 'done'
}

type AppContextType = {
    tasksList: TaskType[];
    addNewItem: (item: string) => void;
    handleSearch: string;
    setHandleSearch: (search: string) => void;
    handleFiltering: string;
    setHandleFiltering: (filter: string) => void;
    toggleItemStatus: (id: string) => void;
    filterPendingItems: () => void;
    filterDoneItems: () => void;
}

export const AppContext = createContext<AppContextType>({
    tasksList: [],
    addNewItem: () => {},
    handleSearch: '',
    setHandleSearch: () => {},
    handleFiltering: '',
    setHandleFiltering: () => {},
    toggleItemStatus: () => {},
    filterPendingItems: () => {},
    filterDoneItems: () => {},
})

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [tasksList , setTasksList] = useState([]);
    const [handleSearch , setHandleSearch] = useState('');
    const [handleFiltering , setHandleFiltering] = useState('');

    const localStorageItems = window.localStorage.getItem('items')
    let data = JSON.parse(localStorageItems || '[]')

    useEffect(() => {
        setTasksList(data);
    }, []);

    const addNewItem = (item: string) => {
        const newItem = { id: uuidv4() ,item, status: "pending" };
        data.push(newItem);

        window.localStorage.setItem("items", JSON.stringify(data));
    }

    const toggleItemStatus = (id: string) => {
        const itemIndex = data.findIndex((item: TaskType) => item.id === id);
    
        if (itemIndex !== -1) {
          const updatedItems = [...data];
    
          updatedItems[itemIndex].status = updatedItems[itemIndex].status === "done" ? "pending" : "done";
    
          window.localStorage.setItem("items", JSON.stringify(updatedItems));
        }
    };

    const filterPendingItems = () => {
        const pendingItems = data.filter((item: TaskType) => item.status === "pending");
        setTasksList(pendingItems);
    };

    const filterDoneItems = () => {
        const doneItems = data.filter((item: TaskType) => item.status === "done");
        setTasksList(doneItems);
    };

    return(
        <AppContext.Provider value={{ tasksList, addNewItem, handleSearch, setHandleSearch, handleFiltering, setHandleFiltering, toggleItemStatus, filterPendingItems, filterDoneItems }}>
            {children}
        </AppContext.Provider>
    )
}