import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Container,
  Grid
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('signupData'));

    if (
      savedData &&
      savedData.email === form.email &&
      savedData.password === form.password
    ) {
      alert('Login successful!');
      navigate('/');
      // optionally: localStorage.setItem("userLoggedIn", "true")
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to right, #fdf6ff, #f3e5f5)',
        ml: 40,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2} sx={{ mr: 25 }}>
          <Grid item xs={12} sm={8} md={5}>
            <Paper
              elevation={4}
              sx={{
                p: 5,
                borderRadius: 3,
                ml: { xs: 0, md: 6 },
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                mr: 12,
              }}
            >
              <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                Login
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  fullWidth
                  margin="normal"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((s) => !s)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: '#6a1b9a',
                    '&:hover': { backgroundColor: '#4a148c' }
                  }}
                >
                  LOGIN
                </Button>

                {/* Signup link below the login button */}
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    style={{
                      color: '#6a1b9a',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    Sign up here
                  </Link>
                </Typography>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
