/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, MenuItem, ThemeProvider, createTheme, styled } from '@mui/material';




  // width: "50px",
  // height: "50px",
  // backgroundColor: "white",
  // display: "none",
  // [theme.breakpoints.down('sm')]: {
  //   display: "block"
  // },    

  const theme = createTheme({
    components: {
      // Name of the component
      MuiBox: {
        defaultProps: {
          // The props to change the default for.
          display: "none",
        },
      },
    },
  });
  



export default function BasicMenu({classes}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
          <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          }
        }}
      >
        <MenuIcon sx={{color: "#fff"}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>IMDB Pro</MenuItem>
        <MenuItem onClick={handleClose}>WatchList</MenuItem>
        <MenuItem onClick={handleClose}>Sign in</MenuItem>
      </Menu>
    </Box>
    </ThemeProvider>
  );
}
