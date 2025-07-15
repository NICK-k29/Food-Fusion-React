import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/Images/food fusion logo.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const goBack = () => window.history.back();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('signupData'));
    if (userData) {
      setIsLoggedIn(true);
      setUserName(userData.name);
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('signupData');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Menu', path: '/menu' },
    { text: 'Contact', path: '/contact' },
    { text: 'Testimonial', path: '/testimonialSection' },
    { text: 'Cart', path: '/cart' }
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: '#fff0f5', color: '#4a148c', boxShadow: 3 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo and Back */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={goBack} edge="start" color="inherit">
            <ArrowBackIcon />
          </IconButton>

          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              gap: 1
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: 2
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Food Fusion
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link) => (
            <Button key={link.text} component={Link} to={link.path} color="inherit">
              {link.text}
            </Button>
          ))}
        </Box>

        {/* Right Side - Login/Logout */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              <Typography sx={{ mr: 1 }}>Welcome, {userName}</Typography>
              <Button
                onClick={handleLogout}
                variant="outlined"
                sx={{ borderColor: '#4a148c', color: '#4a148c' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{ borderColor: '#4a148c', color: '#4a148c' }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{ backgroundColor: '#4a148c', color: '#fff' }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>

        {/* Hamburger Icon (mobile) */}
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ color: '#4a148c' }} />
        </IconButton>

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 250 }}>
            {isLoggedIn && (
              <ListItem>
                <ListItemText primary={`Welcome, ${userName}`} />
              </ListItem>
            )}
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.text}
                component={Link}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
            {isLoggedIn ? (
              <ListItem button onClick={() => { handleLogout(); setOpen(false); }}>
                <ListItemText primary="Logout" />
              </ListItem>
            ) : (
              <>
                <ListItem button component={Link} to="/login" onClick={() => setOpen(false)}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/signup" onClick={() => setOpen(false)}>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </>
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
