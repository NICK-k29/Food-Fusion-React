import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import homeBg from '../assets/Images/1.jpg'
import MenuSection from '../components/MenuSection'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'
import ChefSpecialSection from '../components/ChefSpecialSection' // 👨‍🍳 REPLACES testimonial
import ImageScroller from '../components/ImageScroller'
import { Link } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '80vh',
  backgroundImage: `linear-gradient(rgba(215,126,126,0.6), rgba(166,224,183,0.3)), url(${homeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  padding: theme.spacing(4),
  textShadow: '0 0 10px #000'
}))

function Home() {
  return (
    <>
      <HeroSection>
        <Typography variant="h2" fontWeight="bold">
          Welcome to Food Fusion
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
          A Culinary Experience That Blends Culture & Taste
        </Typography>
       <Button
  component={Link}
  to="/menu"
  variant="contained"
  color="secondary"
  size="large"
>
  Explore Menu
</Button>
      </HeroSection>

      
      <ChefSpecialSection /> {/* 👨‍🍳 REPLACES testimonial */}
      <ImageScroller/>
      <ContactSection />
    </>
  )
}
export default Home