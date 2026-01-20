import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import dashboardImg from '../assets/hero-dashboard.png';

const HeroSection = () => {
    return (
        <Box sx={{ px: { xs: 2, sm: 4 }, mt: { xs: 2, md: 4 } }}>
            {/* Green Hero Container */}
            <Box
                sx={{
                    minHeight: { xs: 'auto', md: '65vh' },
                    background: 'linear-gradient(180deg, #F9FBF9 0%, #438059 100%)',
                    borderRadius: { xs: '24px', md: '32px' },
                    border: '1px solid #43805940',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    pt: { xs: 4, sm: 5, md: 5 },
                    pb: { xs: 3, md: 0 },

                    overflow: 'hidden',
                }}
            >
                {/* Text block */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '32px', sm: '42px', md: '50px', lg: '64px' },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            maxWidth: '1100px',
                            mx: 'auto',
                            mb: 1.5,
                            px: 2,
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
                            fontSize: { xs: '15px', sm: '18px', md: '22px' },
                            color: '#4A4A4A',
                            maxWidth: '700px',
                            mx: 'auto',
                            px: 3,
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
                        width: { xs: '95%', sm: '90%', md: '82%' },
                        maxWidth: '1000px',
                        height: 'auto',
                        objectFit: 'contain',

                        mt: { xs: 3, sm: 4, md: '-14vh', lg: '-15vh' },
                        mb: { xs: -2, md: -4 },
                    }}
                />
            </Box>

            {/* CTA Buttons */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: { xs: 2, md: 1.5 } }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        fontFamily: 'Poppins',
                        borderColor: '#438059',
                        color: '#438059',
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '16px', md: '18px', lg: '20px' },
                        borderRadius: '100px',
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' },
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
                        px: { xs: 4, md: 5 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '16px', md: '18px', lg: '20px' },
                        borderRadius: '100px',
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' },
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
