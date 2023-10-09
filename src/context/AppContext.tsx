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
    handleFiltering: string;
    setHandleFiltering: (filter: string) => void;
    toggleItemStatus: (id: string) => void;
    filterPendingItems: () => void;
    filterDoneItems: () => void;
    searchFilter: (search: string) => void;
    progress: number;
}

export const AppContext = createContext<AppContextType>({
    tasksList: [],
    addNewItem: () => {},
    handleFiltering: '',
    setHandleFiltering: () => {},
    toggleItemStatus: () => {},
    filterPendingItems: () => {},
    filterDoneItems: () => {},
    searchFilter: () => {},
    progress: 0,
})

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [tasksList, setTasksList] = useState([]);
    const [handleFiltering, setHandleFiltering] = useState('pending');
    const [progress, setProgress] = useState(0);

    const localStorageItems = window.localStorage.getItem('items')
    let data = JSON.parse(localStorageItems || '[]')
    

    const toggleItemStatus = (id: string) => {
        const itemIndex = data.findIndex((item: TaskType) => item.id === id);
    
        if (itemIndex !== -1) {
          const updatedItems = [...data];
    
          updatedItems[itemIndex].status = updatedItems[itemIndex].status === "done" ? "pending" : "done";
    
          window.localStorage.setItem("items", JSON.stringify(updatedItems));
        }
    };

    useEffect(() => {
        setTasksList(data);

        calculateDonePercentage();

        if(handleFiltering === 'pending') {
            filterPendingItems();
        }

        if(handleFiltering === 'done') {
            filterDoneItems();
        }
    }, [handleFiltering]);

    const addNewItem = (item: string) => {
        const newItem = { id: uuidv4() ,item, status: "pending" };
        data.push(newItem);

        window.localStorage.setItem("items", JSON.stringify(data));
    }

    const filterPendingItems = () => {
        const pendingItems = data.filter((item: TaskType) => item.status === "pending");
        setTasksList(pendingItems);
    };

    const filterDoneItems = () => {
        const doneItems = data.filter((item: TaskType) => item.status === "done");
        setTasksList(doneItems);
    };

    const searchFilter = (search: string) => {
        const filteredItems = data.filter((item: TaskType) => {
            if (handleFiltering === 'pending' && item.status !== 'pending') {
                return false;
            }
            if (handleFiltering === 'done' && item.status !== 'done') {
                return false;
            }
            return item.item.toLowerCase().includes(search.toLowerCase());
        });
        setTasksList(filteredItems);
    };

    const calculateDonePercentage = () => {
        const doneItems = data.filter((item: TaskType) => item.status === "done");
        const percentage = (doneItems.length / data.length) * 100;
        setProgress(percentage);
    };

    return(
        <AppContext.Provider value={{ tasksList, addNewItem, handleFiltering, setHandleFiltering, toggleItemStatus, filterPendingItems, filterDoneItems, searchFilter, progress }}>
            {children}
        </AppContext.Provider>
    )
}