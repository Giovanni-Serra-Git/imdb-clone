import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const BoxItem = styled(Box)(({ theme }) => ({
    width: "100px",
    height: "100px",
    backgroundColor: "white",
  [theme.breakpoints.down('lg')]: {
    display: "none"
  },
  [theme.breakpoints.down('sm')]: {
    display: "flex",
  },

}));

export default function MediaQuery() {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        gap: "10px"
        }}>
      <BoxItem>1</BoxItem>
      <BoxItem>2</BoxItem>
    </Box>
  );
}
