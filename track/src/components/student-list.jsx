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
    {'id': 1, 'gender': 'M', 'name': 'Brady Rubertone', 'events': [11,12]},
    {'id': 2, 'gender': 'F', 'name': 'Tenley Patterson', 'events': [2,7,5]},
    {'id': 3, 'gender': 'M', 'name': 'Weston Wachter', 'events': [11,12]},
    {'id': 4, 'gender': 'F', 'name': 'Emma Weiser', 'events': [9,10,11]},
    {'id': 5, 'gender': 'F', 'name': 'Madeline Stanley', 'events': [9,10,11]},
    {'id': 6, 'gender': 'M', 'name': 'Camden Crouse', 'events': [11,12]},
    {'id': 7, 'gender': 'M', 'name': 'Braxston Marshall', 'events': [11,12]},
    {'id': 8, 'gender': 'M', 'name': 'Chase Montgomery', 'events': [5,6,3]},
    {'id': 9, 'gender': 'M', 'name': 'Sammy Garretson', 'events': [11,12]},
    {'id': 10, 'gender': 'M', 'name': 'Luke Rhine', 'events': [11,12,1]},
    {'id': 11, 'gender': 'F', 'name': 'Callie Shade', 'events': [6,3,8]},
    {'id': 12, 'gender': 'F', 'name': 'Danica Hobart', 'events': [2,4,8]},
    {'id': 13, 'gender': 'M', 'name': 'Mason Miller', 'events': [7,5]},
    {'id': 14, 'gender': 'M', 'name': 'Kirby Wilson', 'events': [10,1,4]},
    {'id': 15, 'gender': 'M', 'name': 'Hayden Shearer', 'events': [11,12]},
    {'id': 16, 'gender': 'F', 'name': 'Nora Maurer', 'events': [6,3,4]},
    {'id': 17, 'gender': 'M', 'name': 'Alexander Ramos-Smith', 'events': [9,7,1]},
    {'id': 18, 'gender': 'M', 'name': 'Knox Ritter', 'events': [9,2,1]},
    {'id': 19, 'gender': 'F', 'name': 'Vanessa Nornhold', 'events': [9,2,1]},
    {'id': 20, 'gender': 'M', 'name': 'Colin Huynh', 'events': [9,7,4]},
    {'id': 21, 'gender': 'F', 'name': 'Anna Keim', 'events': [2,7,4]},
    {'id': 22, 'gender': 'F', 'name': 'Charlotte Morrell', 'events': [11,12]},
    {'id': 23, 'gender': 'F', 'name': 'Callie Livingston', 'events': [5,3,8]},
    {'id': 24, 'gender': 'M', 'name': 'Cody Spangenburg', 'events': [11,12,1]},
    {'id': 25, 'gender': 'F', 'name': 'Dalanie McAdam', 'events': [12,11]},
    {'id': 26, 'gender': 'F', 'name': 'Sydney Jama', 'events': [2,7,6]},
    {'id': 27, 'gender': 'F', 'name': 'Adison Hetrick', 'events': [2]},
    {'id': 28, 'gender': 'M', 'name': 'Gabriel Barraclough', 'events': [9,2,4]},
    {'id': 29, 'gender': 'M', 'name': 'Nolan Brenner', 'events': [9,10,7,4]},
    {'id': 30, 'gender': 'F', 'name': 'Willow Fink', 'events': [2,1,4,8]},
    {'id': 31, 'gender': 'M', 'name': 'Sean Cox', 'events': [9,11,12]},
    {'id': 32, 'gender': 'M', 'name': 'Audrey Black', 'events': [2,7]},
    {'id': 33, 'gender': 'F', 'name': 'Janie Scribner', 'events': [2,7]},
    {'id': 34, 'gender': 'M', 'name': 'Sawyer Clouser', 'events': [9,5,6,3,8]},
    {'id': 35, 'gender': 'F', 'name': 'Aubrey Harbold', 'events': [9,10,1]},
    {'id': 36, 'gender': 'M', 'name': 'Tristan Spidle', 'events': [10,4,8]},
    {'id': 37, 'gender': 'F', 'name': 'Gemma Newman', 'events': [2,7,4]},
    {'id': 40, 'gender': 'M', 'name': 'Nathan Robison', 'events': [6,3,8]},
    {'id': 41, 'gender': 'F', 'name': 'Sarah Black', 'events': [9,5,1,4]},
    {'id': 43, 'gender': 'M', 'name': 'Rylyn Russell', 'events': [2,7]},
    {'id': 44, 'gender': 'M', 'name': 'Kellen Cotter', 'events': [9,11,12]},
    {'id': 45, 'gender': 'M', 'name': 'Max Beam', 'events': [5,6,3,8]},
    {'id': 46, 'gender': 'F', 'name': 'Breea Russell', 'events': [2,7]},
    {'id': 47, 'gender': 'M', 'name': 'Charlotte Sierer', 'events': [5]},
    {'id': 55, 'gender': 'M', 'name': 'Nathan Robison', 'events': []},
    {'id': 56, 'gender': 'F', 'name': 'Naevia Zortman', 'events': [12,11,7]},
    {'id': 57, 'gender': 'F', 'name': 'Dhungana Anuja', 'events': [2]},
    {'id': 59, 'gender': 'M', 'name': 'Bode Montgomery', 'events': [2,5,4]},
    {'id': 60, 'gender': 'F', 'name': 'Elaina', 'events': []},
    {'id': 62, 'gender': 'M', 'name': 'Nathan Langan', 'events': [2,5,4]},
    {'id': 63, 'gender': 'F', 'name': 'Kinley Strayer', 'events': [12,1]}
    {'id': 64, 'gender': 'F', 'name': 'Briana Vanko', 'events': [2]}
    {'id': 65, 'gender': 'M', 'name': 'Brayden Murlin', 'events': [10,11,2]},
    {'id': 66, 'gender': 'F', 'name': 'Elaina Book', 'events': [9,1,4]},
    {'id': 67, 'gender': 'F', 'name': 'Lana Lehman', 'events': [9,2,7,4]},
    {'id': 68, 'gender': 'M', 'name': 'Henri Place', 'events': [2,4]},
    {'id': 69, 'gender': 'F', 'name': 'Hadeel Elkouche', 'events': [1,2]},
  ];  
  
  const getEvent = (id) => {
    return events.find((event) => event.id === id);
  }

  const getAthletesByEvent = (id) => {
    return athletes.filter((a) => a.events.includes(id));
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
                <TreeItem nodeId={'evt-' + evt.id + '-G'} label="Girls" >
                  { getAthletesByEvent(evt.id)
                  .filter((a) => a.gender === 'F')
                  .map((a) => (
                    <TreeItem nodeId={'ath-' + a.id + "-evt-" + evt.id} label={a.name} />))}
                </TreeItem>
                <TreeItem nodeId={'evt-' + evt.id + '-B'} label="Boys" >
                  { getAthletesByEvent(evt.id)
                  .filter((a) => a.gender === 'M')
                  .map((a) => (
                    <TreeItem nodeId={'ath-' + a.id + "-evt-" + evt.id} label={a.name} />))}
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