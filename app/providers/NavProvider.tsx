'use client';

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type NavContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const NavContext = createContext<NavContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

export const useNavContext = () => useContext(NavContext);

function NavProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavProvider;
