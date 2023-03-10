import React, { createContext, useState } from 'react'
import Header from '../organisms/Header'
import Sidebar from '../organisms/Sidebar';

interface SidebarContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContext>({ isSidebarOpen: false, setIsSidebarOpen: () => false })

const Navigation = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isSidebarOpen: isSidebarOpen, setIsSidebarOpen: setIsSidebarOpen }}>
      <Header />
      {isSidebarOpen && <Sidebar />}
      {children}
    </SidebarContext.Provider>
  )
}

export default Navigation