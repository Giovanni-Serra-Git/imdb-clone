import { Menu, MenuItem } from "@mui/material"



function MenuList({open, handleClose}) {
    return (
          <Menu
            id="basic-menu"
            open={open}
            anchorEl={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>UpComing Movies</MenuItem>
            <MenuItem onClick={handleClose}>Top Rated Movies</MenuItem>
            <MenuItem onClick={handleClose}>Popular Movies</MenuItem>
          </Menu>
    )
}

export default MenuList
