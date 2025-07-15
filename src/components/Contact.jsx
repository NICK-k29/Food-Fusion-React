import React, { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import SubjectIcon from '@mui/icons-material/Subject'
import MessageIcon from '@mui/icons-material/Message'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const prevData = JSON.parse(localStorage.getItem('contacts')) || []
    const updatedData = [...prevData, form]

    localStorage.setItem('contacts', JSON.stringify(updatedData))

    alert('SENT! ')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <Box
      sx={{
        background: 'radial-gradient(rgba(215,126,126,0.6), rgba(225,136,136,0.3), rgba(166,224,183,0.3))',
        py: { xs: 6, md: 10 },
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" align="center" mb={6}>
          We're always on the lookout to work with new clients. Please get in touch.
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Paper elevation={4} sx={{ p: 4, width: '100%' }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SubjectIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MessageIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Box>
          </Grid>

          {/* Contact Info */}
         <Grid item xs={12} md={6} ml={50} mt={5}>
  <Box
    sx={{
      ml: 4, 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start', 
      gap: 4
    }}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <LocationOnIcon color="primary" />
      <Box>
        <Typography variant="h6">Office</Typography>
        <Typography variant="body2">
          8014 Edith Blvd NE, Albuquerque, New York, United States
        </Typography>
      </Box>
    </Box>

    <Box display="flex" alignItems="center" gap={2}>
      <PhoneForwardedIcon color="primary" />
      <Box>
        <Typography variant="h6">Phone</Typography>
        <Typography variant="body2">(505) 792-2430</Typography>
      </Box>
    </Box>

    <Box display="flex" alignItems="center" gap={2}>
      <EmailOutlinedIcon color="primary" />
      <Box>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body2">FF@gmail.com</Typography>
      </Box>
    </Box>

    <Box display="flex" alignItems="center" gap={2}>
      <AccessTimeIcon color="primary" />
      <Box>
        <Typography variant="h6">Opening Hours</Typography>
        <Typography variant="body2">Mon - Fri: 9am - 5pm</Typography>
        <Typography variant="body2">Sat - Sun: 9am - 2pm</Typography>
      </Box>
    </Box>
  </Box>
</Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
