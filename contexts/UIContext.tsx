'use client';
import { createContext, useContext, useState, useMemo, useEffect, useLayoutEffect } from "react";

type UIContextState = {
  isSidebarOpen: boolean;
  isMobile: boolean;
  isMobileSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  isSafariBrowser: boolean;
};

const UIContext = createContext<UIContextState>({
  isSidebarOpen: false,
  isMobile: false,
  isMobileSidebarOpen: false,
  toggleSidebar: () => { },
  toggleMobileSidebar: () => { },
  isSafariBrowser: false,
});

export const useUIContext = () => useContext(UIContext);

export const UIContextProvider = ({ children }) => {
  const [state, setState] = useState<UIContextState>({
    isSidebarOpen: false,
    isMobile: false,
    isMobileSidebarOpen: false,
    toggleSidebar: () => { },
    toggleMobileSidebar: () => { },
    isSafariBrowser: false,
  });

  const value = useMemo<UIContextState>(() => {
    const toggleSidebar = () =>
      setState({
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      });

    const toggleMobileSidebar = () =>
      setState({
        ...state,
        isMobileSidebarOpen: !state.isMobileSidebarOpen,
      });

    return {
      ...state,
      toggleSidebar,
      toggleMobileSidebar,
    };
  }, [state]);

  useEffect(() => {
    //prevent scrolling on mobile when sidebar is open
    if (state.isMobileSidebarOpen && state.isMobile) {
      document.body.style.overflowY = "hidden !important";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [state.isMobileSidebarOpen]);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    setState({
      ...state,
      isSafariBrowser: isSafari,
    });

    const updateSize = () => {
      const isMobileSize = window.innerWidth < 768;

      if (!isMobileSize) {
        document.body.style.overflowY = "auto";
      }

      setState({
        ...state,
        isSidebarOpen: window.innerWidth >= 1280,
        isMobile: isMobileSize,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
