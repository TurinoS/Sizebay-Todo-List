import { ReactNode, createContext, useEffect, useState } from "react";

type TasksListType = {
    item: string,
    status: 'pending' | 'done'
}

type AppContextType = {
    tasksList: TasksListType[];
    addNewItem: (item: string) => void;
    handleSearch: string;
    setHandleSearch: (search: string) => void;
    handleFiltering: string;
    setHandleFiltering: (filter: string) => void;
}

export const AppContext = createContext<AppContextType>({
    tasksList: [],
    addNewItem: () => {},
    handleSearch: '',
    setHandleSearch: () => {},
    handleFiltering: '',
    setHandleFiltering: () => {},
})

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [tasksList , setTasksList] = useState([]);
    const [handleSearch , setHandleSearch] = useState('');
    const [handleFiltering , setHandleFiltering] = useState('');

    useEffect(() => {
        const localStorageItems = window.localStorage.getItem('items')
        const data = JSON.parse(localStorageItems || '[]')
        setTasksList(data);
    }, []);

    const addNewItem = (item: string) => {
        const newItem = { item, status: "pending" };

    const existingItems = JSON.parse(
      window.localStorage.getItem("items") || "[]"
    );
    existingItems.push(newItem);

    window.localStorage.setItem("items", JSON.stringify(existingItems));
    }

    return(
        <AppContext.Provider value={{ tasksList, addNewItem, handleSearch, setHandleSearch, handleFiltering, setHandleFiltering }}>
            {children}
        </AppContext.Provider>
    )
}