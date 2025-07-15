import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import img5 from '../assets/Images/5.jpg';
import img6 from '../assets/Images/6.jpg';
import img7 from '../assets/Images/7.jpg';
import img8 from '../assets/Images/8.jpg';
import img9 from '../assets/Images/9.jpg';
import img10 from '../assets/Images/10.jpg';
import img11 from '../assets/Images/11.jpg';
import img12 from '../assets/Images/12.jpg';
import img13 from '../assets/Images/13.jpg';
import img14 from '../assets/Images/14.jpg';
import img15 from '../assets/Images/15.jpg';
import img16 from '../assets/Images/16.jpg';
import img17 from '../assets/Images/17.jpg';



const images = [
  img1, img2,img3, img4, img5, img6, img7, img8,img9, img10,
  img11, img12, img13, img14, img15, img16,
];

const ImageScroller = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        backgroundColor: '#fefefe',
        py: 2
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          animation: 'scroll 40s linear infinite',
          '@keyframes scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
          }
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`image-${idx}`}
            sx={{
              width: 250,
              height: 180,
              objectFit: 'cover',
              borderRadius: 2,
              mx: 1,
              boxShadow: 2
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageScroller;

