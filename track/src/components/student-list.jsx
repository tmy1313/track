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
          <TreeItem nodeId="2" label="Hurdles" >
            <TreeItem nodeId="3000" label="Girls">
              <TreeItem nodeId="201" label="Hurdles" />
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="102" label="Anthony Plever"/>
              <TreeItem nodeId="102" label="Jason Eshelman"/>
              <TreeItem nodeId="121" label="Sean Porter"/>
              <TreeItem nodeId="124" label="Tyson Stouffer"/>
              <TreeItem nodeId="125" label="Zane Rose"></TreeItem>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="3" label="100m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="126" label="Abby Snyder"/>
              <TreeItem nodeId="128" label="Anna Keim"/>
              <TreeItem nodeId="130" label="Danica Hobart"/>
              <TreeItem nodeId="129" label="Devyn Veres"/>
              <TreeItem nodeId="132" label="Kinley Strayer"/>
              <TreeItem nodeId="135" label="Tenley Patterson"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="101" label="Adam Van Sickle"/>
              <TreeItem nodeId="102" label="Anthony Plever"/>
              <TreeItem nodeId="103" label="Brandon Beaman"/>
              <TreeItem nodeId="105" label="Brysen Rodrigo"/>
              <TreeItem nodeId="111" label="Gabriel Barraclough"/>
              <TreeItem nodeId="113" label="Johnathan High"/>
              <TreeItem nodeId="114" label="Jason Eshelman"/>
              <TreeItem nodeId="115" label="Bo Wilson"/>
              <TreeItem nodeId="116" label="Logan English"/>
              <TreeItem nodeId="117" label="Lucas Roseman"/>
              <TreeItem nodeId="118" label="Nathan Robison"/>
              <TreeItem nodeId="119" label="Nolan Rhine"/>
              <TreeItem nodeId="122" label="Trevor Weltor"/>
              <TreeItem nodeId="124" label="Tyson Stouffer"/>
              <TreeItem nodeId="111" label="Jackson Sosick" />
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="4" label="1600m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="134" label="Nora Maurer"/>
              <TreeItem nodeId="131" label="Eloise Place"/>
              <TreeItem nodeId="131" label="Callie Shade"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="107" label="Chase Montgomery"/>
              <TreeItem nodeId="118" label="Nathan Robison"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="5" label="4x100m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="126" label="Abby Snyder"/>
              <TreeItem nodeId="128" label="Anna Keim"/>
              <TreeItem nodeId="130" label="Danica Hobart"/>
              <TreeItem nodeId="132" label="Kinley Strayer"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="103" label="Brandon Beaman"/>
              <TreeItem nodeId="123" label="Tyson Kirchner"/>
              <TreeItem nodeId="111" label="Gabriel Barraclough" />
              <TreeItem nodeId="111" label="Jack Lemieux" />
              <TreeItem nodeId="113" label="Johnathan High"/>
              <TreeItem nodeId="115" label="Bo Wilson"/>
              <TreeItem nodeId="116" label="Logan English"/>
              <TreeItem nodeId="119" label="Nolan Rhine"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="6" label="400m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="130" label="Danica Hobart"/>
              <TreeItem nodeId="135" label="Tenley Patterson"/>
              <TreeItem nodeId="131" label="Callie Shade"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="108" label="Declan Mehaffey"/>
              <TreeItem nodeId="111" label="Jack Lemieux"/>
              <TreeItem nodeId="121" label="Sean Porter"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="7" label="800m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="131" label="Eloise Place"/>
              <TreeItem nodeId="133" label="Kylah Boyd"/>
              <TreeItem nodeId="131" label="Callie Shade"/>
              <TreeItem nodeId="134" label="Nora Maurer"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="107" label="Chase Montgomery"/>
              <TreeItem nodeId="109" label="Derek Bachman"/>
              <TreeItem nodeId="111" label="Jack Lemieux" />
              <TreeItem nodeId="118" label="Nathan Robison"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="8" label="200m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="128" label="Anna Keim"/>
              <TreeItem nodeId="130" label="Danica Hobart"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="101" label="Adam Van Sickle"/>
              <TreeItem nodeId="103" label="Brandon Beaman" />
              <TreeItem nodeId="110" label="Evan Moyer"/>
              <TreeItem nodeId="114" label="Jason Eshelman"/>
              <TreeItem nodeId="115" label="Bo Wilson"/>
              <TreeItem nodeId="119" label="Nolan Rhine"/>
              <TreeItem nodeId="122" label="Trevor Weltor"/>
              <TreeItem nodeId="123" label="Tyson Kirchner"/>
              <TreeItem nodeId="111" label="Jackson Sosick" />
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="9" label="4x400m" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="126" label="Abby Snyder"/>
              <TreeItem nodeId="128" label="Anna Keim"/>
              <TreeItem nodeId="133" label="Kylah Boyd"/>
              <TreeItem nodeId="134" label="Nora Maurer"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="107" label="Chase Montgomery"/>
              <TreeItem nodeId="108" label="Declan Mehaffey"/>
              <TreeItem nodeId="110" label="Evan Moyer"/>
              <TreeItem nodeId="121" label="Sean Porter"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="10" label="Long Jump" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="131" label="Eloise Place"/>
              <TreeItem nodeId="133" label="Kylah Boyd"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="101" label="Adam Van Sickle"/>
              <TreeItem nodeId="102" label="Anthony Plever"/>
              <TreeItem nodeId="108" label="Declan Mehaffey"/>
              <TreeItem nodeId="110" label="Evan Moyer"/>
              <TreeItem nodeId="111" label="Gabriel Barraclough"/>
              <TreeItem nodeId="112" label="Jaxon Bailey"/>
              <TreeItem nodeId="113" label="Johnathan High"/>
              <TreeItem nodeId="116" label="Logan English"/>
              <TreeItem nodeId="124" label="Tyson Stouffer"/>
              <TreeItem nodeId="125" label="Zane Rose"/>
              <TreeItem nodeId="123" label="Tyson Kirchner"/>
              <TreeItem nodeId="111" label="Jackson Sosick"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="11" label="High Jump" >
            <TreeItem nodeId="3000" label="Girls" >

            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="108" label="Declan Mehaffey"/>
              <TreeItem nodeId="109" label="Derek Bachman"/>
              <TreeItem nodeId="110" label="Evan Moyer"/>
              <TreeItem nodeId="111" label="Gabriel Barraclough" />
              <TreeItem nodeId="113" label="Johnathan High"/>
              <TreeItem nodeId="116" label="Logan English"/>
              <TreeItem nodeId="121" label="Sean Porter"/>
              <TreeItem nodeId="124" label="Tyson Stouffer"/>
              <TreeItem nodeId="125" label="Zane Rose"/>
              <TreeItem nodeId="123" label="Tyson Kirchner"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="12" label="Shot Put" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="129" label="Devyn Veres"/>
              <TreeItem nodeId="132" label="Kinley Strayer"/>
              <TreeItem nodeId="135" label="Tenley Patterson"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="103" label="Braxston Marshall" />
              <TreeItem nodeId="103" label="Brandon Beaman" />
              <TreeItem nodeId="106" label="Camden Crouse"/>
              <TreeItem nodeId="109" label="Derek Bachman"/>
              <TreeItem nodeId="112" label="Jaxon Bailey"/>
              <TreeItem nodeId="115" label="Bo Wilson"/>
              <TreeItem nodeId="117" label="Lucas Roseman"/>
              <TreeItem nodeId="125" label="Zane Rose"/>              
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="13" label="Discus" >
            <TreeItem nodeId="3000" label="Girls" >
              <TreeItem nodeId="129" label="Devyn Veres"/>
            </TreeItem>
            <TreeItem nodeId="4000" label="Boys" >
              <TreeItem nodeId="103" label="Braxston Marshall" />
              <TreeItem nodeId="105" label="Brysen Rodrigo"/>
              <TreeItem nodeId="106" label="Camden Crouse"/>
              <TreeItem nodeId="109" label="Derek Bachman"/>
              <TreeItem nodeId="109" label="Eli Phillips"/>  
              <TreeItem nodeId="103" label="Brandon Beaman" />
              <TreeItem nodeId="112" label="Jaxon Bailey"/>
              <TreeItem nodeId="117" label="Lucas Roseman"/>
              <TreeItem nodeId="125" label="Zane Rose"/>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="100" label="Athletes">
          <TreeItem nodeId="101" label="Adam Van Sickle">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="102" label="Anthony Plever">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="103" label="Braxston Marshall" >
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="103" label="Brandon Beaman" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="105" label="Brysen Rodrigo">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="106" label="Camden Crouse">
            <TreeItem nodeId="201" label="Discus" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="107" label="Chase Montgomery">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="108" label="Declan Mehaffey">
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="109" label="Derek Bachman">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="High Jump" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="103" label="Brandon Beaman" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="110" label="Eli Phillips">
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="110" label="Evan Moyer">
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="111" label="Gabriel Barraclough" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="111" label="Jack Lemieux" >
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="800m" />
          </TreeItem>
          <TreeItem nodeId="111" label="Jackson Sosick" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="112" label="Jaxon Bailey">
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="113" label="Johnathan High">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="114" label="Jason Eshelman">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="115" label="Bo Wilson">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="116" label="Logan English">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="117" label="Lucas Roseman">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="118" label="Nathan Robison">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
          </TreeItem>
          <TreeItem nodeId="119" label="Nolan Rhine">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
          </TreeItem>
          <TreeItem nodeId="121" label="Sean Porter">
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="122" label="Trevor Weltor">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
          </TreeItem>
          <TreeItem nodeId="123" label="Tyson Kirchner">
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="High Jump" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="124" label="Tyson Stouffer">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="High Jump" />
          </TreeItem>
          <TreeItem nodeId="125" label="Zane Rose">
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="126" label="Abby Snyder">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="127" label="Anna Grace Leese">
          
          </TreeItem>
          <TreeItem nodeId="128" label="Anna Keim">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="128" label="Callie Shade">
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
          </TreeItem>
          <TreeItem nodeId="130" label="Danica Hobart">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x100m" />
          </TreeItem>
          <TreeItem nodeId="129" label="Devyn Veres">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discuss" />
          </TreeItem>
          <TreeItem nodeId="131" label="Eloise Place">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="Long Jump ?" />
          </TreeItem>
          <TreeItem nodeId="132" label="Kinley Strayer">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="133" label="Kylah Boyd">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="134" label="Nora Maurer">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="135" label="Tenley Patterson">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </ThemeProvider>
  );
}