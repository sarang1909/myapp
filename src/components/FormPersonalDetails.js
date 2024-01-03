import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { lightBlue } from "@mui/material/colors";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
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
    const { values, handleChange } = this.props;
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
                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    Enter Personal Details
                </Typography>
                <Button color="inherit">LOGOUT</Button>
            </Toolbar>
        </AppBar> <br /> <br /><br /><br />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            id="standard-basic"
            variant="standard"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <Button
            variant="contained"
            color="info"
            style={styles.button}
            onClick={this.continue}
          >
            CONTINUE
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

export default FormPersonalDetails;
