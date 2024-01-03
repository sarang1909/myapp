import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { lightBlue } from "@mui/material/colors";
import { List, ListItem, ListItemText } from "@mui/material";


export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
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
                CONFIRM USER DATA
              </Typography>
              <Button color="inherit">LOGOUT</Button>
            </Toolbar>
          </AppBar>
          <br /> <br />
          <br />
          <br />
          <List>
            <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
                <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="info"
            style={styles.button}
            onClick={this.continue}
          >
            CONFIRM & CONTINUE
          </Button>
          <Button
            variant="contained"
            color="inherit"
            style={styles.button}
            onClick={this.back}
          >
            BACK
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
