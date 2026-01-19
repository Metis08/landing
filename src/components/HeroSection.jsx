import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import dashboardImg from '../assets/hero-dashboard.png';

const HeroSection = () => {
    return (
        <Box sx={{ px: 3, mt: 6 }}>
            {/* Green Hero Container */}
            <Box
                sx={{
                    height: '80vh',
                    background: 'linear-gradient(180deg, #F9FBF9 0%, #438059 100%)',
                    borderRadius: '32px',
                    border: '1px solid #43805940',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    pt: 8,
                    pb: 10, // 🔑 space for image

                    overflow: 'hidden',
                }}
            >
                {/* Text block */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '42px', md: '56px', lg: '64px' },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            maxWidth: '1100px',
                            mx: 'auto',
                            mb: 2,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <Box component="span" sx={{ color: '#257C42' }}>
                            Technology
                        </Box>{' '}
                        based compliance solutions for businesses
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '22px',
                            color: '#4A4A4A',
                            maxWidth: '700px',
                            mx: 'auto',
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        We are India&apos;s First Platform to use Blockchain Technology for Audit /
                        Balance Confirmations.
                    </Typography>
                </Box>

                {/* Image */}
                <Box
                    component="img"
                    src={dashboardImg}
                    alt="Dashboard Preview"
                    sx={{
                        width: '80%',
                        maxWidth: '1000px',
                        height: 'auto',
                        objectFit: 'cover',

                        transform: 'translateY(-150px)', // Adjusted translation due to smaller size
                    }}
                />
            </Box>

            {/* CTA Buttons */}
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 7 }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        fontFamily: 'Poppins',
                        borderColor: '#438059',
                        color: '#438059',
                        px: 7,
                        py: 2.5,
                        fontSize: '20px',
                        borderRadius: '100px',
                        textTransform: 'none',
                    }}
                >
                    Start my free trial
                </Button>

                <Button
                    variant="contained"
                    disableElevation
                    sx={{
                        fontFamily: 'Poppins',
                        backgroundColor: '#438059',
                        px: 5,
                        py: 1.5,
                        fontSize: '20px',
                        borderRadius: '100px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#366848',
                        },
                    }}
                >
                    Request Demo
                </Button>
            </Stack>
        </Box>
    );
};

export default HeroSection;
