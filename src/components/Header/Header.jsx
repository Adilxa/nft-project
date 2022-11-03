import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import "./header.module.scss";
import { useSelector } from "react-redux";

export default function ButtonAppBar({ exit }) {
  const text = useSelector((state) => state.login.login)
  return (
    <Box sx={{ flexGrow: 1, height: '15vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, gap: '15px' }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button>
            <Link to="*">About Us</Link>
          </Button>
          <Button>
            <Link to="*">Contact</Link>
          </Button>
          {
            text ? <Button><Link>Authorizated</Link></Button> : <Button>
              <Link to="/login">Login</Link>
            </Button>
          }
          {
            exit && <Button>
              <Link to="/">Exit</Link>
            </Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
