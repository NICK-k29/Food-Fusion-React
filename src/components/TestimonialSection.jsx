import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid
} from '@mui/material'

import c1 from '../assets/Images/R3.jpg'
import c2 from '../assets/Images/24.jpg'
import c3 from '../assets/Images/R1.jpg'

const testimonials = [
  {
    name: 'Nitesh Vishvakarma',
    feedback: 'Absolutely loved the fusion concept! The spices, the flavors—everything was spot on.',
    avatar: c1
  },
  {
    name: 'Muskan Mathur',
    feedback: 'A delightful experience with  delicious dishes. Highly recommended!.................',
    avatar: c2
  },
  {
    name: 'Radhika Sharma',
    feedback: 'Authentic taste with a modern twist. Food Fusion nailed it! , Must Visit................',
    avatar: c3
  }
]

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        background: 'linear-gradient(to right, #ffebee, #fff3e0)',
        textAlign: 'center'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 6,
          color: 'primary.main',
          mt: 5,
        }}
      >
        What Our Customers Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((t, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              elevation={6}
              sx={{
                p: 3,
                borderRadius: 4,
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={t.avatar}
                  alt={t.name}
                  sx={{
                    width: 70,
                    height: 70,
                    mb: 2,
                    border: '2px solid #f48fb1'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {t.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    px: 2
                  }}
                >
                  “{t.feedback}”
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TestimonialSection
