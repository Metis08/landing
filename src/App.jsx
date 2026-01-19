import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import HeroSection from './components/HeroSection';
import TrustedSection from './components/TrustedSection';
import ExperienceSection from './components/ExperienceSection';
import SolutionsSection from './components/SolutionsSection';
import MOUSection from './components/MOUSection';
import DemoSection from './components/DemoSection';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', width: '100%', overflowX: 'hidden' }}>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <TrustedSection />
        </ScrollReveal>
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal>
          <SolutionsSection />
        </ScrollReveal>
        <ScrollReveal>
          <MOUSection />
        </ScrollReveal>
        <ScrollReveal>
          <DemoSection />
        </ScrollReveal>
      </Box>
    </ThemeProvider>
  );
}

export default App;
