/* eslint-disable no-unused-vars */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box,Typography, styled } from '@mui/material';
import { LOGO_IMDB } from '../costants/costants';
import InputBase from '@mui/material/InputBase';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicMenu from './menu';


const ToolbarStyled = styled(Toolbar)`
    background: #000;
    justify-content: space-between;
    padding: 0 1em;
     & > div {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
     }
`

// CHECK THIS OUT LATER - UNDERSTAND WHAT IS GOING ON HERE

const Logo = styled("img")({
    width: 64,
    cursor: "pointer"
})

const InputSearch = styled(InputBase)`
    background-color: #fff;
    color: #000;
    width: 60%;
    border-radius: 5px;
    padding: 0 10px;
    height: 32px;
`

const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: "none"
    },    
  }));

function Header() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(state => !state);
      };
      const handleClose = () => {
        setOpen(state => !state);
      };
    return (
    
        <AppBar position="fixed">
          <ToolbarStyled>
            <Link to="/">
                <Logo src={LOGO_IMDB} />
            </Link>
            <BasicMenu/>
            {/* <Box onClick={handleOpen}>
                <Menu />
                <Typography>Menu</Typography>
            </Box> */}
            {/* <MenuList open={open} handleClose={handleClose} /> */}
            <InputSearch/>
            <StyledTypography>IMDb Pro</StyledTypography>
            <Box>
                <BookmarkIcon sx={{
                    display: {md: "none", sm: "none", xs: "none"}
                }}/>
                <StyledTypography>WatchList</StyledTypography>
            </Box>
            <StyledTypography>Sign In</StyledTypography>
            {/* <Box>
                <Typography>En</Typography>
                <ExpandMore>
                    <Typography>Italian</Typography>
                    <Typography>Spanish</Typography>
                    <Typography>French</Typography>
                </ExpandMore>
            </Box> */}
          </ToolbarStyled>
        </AppBar>
    );
}

export default Header
