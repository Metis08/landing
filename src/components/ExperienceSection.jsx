import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AnimatedCounter = ({ endValue, suffix, duration = 2000 }) => {
    const [count, setCount] = React.useState(0);
    const [hasStarted, setHasStarted] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    React.useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [hasStarted, endValue, duration]);

    return (
        <Typography
            ref={ref}
            sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '32px', md: '56px' },
                color: '#333',
            }}
        >
            {count}
            <Box component="span" sx={{ color: '#257C42' }}>
                {suffix}
            </Box>
        </Typography>
    );
};

const BrandsTrust = () => {
    const brands = [
        // Ring 1 (Inner) - Radius ~150px
        { name: 'airtel', logo: '/airtel.png', ring: 1, angle: -90, color: '#e40000' },
        { name: 'DreamFolks', logo: '/dreamfolks.png', ring: 1, angle: 30, color: '#000' },
        { name: 'Paradeep Phosphates', logo: '/paradeep.png', ring: 1, angle: 150, color: '#004a8e' },

        // Ring 2 (Middle) - Radius ~280px
        { name: 'Bata', logo: '/bata.png', ring: 2, angle: -120, color: '#d32f2f' },
        { name: 'igl', logo: '/igl.png', ring: 2, angle: -45, color: '#000' },
        { name: 'JK TYRE', logo: '/download.png', ring: 2, angle: 0, color: '#000' },
        { name: 'Coforge', logo: '/coforage.png', ring: 2, angle: 180, color: '#004a8e' },
        { name: 'Brookfield', logo: '/brookfield.png', ring: 2, angle: 140, color: '#004a8e' },
        { name: 'wipro', logo: '/wipro.png', ring: 2, angle: 60, color: '#6a1b9a' },
        { name: 'SOUTH INDIAN Bank', logo: '/southindian.png', ring: 2, angle: 90, color: '#d32f2f' },

        // Ring 3 (Outer) - Radius ~400px
        { name: 'RELAXO', logo: '/relaxo.png', ring: 3, angle: -90, color: '#004a8e' },
        { name: 'NOWFLOATS', logo: '/nowfloats.png', ring: 3, angle: 210, color: '#f57c00' },
        { name: 'Netweb', logo: '/download(9).png', ring: 3, angle: -30, color: '#0288d1' }
    ];

    const getPosition = (ring, angle) => {
        const radius = ring === 1 ? 220 : ring === 2 ? 370 : 500;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        return { x, y };
    };

    return (
        <Box
            sx={{
                mt: 6, // Decreased distance from numbers
                position: 'relative',
                height: { xs: '600px', md: '1100px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                // Scale down on mobile to fit perfectly
                transform: { xs: 'scale(0.35)', sm: 'scale(0.55)', md: 'scale(0.85)', lg: 'scale(1)' },
            }}
        >
            {/* Concentric Rings with solid colors matching image and enhanced shadows */}
            <Box sx={{ position: 'absolute', width: '1050px', height: '1050px', borderRadius: '50%', bgcolor: '#438059', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }} />
            <Box sx={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', bgcolor: '#7BA68C', boxShadow: '0 10px 35px rgba(0,0,0,0.1)' }} />
            <Box sx={{ position: 'absolute', width: '550px', height: '550px', borderRadius: '50%', bgcolor: '#B5CCBE', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }} />

            {/* Center Circle */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    bgcolor: '#F9FBF9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    zIndex: 10,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '32px',
                        color: '#000',
                        textAlign: 'center',
                        lineHeight: 1.2
                    }}
                >
                    Brands that<br />Trust us
                </Typography>
            </Box>

            {/* Brand Logos */}
            {brands.map((brand, index) => {
                const { x, y } = getPosition(brand.ring, brand.angle);
                return (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            transform: `translate(${x}px, ${y}px)`,
                            zIndex: 20,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: `translate(${x}px, ${y}px) scale(1.15)`,
                                zIndex: 30,
                            }
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#fff',
                                px: 1.5,
                                py: 1,
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                color: brand.color,
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'default',
                                width: { xs: '90px', md: '145px' },
                                height: { xs: '40px', md: '60px' },
                                overflow: 'hidden'
                            }}
                        >
                            {brand.logo ? (
                                <Box
                                    component="img"
                                    src={brand.logo}
                                    alt={brand.name}
                                    sx={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            ) : (
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', textAlign: 'center', lineHeight: 1.2 }}>
                                    {brand.name}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

const ExperienceSection = () => {
    const stats = [
        { value: 20, suffix: 'M+', label: 'TDS Calculation' },
        { value: 40, suffix: '+', label: 'Listed Clients' },
        { value: 300, suffix: 'K+', label: 'Forms Processed' },
        { value: 2, suffix: 'B+', label: 'Dividend Processed' }
    ];

    return (
        <Box sx={{ width: '100%', pt: 12, pb: 0, textAlign: 'center', bgcolor: '#fff', px: { xs: 2, md: 4, lg: 8 } }}>
            <Typography
                variant="h2"
                sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: { xs: '42px', md: '56px', lg: '64px' },
                    color: '#333',
                    lineHeight: 1.1,
                    width: '100%',
                    maxWidth: '1800px',
                    mx: 'auto',
                    mb: 8 // Space before counters
                }}
            >
                Since,{' '}
                <Box component="span" sx={{ color: '#257C42' }}>
                    2020
                </Box>{' '}
                we are helping businesses simplify their compliance.
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: { xs: 4, md: 8, lg: 12 },
                    maxWidth: '1200px',
                    mx: 'auto'
                }}
            >
                {stats.map((stat, index) => (
                    <Box key={index} sx={{ minWidth: { xs: '120px', md: '150px' }, flex: { xs: '1 0 40%', md: '0' } }}>
                        <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '15px',
                                color: '#333',
                                mt: 1
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Brands Trust Circular Section */}
            <BrandsTrust />
        </Box>
    );
};

export default ExperienceSection;
