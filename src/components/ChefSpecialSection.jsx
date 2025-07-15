import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../assets/Images/14.jpg';
import img2 from '../assets/Images/1.jpg';

const BannerBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(4),
}));

const BannerImage = styled('img')({
  width: '100%',
  maxWidth: '260px',
  borderRadius: '14px',
  objectFit: 'cover',
  boxShadow: '0 6px 16px rgba(0,0,0,0.35)',
});

const BannerHeading = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  boxShadow: '0 3px 12px rgba(0,0,0,0.25)',
  textAlign: 'center',
}));

function ChefSpecialSection() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 3,
        background: 'radial-gradient(rgba(215,126,126,0.2), rgba(166,224,183,0.15))',
      }}
    >
      <Grid container spacing={6} justifyContent="center" alignItems="center" maxWidth="lg" mx="auto">
        {/* Text Section with left slide-in */}
        <Grid item xs={12} md={6}>
          <Slide direction="left" in={true} timeout={600}>
            <Box>
              <Typography variant="overline" color="primary">
                About Us
              </Typography>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                We've been making healthy food last for 10 years
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                In the heart of our digital abode,
                A tapestry of food tales to be told.
                We are the dreamers of taste and hue,
                Crafting a gastronomic journey just for you.
                Spices pirouette, and herbs waltz free,
                A fusion ballet, a feast for thee.
                In our culinary haven, where boundaries blur,
                We concoct the magic that flavors confer.
              </Typography>
            </Box>
          </Slide>
        </Grid>

        {/* Image Section with right slide-in */}
        <Grid item xs={12} md={6}>
          <Slide direction="right" in={true} timeout={600}>
            <BannerBox>
              <BannerImage src={img1} alt="Food Image 1" />
              <BannerImage src={img2} alt="Food Image 2" />
              <BannerHeading>
                <Typography variant="h6" fontStyle="italic" fontWeight="bold">
                  GET THE BEST OR NOTHING.
                </Typography>
              </BannerHeading>
            </BannerBox>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChefSpecialSection;
