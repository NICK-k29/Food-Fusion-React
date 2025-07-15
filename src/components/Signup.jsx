import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  Container
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (simulate signup)
    localStorage.setItem('signupData', JSON.stringify(form));
    alert('Signup successful!');
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // background: 'linear-gradient(#fff0f5, #f3e5f5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
       ml: 22,
       mt: 4,
      }}
    >
      <Container maxWidth="md" sx={{ mr: 15 }}>
        <Grid container justifyContent="center" sx={{ mr: 15 }}>
          <Grid item xs={12} sm={10} md={6} >
            <Paper elevation={4} sx={{ p: 5, borderRadius: 3}} >
              <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                Sign Up
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  value={form.password}
                  onChange={handleChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ mt: 3, backgroundColor: '#6a1b9a', py: 1.3 }}
                >
                  Sign Up
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Signup;
