import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});

export default function StudentList() {
  return (
    <ThemeProvider theme={theme}>
      <TreeView
        aria-label="students"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Order of Events">
          <TreeItem nodeId="2" label="Hurdles" />
          <TreeItem nodeId="3" label="100m" />
          <TreeItem nodeId="4" label="1600m" />
          <TreeItem nodeId="5" label="4x100m" />
          <TreeItem nodeId="6" label="400m" />
          <TreeItem nodeId="7" label="800m" />
          <TreeItem nodeId="8" label="200m" />
          <TreeItem nodeId="9" label="4x400m" />
        </TreeItem>
        <TreeItem nodeId="100" label="Athletes">
          <TreeItem nodeId="101" label="Adam Van Sickle">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="102" label="Aidan Hicks">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="103" label="Aiden Carroll" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="104" label="Andrew George">
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="Hurdles" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="105" label="AnnaGrace Leese">
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="106" label="Brandon Beaman">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="107" label="Brayden Shaffer">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="108" label="Brooklyn Logan">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x100" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="109" label="Chase Kahlaoui">
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="109" label="Ciarah Funnye">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="Hurdles (?)" />
            <TreeItem nodeId="201" label="4x100m" />
          </TreeItem>
          <TreeItem nodeId="110" label="Dayonna Richardson">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Shot Put" />
          </TreeItem>
          <TreeItem nodeId="111" label="Eli Phillips" >
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="112" label="Eloise Place">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="113" label="Evan Moyer">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x400m" />
          </TreeItem>
          <TreeItem nodeId="114" label="Heston Rickenbach">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="115" label="Jack Lemieux">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="Hurdles (?)" />
          </TreeItem>
          <TreeItem nodeId="116" label="Jameson Witmer">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="117" label="Karmell Wilson">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="High Jump" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="118" label="Kirsten Senft">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="119" label="Kylah Boyd">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="120" label="Lilian Funnye">
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="121" label="Matthew Craw">
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="122" label="Matthew Johns">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="Long Jump" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="Discus" />
          </TreeItem>
          <TreeItem nodeId="123" label="Micheal Carlisle">
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="4x100m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="124" label="Michael Johnson">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="125" label="Natalie Hinkle">
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="126" label="Ryleigh Bourassa">
            <TreeItem nodeId="201" label="800m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="Long Jump" />
          </TreeItem>
          <TreeItem nodeId="127" label="Sara Reed">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="128" label="Sophia McDermott">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="200m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="109" label="Sydney Henry">
            <TreeItem nodeId="201" label="100m" />
            <TreeItem nodeId="201" label="Shot Put" />
            <TreeItem nodeId="201" label="" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
          <TreeItem nodeId="129" label="Tyson Delaney">
            <TreeItem nodeId="201" label="400m" />
            <TreeItem nodeId="201" label="1600m" />
            <TreeItem nodeId="201" label="4x400m" />
            <TreeItem nodeId="201" label="" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </ThemeProvider>
  );
}