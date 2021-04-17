import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // modal, sidebar state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook(useContext + AppContext)
export const useGlobalContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider}