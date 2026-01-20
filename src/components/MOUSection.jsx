import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import HandshakeIcon from '@mui/icons-material/Handshake';

const MOUSection = () => {
    const points = [
        'Bulk 15CA/CB XML Generator',
        'Digital Balance Confirmations',
        'MCA Struck-Off Company Search'
    ];

    return (
        <Box sx={{ width: '100%', pb: 16, px: { xs: 2, md: 4, lg: 8 }, bgcolor: '#fff' }}>
            {/* MOU Advantage Card */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1920px',
                    mx: 'auto',
                    mb: { xs: 8, md: 16 },
                    borderRadius: '48px',
                    p: { xs: 5, md: 8, lg: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(37, 124, 66, 0.15)',
                    background: 'linear-gradient(135deg, #F9FBF9 0%, #E8F5E9 100%)',
                    boxShadow: '0 20px 60px rgba(37, 124, 66, 0.05)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(37, 124, 66, 0.05) 0%, transparent 70%)',
                        zIndex: 0
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-20%',
                        left: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(26, 89, 48, 0.03) 0%, transparent 70%)',
                        zIndex: 0
                    }
                }}
            >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: { xs: '32px', md: '56px', lg: '64px' },
                            color: '#000',
                            mb: 3,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1
                        }}
                    >
                        MOU Advantage <br />
                        <Box component="span" sx={{ color: '#257C42' }}>for ICAI Members</Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '18px', md: '22px' },
                            color: '#444',
                            mb: 6,
                            maxWidth: '900px',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}
                    >
                        As part of our collaboration with the Institute of Chartered Accountants of India, WrapTax offers FREE Trials and Special Pricing on our premium tools:
                    </Typography>

                    <Box sx={{ mb: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                        {points.map((point, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                <Box sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    bgcolor: 'rgba(37, 124, 66, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircleIcon sx={{ color: '#257C42', fontSize: '20px' }} />
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        fontSize: { xs: '18px', md: '20px' },
                                        color: '#333'
                                    }}
                                >
                                    {point}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '14px', md: '16px' },
                            color: '#666',
                            fontWeight: 400,
                            opacity: 0.8
                        }}
                    >
                        ● No hidden fees. Verified by ICAI. ● Offer valid for a limited time.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            position: { xs: 'relative', md: 'absolute' },
                            bottom: { md: '0px' },
                            right: { md: '0px' },
                            mt: { xs: 4, md: 0 },
                            bgcolor: '#1a5930',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: { xs: '18px', md: '20px' },
                            px: { xs: 5, md: 7 },
                            py: { xs: 1.8, md: 2.5 },
                            borderRadius: '100px',
                            textTransform: 'none',
                            width: { xs: '100%', md: 'auto' },
                            boxShadow: '0 10px 30px rgba(26, 89, 48, 0.3)',
                            '&:hover': {
                                bgcolor: '#144626',
                                transform: 'scale(1.05)',
                                boxShadow: '0 15px 40px rgba(26, 89, 48, 0.4)',
                            },
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        Register Now
                    </Button>
                </Box>
            </Box>

            {/* Choose Privacy Section */}
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: { xs: '32px', md: '56px', lg: '64px' },
                        color: '#000',
                        mb: 8,
                        letterSpacing: '-0.04em'
                    }}
                >
                    Choose Privacy <Box component="span" sx={{ color: '#257C42' }}>Choose Us</Box>
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 2.5, md: 6 }
                    }}
                >
                    {/* ISO Badge Card */}
                    <Box
                        sx={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '32px',
                            px: 5,
                            py: 3,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            transition: 'all 0.4s ease',
                            cursor: 'default',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                                borderColor: '#257C42',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                            }
                        }}
                    >
                        <SecurityIcon sx={{ color: '#257C42', fontSize: '40px' }} />
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#333', letterSpacing: '0.05em' }}>ISO 9001</Typography>
                            <Typography sx={{ fontSize: '11px', color: '#666', fontWeight: 400 }}>Quality Management</Typography>
                        </Box>
                    </Box>

                    {/* AWS Badge Card */}
                    <Box
                        sx={{
                            width: '100px',
                            height: '100px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s ease',
                            cursor: 'default',
                            '&:hover': {
                                transform: 'scale(1.1) rotate(5deg)',
                                borderColor: '#257C42',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                            }
                        }}
                    >
                        <CloudQueueIcon sx={{ color: '#257C42', fontSize: '32px', mb: 0.5 }} />
                        <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#333' }}>aws</Typography>
                    </Box>

                    {/* ICAI Partner Card */}
                    <Box
                        sx={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '32px',
                            px: 5,
                            py: 3,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            transition: 'all 0.4s ease',
                            cursor: 'default',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                                borderColor: '#257C42',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                            }
                        }}
                    >
                        <HandshakeIcon sx={{ color: '#257C42', fontSize: '40px' }} />
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#333', letterSpacing: '0.05em' }}>PARTNERED</Typography>
                            <Typography sx={{ fontSize: '11px', color: '#666', fontWeight: 400 }}>WITH ICAI</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MOUSection;
