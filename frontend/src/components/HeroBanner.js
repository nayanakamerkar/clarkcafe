import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

const BannerContainer = styled(Box)({
    height: '400px',
    backgroundColor: 'red',
    backgroundImage: 'url(YOUR_IMAGE_URL_HERE)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
});

const HeroBanner = () => (
    <BannerContainer>
        <Typography variant="h2" gutterBottom>
            Welcome to Clark Cafe
        </Typography>
        <Typography variant="h6" gutterBottom>
            Get You food ready before you.
        </Typography>
        <Button variant="contained" color="secondary">
            Shop Now
        </Button>
    </BannerContainer>
);

export default HeroBanner;
