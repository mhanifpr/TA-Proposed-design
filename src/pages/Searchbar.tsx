import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            className='mr-10'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            
            noWrap
            component="div"
            className='mr-10 text-lg font-semibold'
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                Home 
          </Typography>
          <Typography
            
            
            noWrap
            component="div"
            className='mr-10 text-lg font-semibold'
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                Tutorial 
          </Typography>
          <Typography
            
            noWrap
            component="div"
            className='mr-auto text-lg font-semibold'
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                Setting 
          </Typography>
          <img
        className="absolute top-[2px] left-[19px] rounded-[30px] w-[60px] h-[60px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className='mr-10'
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}