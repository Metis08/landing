import React from 'react';
import { Box, Typography, Rating, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import dashboard1 from '../assets/hero-dashboard.png';
import dashboard2 from '../assets/dashboard-2.png';
import dashboard3 from '../assets/dashboard-3.png';

const TrustedSection = () => {
    const dashboardImages = [
        dashboard1,
        dashboard2,
        dashboard3,
        dashboard1,
        dashboard2,
    ];

    const testimonials = [
        {
            text: "Tired off tracking your mail box for, sending follow-ups, documentations, reconciliations. Our tool provides complete solution for these problems.",
            author: "CA Vijay Sharma",
            rating: 4,
        },
        {
            text: "This platform has revolutionized how we handle compliance. The blockchain audit trail is a game changer for our clients and our peace of mind.",
            author: "Ananya Iyer, Finance Head",
            rating: 5,
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                py: 0,
                overflow: 'hidden',
                background:
                    'linear-gradient(to bottom, #fff 15%, #43805935 50%, #fff 85%)',
            }}
        >
            {/* 1. Dashboard Continuous Carousel */}
            <Box sx={{ mt: 12, mb: 0, width: '100%' }}>
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={50}
                    slidesPerView={2}
                    centeredSlides
                    loop
                    loopedSlides={dashboardImages.length} // ensures infinite loop
                    freeMode={{ enabled: true, momentum: false }}
                    speed={5000}
                    autoplay={{ delay: 1, disableOnInteraction: false }} // key fix
                    allowTouchMove={false}
                    breakpoints={{
                        640: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    className="continuous-slider"
                    style={{ padding: '20px 0' }}
                >
                    {dashboardImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <Box
                                    sx={{
                                        bgcolor: '#fff',
                                        p: 1.5,
                                        borderRadius: '32px',
                                        boxShadow: isActive
                                            ? '0 20px 40px rgba(0,0,0,0.1)'
                                            : '0 10px 20px rgba(0,0,0,0.05)',
                                        transition: 'all 0.4s ease',
                                        transform: isActive
                                            ? 'scale(1.1)'
                                            : 'scale(0.85)',
                                        opacity: isActive ? 1 : 0.6,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={img}
                                        alt="Dashboard preview"
                                        sx={{
                                            width: '100%',
                                            aspectRatio: '21 / 9',
                                            objectFit: 'cover',
                                            borderRadius: '24px',
                                        }}
                                    />
                                </Box>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* 2. Testimonial Section */}
            <Box sx={{ width: '100%', px: { xs: 2, md: 4, lg: 6 }, pb: 8 }}>
                <Box
                    sx={{
                        width: '100%',
                        border: '1px solid rgba(67, 128, 89, 0.25)',
                        borderRadius: '40px',
                        py: 6,
                        px: { xs: 2, md: 6 },
                        bgcolor: '#fff',
                        textAlign: 'center',
                        maxWidth: '1600px',
                        mx: 'auto',
                        mt: 12,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: 'Poppins',
                            fontSize: { xs: '38px', md: '50px', lg: '56px' },
                            mb: 4,
                        }}
                    >
                        Trusted by{' '}
                        <Box component="span" sx={{ color: '#257C42' }}>
                            businesses
                        </Box>{' '}
                        and{' '}
                        <Box component="span" sx={{ color: '#257C42' }}>
                            accountants
                        </Box>{' '}
                        worldwide
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            width: '100%',
                            border: '1px solid rgba(67, 128, 89, 0.2)',
                            borderRadius: '32px',
                            py: 4,
                            px: { xs: 1, md: 4 },
                            bgcolor: 'rgba(249, 251, 249, 0.3)',
                        }}
                    >
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            loop
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '16px', md: '20px' },
                                                color: '#555',
                                                lineHeight: 1.6,
                                                mb: 3,
                                                fontStyle: 'italic',
                                                maxWidth: '1000px',
                                            }}
                                        >
                                            "{t.text}"
                                        </Typography>

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                        >
                                            <Rating
                                                value={t.rating}
                                                readOnly
                                                sx={{ color: '#FABB05' }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '18px',
                                                    color: '#257C42',
                                                }}
                                            >
                                                — {t.author}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TrustedSection;
