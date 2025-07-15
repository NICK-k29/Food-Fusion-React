// src/components/Showcase.jsx
import React from 'react'
import { Box, Typography } from '@mui/material'

const Showcase = () => {
  return (
    <Box
      id="showcase"
      sx={{
        height: '50vh',
        background: `radial-gradient(
          rgba(215, 126, 126, 0.653),
          rgba(225, 136, 136, 0.336),
          rgba(166, 224, 183, 0.336)
        ), url('/Images/27.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f3f6f7',
        fontSize: { xs: '1.5rem', sm: '2rem' },
        textAlign: 'center',
        textShadow: `
          0 0 5px #0f0f0f,
          0 0 10px #080808,
          0 0 20px #f9f4f3,
          0 0 30px #f8f3f2,
          0 0 40px #dc9a9a
        `
      }}
    >
      <Typography variant="h3" sx={{ textTransform: 'uppercase', mt: 8 }}>
        About Us
      </Typography>
    </Box>
  )
}

export default Showcase
