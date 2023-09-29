import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TagIcon from '@mui/icons-material/Tag';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              1
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', marginTop: '60px' }}>
            <List>
              {['Dashboard', 'Master', 'Billing'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <DashboardIcon />
                      ) : index === 1 ? (
                        <TagIcon />
                      ) : (
                        <ReceiptLongIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            displey: 'flex',
            flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center',
          }}
        >
          <Toolbar
            sx={{
              overflow: 'auto',
              flexGrow: 1,
              p: 3,
              displey: 'flex',
              flexDirection: 'column',
              alignItem: 'center',
              justifyContent: 'center',
            }}
          />
          <Typography
            variant="h4"
            color="textPrimary"
            fontWeight="bold"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80vh',
            }}
          >
            WELCOME TO LOGIC-EDGE
          </Typography>
        </Box>
      </Box>
    </>
  );
}

2

// import Dashboard from '@mui/icons-material/Dashboard';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import BasicCard from './front-end/components/BasicCard';
import ClippedDrawer from './front-end/components/ClippedDrawer';
// import Billing from './front-end/components/Billing';
// import Dashboard from './front-end/components/Dashboard';
// import Master from './front-end/components/Master';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClippedDrawer />
  </React.StrictMode>
);



---------------------------------------------------------------------------
// App.js file 
import React from 'react';
import ClippedDrawer from './front-end/components/ClippedDrawer';
import Dashboard from './front-end/components/Dashboard';
import Billing from './front-end/components/Billing';
import Master from './front-end/components/Master';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <ClippedDrawer />
        <Routes>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Master" component={Master} />
          <Route path="/Billing" component={Billing} />
        </Routes>
      </Router>
    </div>
  );
}


//ClippedDrawer
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TagIcon from '@mui/icons-material/Tag';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              1
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', marginTop: '60px' }}>
            <List>
              <ListItem
                button
                component={'./front-end/components/Dashboard'}
                to="/Dashboard"
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                component={'./front-end/components/Master'}
                to="/Master"
              >
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                <ListItemText primary="Master" />
              </ListItem>
              <ListItem
                button
                component={'./front-end/components/Billing'}
                to="/Billing"
              >
                <ListItemIcon>
                  <ReceiptLongIcon />
                </ListItemIcon>
                <ListItemText primary="Billing" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            displey: 'flex',
            flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center',
          }}
        >
          <Toolbar
            sx={{
              overflow: 'auto',
              flexGrow: 1,
              p: 3,
              displey: 'flex',
              flexDirection: 'column',
              alignItem: 'center',
              justifyContent: 'center',
            }}
          />
          <Typography
            variant="h4"
            color="textPrimary"
            fontWeight="bold"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80vh',
            }}
          >
            WELCOME TO LOGIC-EDGE
          </Typography>
        </Box>
      </Box>
    </>
  );
}

index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
