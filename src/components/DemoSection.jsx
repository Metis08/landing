import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlineIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ForumIcon from '@mui/icons-material/Forum';

const DemoSection = () => {
    return (
        <Box sx={{ width: '100%', pb: 12, px: { xs: 2, md: 4, lg: 8 }, bgcolor: '#fff' }}>
            {/* Outer Gradient Container */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1920px',
                    mx: 'auto',
                    borderRadius: '40px',
                    p: { xs: 3, sm: 6, md: 8, lg: 10 },
                    background: 'linear-gradient(to bottom, #F9FBF9 0%, #E8F5E9 100%)',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: { xs: '32px', md: '56px', lg: '64px' },
                        color: '#000',
                        mb: 6,
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Request a Demo
                </Typography>

                {/* Form Card */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '750px',
                        bgcolor: '#fff',
                        borderRadius: '32px',
                        boxShadow: '0 30px 90px rgba(37, 124, 66, 0.08)',
                        p: { xs: 3, sm: 4, md: 7 },
                        border: '1px solid rgba(37, 124, 66, 0.12)',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)'
                        }
                    }}
                >
                    {/* Form Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 }, mb: { xs: 3, md: 5 } }}>
                        <Box sx={{
                            p: { xs: 1, md: 1.5 },
                            borderRadius: '12px',
                            bgcolor: 'rgba(37, 124, 66, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <ForumIcon sx={{ color: '#257C42', fontSize: { xs: '24px', md: '32px' } }} />
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#1a5930',
                                fontWeight: 600,
                                fontFamily: 'Poppins',
                                fontSize: { xs: '22px', md: '28px' }
                            }}
                        >
                            Request a Demo
                        </Typography>
                    </Box>

                    {/* Form Fields */}
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                        <TextField
                            fullWidth
                            label="Name"
                            placeholder="Your Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineIcon sx={{ color: '#257C42', opacity: 0.7 }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    '&:hover fieldset': { borderColor: '#257C42' },
                                    '&.Mui-focused fieldset': { borderColor: '#257C42' }
                                },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#257C42' }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Email"
                            placeholder="Your Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlineIcon sx={{ color: '#257C42', opacity: 0.7 }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    '&:hover fieldset': { borderColor: '#257C42' },
                                    '&.Mui-focused fieldset': { borderColor: '#257C42' }
                                },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#257C42' }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Phone"
                            placeholder="Your Phone Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon sx={{ color: '#257C42', opacity: 0.7, fontSize: '20px' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    '&:hover fieldset': { borderColor: '#257C42' },
                                    '&.Mui-focused fieldset': { borderColor: '#257C42' }
                                },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#257C42' }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Company"
                            placeholder="Your Company Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessIcon sx={{ color: '#257C42', opacity: 0.7 }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    '&:hover fieldset': { borderColor: '#257C42' },
                                    '&.Mui-focused fieldset': { borderColor: '#257C42' }
                                },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#257C42' }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Message"
                            placeholder="How can we help?"
                            multiline
                            rows={3}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                                        <ChatBubbleOutlineIcon sx={{ color: '#257C42', opacity: 0.7 }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    '&:hover fieldset': { borderColor: '#257C42' },
                                    '&.Mui-focused fieldset': { borderColor: '#257C42' }
                                },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#257C42' }
                            }}
                        />

                        {/* reCAPTCHA Placeholder */}
                        <Box
                            sx={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                p: { xs: 1.5, md: 2 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                bgcolor: '#fcfdfc',
                                width: '100%',
                                maxWidth: { xs: '100%', sm: '320px' },
                                alignSelf: 'center',
                                mt: 2,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box sx={{ width: '28px', height: '28px', border: '2px solid #257C42', borderRadius: '4px', bgcolor: '#fff', flexShrink: 0 }} />
                                <Typography sx={{ fontSize: { xs: '13px', md: '15px' }, color: '#333', fontWeight: 400 }}>I'm not a robot</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ width: '32px', height: '32px', bgcolor: '#eee', borderRadius: '50%', mb: 0.5 }} />
                                <Typography sx={{ fontSize: '9px', color: '#999' }}>reCAPTCHA</Typography>
                                <Typography sx={{ fontSize: '7px', color: '#999' }}>Privacy - Terms</Typography>
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 4,
                                py: 2.2,
                                bgcolor: '#1a5930',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '18px',
                                borderRadius: '100px',
                                textTransform: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(26, 89, 48, 0.2)',
                                '&:hover': {
                                    bgcolor: '#144626',
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 15px 30px rgba(26, 89, 48, 0.3)',
                                }
                            }}
                        >
                            Submit Request
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DemoSection;
