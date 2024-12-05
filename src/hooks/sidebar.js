"use client";
import { useState, useEffect } from 'react';

const useSidebar = () => {
  const [isSidebarPinned, setSidebarPinned] = useState(() => {
    return JSON.parse(localStorage.getItem('isSidebarPinned')) || false;
  });

  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    return JSON.parse(localStorage.getItem('isSidebarOpen')) || false;
  });

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => {
      const newState = !prevState;
      localStorage.setItem('isSidebarOpen', JSON.stringify(newState));
      return newState;
    });
  };

  const toggleSidebarPin = () => {
    setSidebarPinned((prevState) => {
      const newState = !prevState;
      localStorage.setItem('isSidebarPinned', JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
    localStorage.setItem('isSidebarPinned', JSON.stringify(isSidebarPinned));
  }, [isSidebarOpen, isSidebarPinned]);

  return {
    isSidebarOpen,
    isSidebarPinned,
    toggleSidebar,
    toggleSidebarPin,
  };
};

export default useSidebar;
