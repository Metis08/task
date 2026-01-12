import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Using check circle as bullet point for now, or just dot
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const FeaturesPricingSection = () => {
    return (
        <Box sx={{ width: '100%', py: 8, bgcolor: '#fff' }}>
            <Container maxWidth={false} sx={{ px: { xs: 1, md: 2 } }}>

                {/* --- Why Digitize Section --- */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2, md: 3 },
                        mb: 12,
                        border: '1px solid #e0e0e0',
                        borderRadius: 6,
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                        width: '100%'
                    }}
                >
                    <Grid container spacing={0} justifyContent="space-between" alignItems="center">
                        {/* Left Column: Wide Rectangle Placeholder */}
                        <Grid item xs={12} md={5.5}>
                            <Box
                                sx={{
                                    width: '400%',
                                    height: 350,
                                    borderRadius: 4,
                                    bgcolor: '#f5f5f5', // Visual grey placeholder
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="caption" color="text.secondary">Wide Rectangle / Image Placeholder</Typography>
                            </Box>
                        </Grid>

                        {/* Right Column: Content - Heading centered as requested */}
                        <Grid item xs={12} md={6.5} sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: { md: 6 }, pr: { md: 4 } }}>
                            <Box sx={{ mb: 4, width: '100%' }}>
                                <Typography variant="h4" fontSize={45} fontWeight="bold" sx={{ lineHeight: 1.2, mb: 2, textAlign: 'center' }}>
                                    Why Digitize Your <br />
                                    Audit Confirmations?
                                </Typography>
                            </Box>

                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.2, mb: 3, display: 'block', maxWidth: '90%' }}>
                                Manual confirmations are slow, error-prone, and untrackable. <br />
                                Our solution solves that with:
                            </Typography>

                            <List disablePadding>
                                {[
                                    "Fast, secure confirmations via OTP",
                                    "Higher response rate through automated follow-ups",
                                    "Instant PDF export and reconciliation status",
                                    "Standardization across bank and client formats",
                                    "SA 505 and ICAI compliant audit trail"
                                ].map((text, index) => (
                                    <ListItem key={index} disableGutters sx={{ py: 0.5, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <ListItemIcon sx={{ minWidth: 24, mt: 0.8 }}>
                                            <FiberManualRecordIcon sx={{ fontSize: 6, color: '#333' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            primaryTypographyProps={{
                                                variant: 'body2',
                                                color: 'text.primary',
                                                fontSize: '0.9rem',
                                                fontWeight: 500
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Paper>


                {/* --- Pricing Section --- */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="900" fontSize={45} gutterBottom sx={{ mb: 4 }}>
                        Pay-As-You-<Typography component="span" fontSize={45} variant="h4" fontWeight="bold" sx={{ color: '#2E7D32' }}>Go Pricing</Typography>
                    </Typography>

                    {/* Main Pricing Board Container */}
                    <Paper
                        elevation={0}
                        sx={{
                            background: 'linear-gradient(180deg, #E8F5E9 0%, #C8E6C9 100%)',
                            borderRadius: 8,
                            p: { xs: 2, md: 4 }, // Reduced padding to give more width to cards
                            border: '1px solid #C8E6C9',
                            position: 'relative',
                            overflow: 'hidden'

                        }}
                    >
                        {/* Pricing Cards */}
                        {/* Pricing Cards */}
                        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
                            {[
                                { range: "1 – 75", label: "Confirmations" },
                                { range: "76 – 1,000", label: "Confirmations" },
                                { range: "1,001 – 3,000", label: "Confirmations" },
                                { range: "> 3,000", label: "Confirmations" }
                            ].map((tier, index) => (
                                <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Paper
                                        elevation={8}
                                        sx={{
                                            width: 280, // Fixed width matching the widest card content needs
                                            borderRadius: 5,
                                            overflow: 'hidden',
                                            height: 140,
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            background: 'linear-gradient(180deg, #558B58 0%, #81C784 100%)',
                                            pt: 2.5,
                                            px: 0
                                        }}
                                    >
                                        <Box sx={{ textAlign: 'center', color: 'white', width: '100%', px: 1 }}>
                                            <Typography variant="h6" fontWeight={800} sx={{ lineHeight: 1, fontSize: '1.4rem' }}>
                                                {tier.range}
                                            </Typography>
                                            <Typography variant="body2" fontWeight={500} sx={{ opacity: 0.95, fontSize: '0.80rem', mt: 0.5 }}>
                                                {tier.label}
                                            </Typography>
                                        </Box>

                                        {/* Floating Free Pill */}
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                position: 'absolute',
                                                bottom: 12,
                                                bgcolor: 'white',
                                                borderRadius: 20,
                                                py: 0.5,
                                                width: '80%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                zIndex: 2,
                                                minHeight: 28
                                            }}
                                        >
                                            <Typography variant="body2" fontWeight={700} sx={{ color: '#2E7D32', fontSize: '0.9rem' }}>
                                                Free
                                            </Typography>
                                        </Paper>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Footer Call to Action */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body1" fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <span>🚀</span> Special discounted rates for Practicing Chartered Accountants!
                            </Typography>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                sx={{
                                    borderRadius: 8,
                                    px: 5,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    bgcolor: '#558B2F', // Darker earthy green for button
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                    '&:hover': { bgcolor: '#33691E' }
                                }}
                            >
                                Registered as Practicing CA
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturesPricingSection;
