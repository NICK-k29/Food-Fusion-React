import React from 'react'
import { Box, Typography, IconButton, Link, Stack } from '@mui/material'
import {
  GitHub,
  Facebook,
  Twitter,
  Google
} from '@mui/icons-material'

function Footer() {
  return (
    <Box
      sx={{
        borderTop: '2px solid #AC4372',
        mt: 0,
        py: 6,
        background: 'radial-gradient(rgba(215,126,126,0.653), rgba(225,136,136,0.336), rgba(166,224,183,0.336))',
        textAlign: 'center'
      }}
    >
      {/* Social Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton
          component="a"
          href="#"
          sx={{
            border: '1px solid #514f4f',
            color: '#514f4f',
            '&:hover': {
              transform: 'scale(1.3)',
              transition: '0.3s ease-in-out'
            }
          }}
        >
          <Google />
        </IconButton>
        <IconButton
          component="a"
          href="#"
          sx={{
            border: '1px solid #514f4f',
            color: '#514f4f',
            '&:hover': {
              transform: 'scale(1.3)',
              transition: '0.3s ease-in-out'
            }
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
          href="#"
          sx={{
            border: '1px solid #514f4f',
            color: '#514f4f',
            '&:hover': {
              transform: 'scale(1.3)',
              transition: '0.3s ease-in-out'
            }
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component="a"
          href="#"
          sx={{
            border: '1px solid #514f4f',
            color: '#514f4f',
            '&:hover': {
              transform: 'scale(1.3)',
              transition: '0.3s ease-in-out'
            }
          }}
        >
          <Facebook />
        </IconButton>
      </Stack>

      {/* Navigation Links */}
      <Stack direction="row" justifyContent="center" spacing={3} sx={{ mb: 2 }}>
        <Link href="#" underline="hover" color="inherit">
          Home
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Services
        </Link>
        <Link href="#" underline="hover" color="inherit">
          About
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Terms
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Privacy Policy
        </Link>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" color="text.secondary">
        © Food Fusion 2024
      </Typography>
    </Box>
  )
}

export default Footer
