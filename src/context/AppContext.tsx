import { ReactNode, createContext } from "react";

type AppContextType = {
    addNewItem: (item: string) => void;
}

export const AppContext = createContext<AppContextType>({
    addNewItem: () => {},
})

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const addNewItem = (item: string) => {
        const newItem = { item, status: "pending" };

    const existingItems = JSON.parse(
      window.localStorage.getItem("items") || "[]"
    );
    existingItems.push(newItem);

    window.localStorage.setItem("items", JSON.stringify(existingItems));
    }

    return(
        <AppContext.Provider value={{ addNewItem }}>
            {children}
        </AppContext.Provider>
    )
}