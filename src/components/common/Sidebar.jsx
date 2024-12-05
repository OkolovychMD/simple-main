import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useSidebar from '../../hooks/sidebar';

const Sidebar = ({ setSteps }) => {
    const { isSidebarOpen, toggleSidebar, isSidebarPinned, toggleSidebarPin } = useSidebar();
    const theme = localStorage.getItem("theme");
    const iconColor = theme === 'dark' ? 'white' : 'black';

    return (
        <Box>
            <IconButton
                onClick={toggleSidebar}
                sx={{ position: 'absolute', top: 20, left: 20 }}
            >
                <MenuIcon sx={{ color: iconColor }} />
            </IconButton>

            <Drawer
                open={isSidebarOpen || isSidebarPinned}
                onClose={toggleSidebar}
                variant={isSidebarPinned ? 'permanent' : 'temporary'}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <List>
                    <ListItem sx={{cursor: "pointer"}} onClick={() => setSteps(0)}>
                        <ListItemText primary="Start Menu" />
                    </ListItem>
                    <ListItem sx={{cursor: "pointer"}} onClick={() => setSteps(3)}>
                        <ListItemText primary="Table Page" />
                    </ListItem>
                    <ListItem sx={{cursor: "pointer"}} onClick={toggleSidebarPin}>
                        <ListItemText primary={isSidebarPinned ? 'Unpin Sidebar' : 'Pin Sidebar'} />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
