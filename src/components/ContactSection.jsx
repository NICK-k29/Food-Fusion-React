import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Paper
} from '@mui/material';
import contactImage from '../assets/Images/24.jpg'; 

function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        background: '#fcf5f7;',
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={5}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            overflow: 'hidden',
            borderRadius: 3,
          }}
        >
          {/* Left Side - Image */}
          <Box
            sx={{
              flex: 1,
              minHeight: 300,
              backgroundImage: `url(${contactImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Right Side - Form */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 4 },
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              We'd love to hear from you. Fill out the form and we'll get back to you!
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField label="Email" type="email" variant="outlined" fullWidth required />
              <TextField label="Phone" type="tel" variant="outlined" fullWidth />
              <TextField label="Message" multiline rows={4} variant="outlined" fullWidth required />
              <Button variant="contained" color="primary" size="large">
                Send Message
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default ContactSection;
