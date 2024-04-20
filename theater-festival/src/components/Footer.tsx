// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#EBB240',
        color: '#fff',
        p: 2,
        textAlign: 'center',
        height: '40px',
        //align text to the middle of the box
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body2" sx={{color:"black"}}>© {new Date().getFullYear()} Festival Don Quijote de Paris</Typography>
    </Box>
  );
};

export default Footer;
