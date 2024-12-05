import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ? savedTheme : 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
        color: theme === 'dark' ? '#f0f0f0' : '#333',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme === 'dark' ? '#555' : '#e0e0e0',
        },
        mr: '15px',
      }}
    >
      {theme === 'dark' ? (
        <LightModeIcon
          sx={{
            fontSize: '1.5rem',
            transition: 'transform 0.3s ease',
            transform: 'rotate(360deg)',
          }}
        />
      ) : (
        <DarkModeIcon
          sx={{
            fontSize: '1.5rem',
            transition: 'transform 0.3s ease',
            transform: 'rotate(-360deg)',
          }}
        />
      )}
    </IconButton>
  );
};
