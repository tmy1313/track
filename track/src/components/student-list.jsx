import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';



const theme = createTheme({
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
    allVariants: {
      color: "#FFFFFF"
    },
  },
});

export default function StudentList() {
  const events = [{'id': 1, 'name': 'Hurdles', 'order': 1},
    {'id': 2, 'name': '100m', 'order': 2},
    {'id': 3, 'name': '1600m', 'order': 3},
    {'id': 4, 'name': '4x100m', 'order': 4},
    {'id': 5, 'name': '400m', 'order': 5},
    {'id': 6, 'name': '800m', 'order': 6},
    {'id': 7, 'name': '200m', 'order': 7},
    {'id': 8, 'name': '4x400m', 'order': 8},
    {'id': 9, 'name': 'Long Jump', 'order': 9},
    {'id': 10, 'name': 'High Jump', 'order': 10},
    {'id': 11, 'name': 'Discus', 'order': 11},
    {'id': 12, 'name': 'Shot Put', 'order': 12},
  ];
  const athletes =[ 
    {'id': 1, 'gender': 'M', 'name': 'Adam Van Sickle', 'events': [2,7,9,8]},
    {'id': 2, 'gender': 'M', 'name': 'Anthony Plever', 'events': [2,1,9]},
    {'id': 3, 'gender': 'M', 'name': 'Braxston Marshall', 'events': [11,12]},
    {'id': 4, 'gender': 'M', 'name': 'Brandon Beaman', 'events': [2,7,4,12]},
    {'id': 5, 'gender': 'M', 'name': 'Brysen Rodrigo', 'events': [2,11]},
    {'id': 6, 'gender': 'M', 'name': 'Camden Crouse', 'events': [11,12]},
    {'id': 7, 'gender': 'M', 'name': 'Chase Montgomery', 'events': [6,3,8]},
    {'id': 8, 'gender': 'M', 'name': 'Declan Mehaffey', 'events': [5,8,9,10]},
    {'id': 9, 'gender': 'M', 'name': 'Derek Bachman', 'events': [6,10,11,12]},
    {'id': 10, 'gender': 'M', 'name': 'Eli Phillips', 'events': [11]},
    {'id': 11, 'gender': 'M', 'name': 'Evan Moyer', 'events': [7,8,9,10]},
    {'id': 12, 'gender': 'M', 'name': 'Gabriel Barraclough', 'events': [2,4,9,10]},
    {'id': 13, 'gender': 'M', 'name': 'Jack Lemieux', 'events': [4,5,6]},
    {'id': 14, 'gender': 'M', 'name': 'Jackson Sosick', 'events': [2,7,9]},
    {'id': 15, 'gender': 'M', 'name': 'Jaxon Bailey', 'events': [9,11,12]},
    {'id': 16, 'gender': 'M', 'name': 'Johnathan High', 'events': [2,4,9,10]},
    {'id': 17, 'gender': 'M', 'name': 'Jason Eshelman', 'events': [2,7,1]},
    {'id': 18, 'gender': 'M', 'name': 'Bo Wilson', 'events': [2,7,4,12]},
    {'id': 19, 'gender': 'M', 'name': 'Logan English', 'events': [2,4,9,10]},
    {'id': 20, 'gender': 'M', 'name': 'Lucas Roseman', 'events': [2,11,12]},
    {'id': 21, 'gender': 'M', 'name': 'Nathan Robison', 'events': [2,6,3]},
    {'id': 22, 'gender': 'M', 'name': 'Nolan Rhine', 'events': [2,7,4]},
    {'id': 23, 'gender': 'M', 'name': 'Sean Porter', 'events': [5,8,1,10]},
    {'id': 24, 'gender': 'M', 'name': 'Trevor Weltor', 'events': [2,7]},
    {'id': 25, 'gender': 'M', 'name': 'Tyson Kirchner', 'events': [7,4,9,10]},
    {'id': 26, 'gender': 'M', 'name': 'Tyson Stouffer', 'events': [2,1,9,10]},
    {'id': 27, 'gender': 'M', 'name': 'Zane Rose', 'events': [1,10,11,12]},
    {'id': 28, 'gender': 'F', 'name': 'Abby Snyder', 'events': [2,4,8]},
    {'id': 29, 'gender': 'F', 'name': 'Anna Keim', 'events': [2,7,4,8]},
    {'id': 30, 'gender': 'F', 'name': 'Callie Shade', 'events': [5,6,3]},
    {'id': 31, 'gender': 'F', 'name': 'Danica Hobart', 'events': [2,7,5,4]},
    {'id': 32, 'gender': 'F', 'name': 'Devyn Veres', 'events': [2,11,12]},
    {'id': 33, 'gender': 'F', 'name': 'Eloise Place', 'events': [6,3,9]},
    {'id': 34, 'gender': 'F', 'name': 'Eloise Place', 'events': [6,3,9]},
    {'id': 35, 'gender': 'F', 'name': 'Kinley Strayer', 'events': [2,4,1,12]},
    {'id': 36, 'gender': 'F', 'name': 'Kylah Boyd', 'events': [6,8,10]},
    {'id': 37, 'gender': 'F', 'name': 'Nora Maurer', 'events': [6,3,8]},
    {'id': 38, 'gender': 'F', 'name': 'Tenley Patterson', 'events': [2,5,12]},
  ];  
  
  const getEvent = (id) => {
    return events.find((event) => event.id === id);
  }

  const getAthletesByEvent = (id) => {
    return athletes.filter((a) => a.events.find((evt) => evt.id === id) || null);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/*
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crossroads Track & Field
            </Typography>
            {/*
            <Button color="inherit">Login</Button>
          */}
          </Toolbar>
        </AppBar>
      </Box>
      <TreeView
        aria-label="students"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Order of Events">
          { events.sort((a, b) => a - b)
            .map((evt) => (
              <TreeItem nodeId={'evt-' + evt.id} label={evt.name} >
                <TreeItem nodeId="" label="Girls" >
                  { getAthletesByEvent(evt.id)
                  .filter((a) => a.gender === 'F')
                  .map((a) => (
                    <TreeItem nodeId={'ath-' + a.id} label={a.name} />))}
                </TreeItem>
                <TreeItem nodeId="" label="Boys" >
                  { getAthletesByEvent(evt.id)
                  .filter((a) => a.gender === 'M')
                  .map((a) => (
                    <TreeItem nodeId={'ath-' + a.id} label={a.name} />))}
                </TreeItem>
              </TreeItem>))}
        </TreeItem>
        <TreeItem nodeId="100" label="Athletes">
          { athletes
            .sort((a, b) => a.gender.localeCompare(b.gender) || a.name.localeCompare(b.name))
            .map(a => (
              <TreeItem nodeId={ a.id } label={ a.name }>
                { a.events.map((id) => (
                  <TreeItem nodeId={ a.id + "_" + getEvent(id).name } label={ getEvent(id).name } />
                ))}
              </TreeItem>))}
        </TreeItem>  
      </TreeView>
    </ThemeProvider>
  );
} 