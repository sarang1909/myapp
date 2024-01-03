import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { lightBlue } from "@mui/material/colors";


export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM - SEND DATA TO BACKEND API HERE //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const theme = createTheme({
      palette: {
        primary: {
            light: '#36BCBC',
            main: '#36BCBC',
            dark: '#36BCBC',
            contrastText: '#fff',
          },
        secondary: lightBlue,
      },
    });
    
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SUCCESS USER DATA
              </Typography>
              <Button color="inherit">LOGOUT</Button>
            </Toolbar>
          </AppBar>
          <br /> <br />
          <br />
          <br />
            <h1>THANK YOU FOR YOUR SUBMISSION</h1>
            <p>You'll be notified for further instructions</p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;
