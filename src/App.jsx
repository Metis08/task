import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesPricingSection from './components/FeaturesPricingSection';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <FeaturesPricingSection />
    </ThemeProvider>
  );
}

export default App;
