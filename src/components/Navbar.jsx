import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Popper,
    Paper,
    Fade,
    Stack,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Contact Us Popup State
    const [contactAnchorEl, setContactAnchorEl] = useState(null);
    const openContact = Boolean(contactAnchorEl);

    // Handle Solutions Dropdown
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Handle Mobile Drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Handle Contact Us Hover
    const handleContactEnter = (event) => {
        setContactAnchorEl(event.currentTarget);
    };

    const handleContactLeave = () => {
        setContactAnchorEl(null);
    };

    const menuItems = [
        { label: 'Home', hasDropdown: false },
        { label: 'Solutions', hasDropdown: true },
        { label: 'Blogs', hasDropdown: false },
        { label: 'Contact Us', hasDropdown: false, isContact: true },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                W7
            </Typography>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.label}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" elevation={0} sx={{ borderBottom: '1px solid #eee' }}>
                <Toolbar>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: '#2E7D32',
                                display: 'flex',
                                alignItems: 'center',
                                mr: 1
                            }}
                        >
                            W
                            <Typography component="span" variant="h5" sx={{ color: '#1976D2' }}>7</Typography>
                        </Typography>
                    </Box>

                    {/* Spacer to push everything else to the right */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item) => (
                                <div
                                    key={item.label}
                                    onMouseEnter={item.isContact ? handleContactEnter : undefined}
                                    onMouseLeave={item.isContact ? handleContactLeave : undefined}
                                >
                                    <Button
                                        color="inherit"
                                        onClick={item.hasDropdown ? handleMenuClick : undefined}
                                        endIcon={item.hasDropdown ? <KeyboardArrowDownIcon /> : null}
                                        sx={{ color: '#333', fontSize: '16px', fontWeight: 500 }}
                                    >
                                        {item.label}
                                    </Button>
                                    {item.hasDropdown && (
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleMenuClose}
                                        >
                                            <MenuItem onClick={handleMenuClose}>Solution 1</MenuItem>
                                            <MenuItem onClick={handleMenuClose}>Solution 2</MenuItem>
                                            <MenuItem onClick={handleMenuClose}>Solution 3</MenuItem>
                                        </Menu>
                                    )}
                                    {/* Contact Us Popper */}
                                    {item.isContact && (
                                        <Popper
                                            open={openContact}
                                            anchorEl={contactAnchorEl}
                                            placement="bottom-end"
                                            transition
                                            style={{ zIndex: 1200 }}
                                            modifiers={[
                                                {
                                                    name: 'offset',
                                                    options: {
                                                        offset: [0, 10],
                                                    },
                                                },
                                            ]}
                                        >
                                            {({ TransitionProps }) => (
                                                <Fade {...TransitionProps} timeout={350}>
                                                    <Paper sx={{ p: 3, width: 350, boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
                                                        <Stack spacing={2}>
                                                            {/* Phone */}
                                                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F5F9FF', p: 1.5, borderRadius: 2 }}>
                                                                <Avatar sx={{ bgcolor: '#E3F2FD', color: '#1565C0', mr: 2 }}>
                                                                    <PhoneIcon fontSize="small" />
                                                                </Avatar>
                                                                <Box>
                                                                    <Typography variant="caption" color="text.secondary">Phone Number</Typography>
                                                                    <Typography variant="body2" fontWeight="bold">+91 9999-260-234</Typography>
                                                                </Box>
                                                            </Box>

                                                            {/* Email */}
                                                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#FFF8F1', p: 1.5, borderRadius: 2 }}>
                                                                <Avatar sx={{ bgcolor: '#FFF3E0', color: '#E65100', mr: 2 }}>
                                                                    <EmailIcon fontSize="small" />
                                                                </Avatar>
                                                                <Box>
                                                                    <Typography variant="caption" color="text.secondary">Email Address</Typography>
                                                                    <Typography variant="body2" fontWeight="bold">support@wraptax.com</Typography>
                                                                </Box>
                                                            </Box>

                                                            {/* Business Hours */}
                                                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F1F8E9', p: 1.5, borderRadius: 2 }}>
                                                                <Avatar sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', mr: 2 }}>
                                                                    <AccessTimeIcon fontSize="small" />
                                                                </Avatar>
                                                                <Box>
                                                                    <Typography variant="caption" color="text.secondary">Business Hours</Typography>
                                                                    <Typography variant="body2" fontWeight="bold">Mon - Fri: 10:00 AM - 5:00 PM</Typography>
                                                                    <Typography variant="caption" color="text.secondary" display="block">Sat: 10:00 AM - 2:00 PM | Sun: Closed</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Stack>
                                                    </Paper>
                                                </Fade>
                                            )}
                                        </Popper>
                                    )}
                                </div>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Icon */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, color: '#333' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Navbar;
