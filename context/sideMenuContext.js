import { createContext, useContext, useState } from "react";

const SideMenuContext = createContext();

export function SideMenuProvider({ children }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const setFilterSelected = (item) => {
    setSelectedFilter(item);
  };

  return (
    <SideMenuContext.Provider value={{ selectedFilter, setFilterSelected }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export function useSideMenu() {
  return useContext(SideMenuContext);
}
