import React, { useEffect, useRef } from 'react';
import { Box, Typography, Rating, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper styles for testimonials
import 'swiper/css';
import 'swiper/css/autoplay';

import dashboard1 from '../assets/hero-dashboard.png';
import dashboard2 from '../assets/dashboard-2.png';
import dashboard3 from '../assets/dashboard-3.png';

const TrustedSection = () => {
    const baseImages = [dashboard1, dashboard2, dashboard3];
    // Quadruple images for ultra-smooth seamless looping
    const dashboardImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

    const containerRef = useRef(null);
    const itemsRef = useRef([]); // Stores direct DOM references
    const scrollXRef = useRef(0);
    const requestRef = useRef();
    const lastTimeRef = useRef();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    // Configuration - Optimized for legibility on small screens
    const itemWidth = isMobile ? 340 : isTablet ? 600 : 700;
    const totalItemWidth = isMobile ? 385 : isTablet ? 660 : 780;

    // Use a ref for scrollSpeed to ensure the animation loop (requestAnimationFrame) 
    // always uses the latest value even after HMR or re-renders.
    const scrollSpeedRef = useRef(isMobile ? 0.25 : 0.35);

    useEffect(() => {
        scrollSpeedRef.current = isMobile ? 0.25 : 0.35;
    }, [isMobile]);

    const updateAnimation = (time) => {
        if (!containerRef.current || itemsRef.current.length === 0) return;

        if (lastTimeRef.current !== undefined) {
            const deltaTime = time - lastTimeRef.current;

            // 1. Update Scroll Position with Safe Reset
            // We reset every one full cycle of base images to keep float precision high
            const singleSetSpan = baseImages.length * totalItemWidth;
            scrollXRef.current = (scrollXRef.current + deltaTime * scrollSpeedRef.current) % singleSetSpan;

            const containerWidth = containerRef.current.offsetWidth;
            const centerPos = containerWidth / 2;

            // Sharpened influence for localized focus
            const maxInfluenceArea = totalItemWidth * 0.8;
            const totalSpan = dashboardImages.length * totalItemWidth;

            // 2. High-Performance direct DOM Engine
            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                // Precise Wrapping Logic:
                // rawPos is the current linear position
                const rawPos = (index * totalItemWidth) - scrollXRef.current;

                // wrappedPos calculates where the item should sit within the total virtual carousel span
                // ensuring there are no gaps or jumps during the scrollX reset
                const wrappedPos = ((rawPos + totalSpan / 2) % totalSpan + totalSpan) % totalSpan - totalSpan / 2;

                // Centering in viewport
                const itemLeft = wrappedPos + (containerWidth / 2) - (itemWidth / 2);

                const itemCenter = itemLeft + (itemWidth / 2);
                const distanceFromCenter = Math.abs(itemCenter - centerPos);

                // Normalized distance (0 at center, 1 at edge of influence)
                const normalizedDist = Math.min(1, distanceFromCenter / maxInfluenceArea);

                // Quick, light scaling curve (factor is 1 at center, 0 at edge)
                const factor = Math.max(0, 1 - normalizedDist);
                const scale = 0.85 + (0.3 * Math.pow(factor, 3));
                const opacity = 0.5 + (0.5 * factor);
                const zIndex = Math.round(factor * 100);

                // Update styles directly to bypass React overhead
                item.style.transform = `translateX(${itemLeft}px) scale(${scale})`;
                item.style.opacity = opacity;
                item.style.zIndex = zIndex;
            });
        }

        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(updateAnimation);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updateAnimation);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

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
                background: 'linear-gradient(to bottom, #fff 15%, #43805935 50%, #fff 85%)',
            }}
        >
            {/* 1. Feature Dashboard Carousel - Ultra-Light Scaling Version */}
            <Box
                ref={containerRef}
                sx={{
                    mt: 12,
                    mb: 8,
                    width: '100%',
                    position: 'relative',
                    height: { xs: '350px', md: '550px' },
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {dashboardImages.map((img, index) => (
                    <Box
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            width: `${itemWidth}px`,
                            willChange: 'transform, opacity',
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#fff',
                                p: 1,
                                borderRadius: '40px',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="img"
                                src={img}
                                alt={`Feature Dashboard ${index}`}
                                sx={{
                                    width: '100%',
                                    aspectRatio: '21 / 9',
                                    objectFit: 'cover',
                                    borderRadius: '32px',
                                    display: 'block'
                                }}
                            />
                        </Box>
                    </Box>
                ))}
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
                        mt: 8,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: 'Poppins',
                            fontSize: { xs: '32px', md: '50px', lg: '56px' },
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
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography sx={{
                                            fontSize: { xs: '16px', md: '20px' }, color: '#555',
                                            lineHeight: 1.6, mb: 3, fontStyle: 'italic', maxWidth: '1000px'
                                        }}>
                                            "{t.text}"
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Rating value={t.rating} readOnly sx={{ color: '#FABB05' }} />
                                            <Typography sx={{ fontWeight: 700, fontSize: '18px', color: '#257C42' }}>
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
