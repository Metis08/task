import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const HeroSection = () => {
    return (
        <Box sx={{ width: '100%', py: 5 }}>
            <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
                {/* Main Headline */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                        Digital Balance Confirmations
                    </Typography>
                    <Typography variant="h3" component="span" fontWeight="bold" sx={{ color: '#2E7D32' }}>
                        on BlockChain
                    </Typography>
                </Box>

                {/* Green Card Section with Overlapping Placeholder */}
                <Box sx={{ position: 'relative', mt: 25 }}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '700px',
                            height: '400px',
                            mx: 'auto',
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '10px solid #1a1a1a',
                            color: '#555',
                            position: 'absolute',
                            top: -200, // Center (200px) on the top border
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2,
                            boxShadow: '0px 20px 40px rgba(0,0,0,0.2)',
                            overflow: 'hidden' // Ensure image doesn't bleed out
                        }}
                    >
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Dashboard"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    {/* Dark Green Content Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            background: 'linear-gradient(180deg, #437E58 0%, #2E5B3D 100%)',
                            borderRadius: 6,
                            pt: { xs: 25, md: 35 },
                            pb: { xs: 6, md: 8 },
                            px: { xs: 4, md: 8 },
                            color: 'white',
                            textAlign: 'center',
                            mb: 8
                        }}
                    >
                        {/* Description Text */}
                        <Typography variant="body1" sx={{ maxWidth: '900px', mx: 'auto', lineHeight: 1.8, fontSize: '1.2rem', fontWeight: 400 }}>
                            With <strong>WrapTax Confirm</strong>, audit confirmations become effortless, intelligent, and secure. Our platform
                            streamlines the entire process—from initiating requests to real-time tracking—using advanced
                            automation, OTP-based third-party authentication, and audit-ready digital documentation. Whether
                            you're confirming receivables or payables, our online tool ensures higher response rates, faster
                            turnaround, and full compliance with SA 505 standards.
                        </Typography>
                    </Paper>
                </Box>

                {/* The Flow Section */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" fontSize={45} fontWeight="bold" gutterBottom>
                        The <Typography component="span" fontSize={45} variant="h4" fontWeight="bold" sx={{ color: '#2E7D32' }}>Flow</Typography> you NEED
                    </Typography>
                </Box>

                {/* Flow Steps Icons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: 2, overflowX: 'auto', py: 2, maxWidth: '1400px', mx: 'auto' }}>
                    <FlowStep icon={<AccountBalanceWalletIcon />} label="Initiate Request" />
                    <Arrow />
                    <FlowStep icon={<SecurityIcon />} label="Secure Authentication" />
                    <Arrow />
                    <FlowStep icon={<TrendingUpIcon />} label="Real-time Tracking" />
                    <Arrow />
                    <FlowStep icon={<VerifiedUserIcon />} label="Third-party Verification" />
                    <Arrow />
                    <FlowStep icon={<FactCheckIcon />} label="Audit Compliance" />
                    <Arrow />
                    <FlowStep icon={<PictureAsPdfIcon />} label="Download Reports" />
                </Box>

            </Container>
        </Box>
    );
};

// Helper component for Flow Steps
const FlowStep = ({ icon, label }) => (
    <Paper
        elevation={2}
        sx={{
            p: 3,
            borderRadius: 4,
            minWidth: 150,
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #eee',
            flexShrink: 0
        }}
    >
        <Box sx={{ color: '#2E7D32', mb: 2 }}>
            {React.cloneElement(icon, { fontSize: 'large', sx: { fontSize: 40 } })}
        </Box>
        <Typography variant="caption" align="center" fontWeight="bold" sx={{ fontSize: '0.8rem', lineHeight: 1.2 }}>
            {label}
        </Typography>
    </Paper>
);

// Helper component for Arrow
const Arrow = () => (
    <Box sx={{ display: { xs: 'none', md: 'block' }, color: '#2E7D32', flexShrink: 0, transform: 'rotate(90deg)' }}>
        <TouchAppIcon sx={{ fontSize: 24, color: '#2E7D32' }} />
    </Box>
);

export default HeroSection;
