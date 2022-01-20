/* This Projct has been Entirely Coded by Badal Agarwal*/


import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar';
import './App.css';
import Grid from './components/Grid';
import Footer from './components/Footer';
//all the Icons used
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


// css of Material Theme Used
const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

// CSS that has been Added in Grid Section

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

// Main Function

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Brace is just a Revision Website to Correct the Broken React Concepts.
          </Typography>
        </div>

        <div className={classes.wrapper}>
          <Typography variant="h6" className={classes.littleSpace} color="primary">
            This is just a Beginner's Website that is designed for anyone who is new to React, or has not worked on React from a Long Period of Time. This small Website can just Seep all the Concepts in the Minds of the Developers again. Since this is Correcting the broken React Concepts, that is why it is Named Brace.
          </Typography>
        </div>
        
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<SecurityIcon style={{fill: "#4360a6", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        <Grid icon={<EventNoteIcon style={{fill: "#449a76", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        <Grid icon={<TrendingUpIcon style={{fill: "#d05b2d", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
        <Grid icon={<ImportExportIcon style={{fill: "#5ea780", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        <Grid icon={<ComputerIcon style={{fill: "#e69426", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        <Grid icon={<HttpIcon style={{fill: "#2ea09d", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>  
        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>




      </ThemeProvider>
    </div>
  );
}

export default App;
