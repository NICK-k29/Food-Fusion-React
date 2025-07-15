import React from 'react'
import { Box, Typography, Container, colors } from '@mui/material'
import Showcase from '../components/Showcase'

import img1 from '../assets/Images/1.jpg'
import img2 from '../assets/Images/2.jpg'
import img3 from '../assets/Images/3.jpg'
import img4 from '../assets/Images/4.jpg'

const sections = [
  {
    title: 'Why Choose Us?',
    description:
      "Discover the extraordinary at Fooddddie's Kitchen. Our commitment to quality and exceptional service makes us your top choice. Enjoy our Mouth Watering Reciepies...",
    image: img1,
    reverse: false
  },
  {
    title: 'Our Journey',
    description:
      'Our culinary adventure began with a simple idea: to create a space where flavors collide and every bite tells a tale. From sizzling street food to fine dining, we’ve curated a menu that blends tradition and innovation.',
    image: img2,
    reverse: true
  },
  {
    title: 'Ingredients That Sing',
    description:
      'Quality is our mantra. We source the freshest ingredients from trusted suppliers. Whether it’s heirloom tomatoes or fragrant spices, every element has a purpose. We proudly support eco-friendly practices.',
    image: img3,
    reverse: false
  },
  {
    title: 'Ambience',
    description:
      'We invite you to be part of our delicious story. Come explore the symphony of flavors, sip handcrafted cocktails, and enjoy every meal as an adventure — a passport to culture and taste.',
    image: img4,
    reverse: true
  }
]

function About() {
  return (
    <>
     <Showcase title="About Us" sx={{ mt: 0, mb: 0 }} />


      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            py: { xs: 2, md: 4 },
            background: 'radial-gradient(rgba(215,126,126,0.6), rgba(166,224,183,0.3))',
            m: 0,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: section.reverse ? 'row-reverse' : 'row' },
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Box flex={2}>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {section.description}
                </Typography>
              </Box>

              <Box flex={1} display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={section.image}
                  alt={section.title}
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 2,
                    maxHeight:350
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  )
}

export default About
