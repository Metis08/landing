import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const SolutionCard = ({ title, highlight, description, align = 'left' }) => {
    const isLeft = align === 'left';

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '1920px', // Screen wide
                mx: 'auto',
                mb: 6,
                border: '2px solid rgba(0,0,0,0.08)',
                borderRadius: '40px',
                py: { xs: 4, md: 5 },
                px: { xs: 3, md: 6, lg: 8 },
                display: 'flex',
                flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
                alignItems: 'center',
                gap: { xs: 3, md: 6, lg: 8 },
                bgcolor: '#fff',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                '&:hover': {
                    boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                    transform: 'translateY(-8px)',
                }
            }}
        >
            {/* Image Placeholder Box */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '250px', md: '400px' },
                    bgcolor: '#fff',
                    border: '1.5px solid rgba(0,0,0,0.05)',
                    borderRadius: '35px',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02), 0 15px 35px rgba(0,0,0,0.05)',
                }}
            />

            {/* Content Box */}
            <Box sx={{ width: { xs: '100%', md: '45%' }, textAlign: 'left', pl: isLeft ? { md: 4 } : 0, pr: !isLeft ? { md: 4 } : 0 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: { xs: '42px', md: '56px', lg: '64px' },
                        color: '#000',
                        lineHeight: 1.05,
                        mb: 2
                    }}
                >
                    {title} <br />
                    <Box component="span" sx={{ color: '#257C42' }}>
                        {highlight}
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: { xs: '15px', md: '18px', lg: '22px' },
                        color: '#444',
                        lineHeight: 1.5,
                        mb: 4,
                        maxWidth: '700px',
                        fontWeight: 400
                    }}
                >
                    {description}
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#1a5930', // Forest Green matching the image
                        color: '#fff',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '18px',
                        px: 6,
                        py: 2.2,
                        borderRadius: '100px',
                        textTransform: 'none',
                        boxShadow: '0 10px 20px rgba(26, 89, 48, 0.2)',
                        '&:hover': {
                            bgcolor: '#144626',
                            boxShadow: '0 15px 30px rgba(26, 89, 48, 0.3)',
                        }
                    }}
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
};

const SolutionsSection = () => {
    const solutions = [
        {
            title: '15CA & 15CB',
            highlight: 'Automation Solution',
            description: 'Complete & Automatic online solution for error-free Bulk 15CA & 15CB XML generation',
            align: 'left'
        },
        {
            title: 'Digital Confirmation & Reconciliation',
            highlight: 'on BlockChain',
            description: 'Tired off tracking your mail box for, sending follow-ups, documentations, reconciliations. Our tool provides complete solution for these problems.',
            align: 'right'
        },
        {
            title: 'Digital Confirmation & Reconciliation',
            highlight: 'on BlockChain',
            description: 'Tired off tracking your mail box for, sending follow-ups, documentations, reconciliations. Our tool provides complete solution for these problems.',
            align: 'left'
        }
    ];

    return (
        <Box sx={{ width: '100%', py: 14, px: { xs: 3, md: 6, lg: 10 }, bgcolor: '#fff' }}>
            {solutions.map((sol, index) => (
                <SolutionCard
                    key={index}
                    title={sol.title}
                    highlight={sol.highlight}
                    description={sol.description}
                    align={sol.align}
                />
            ))}
        </Box>
    );
};

export default SolutionsSection;
