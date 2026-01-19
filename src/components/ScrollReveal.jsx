import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const ScrollReveal = ({ children }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
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

    return (
        <Box
            ref={ref}
            className={`reveal-section ${isRevealed ? 'revealed' : ''}`}
            sx={{ width: '100%' }}
        >
            {children}
        </Box>
    );
};

export default ScrollReveal;
