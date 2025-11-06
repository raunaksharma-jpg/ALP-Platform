import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Apps as AppsIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  SmartToy as SmartToyIcon,
  Launch as LaunchIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navItems = [
    { icon: AppsIcon, label: "Platform Modules", path: "/platform-modules" },
    { icon: DashboardIcon, label: "Dashboard", path: "/dashboard" },
    { icon: AnalyticsIcon, label: "Analytics", path: "/analytics" },
    { icon: SmartToyIcon, label: "AI Agent", path: "/ai-agent" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                selected={isActive}
                onClick={handleDrawerToggle}
                sx={{
                  color: isActive ? "#1976d2" : "#000000",
                  "&.Mui-selected": {
                    backgroundColor: "rgba(25, 118, 210, 0.08)",
                    color: "#1976d2",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "#1976d2" : "#000000",
                    minWidth: 40,
                  }}
                >
                  <IconComponent />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 1, sm: 1.5 },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => navigate("/platform-modules")}
          >
            <Box
              sx={{
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 },
                backgroundColor: "#1976d2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                ALP
              </Typography>
            </Box>
            {!isSmallScreen && (
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.2,
                    color: "#000000",
                  }}
                >
                  ALP Platform
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666666",
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    display: "block",
                    lineHeight: 1.2,
                  }}
                >
                  New Store Opening System
                </Typography>
              </Box>
            )}
          </Box>

          {/* Navigation - Desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 2, md: 3 },
                flex: 1,
                justifyContent: "center",
                mx: 2,
              }}
            >
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        cursor: "pointer",
                        color: isActive ? "#1976d2" : "#000000",
                        "&:hover": {
                          color: "#1976d2",
                        },
                        px: { sm: 1, md: 1.5 },
                        py: 0.5,
                        borderRadius: 1,
                        transition: "all 0.2s",
                      }}
                    >
                      <IconComponent sx={{ fontSize: { sm: 18, md: 20 } }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { sm: "0.75rem", md: "0.875rem" },
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </NavLink>
                );
              })}
            </Box>
          )}

          {/* Right Section - User Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              flexShrink: 0,
            }}
          >
            {!isMobile && (
              <>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    height: { xs: 24, sm: 30 },
                    display: { xs: "none", sm: "block" },
                  }}
                />
                <Chip
                  label="Online"
                  sx={{
                    backgroundColor: "#e8f5e9",
                    color: "#2e7d32",
                    fontWeight: 500,
                    height: { xs: 24, sm: 28 },
                    borderRadius: "20px",
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    display: { xs: "none", sm: "flex" },
                  }}
                />
              </>
            )}
            <Avatar
              sx={{
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                backgroundColor: "#e0e0e0",
                color: "#666666",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
              >
                A
              </Typography>
            </Avatar>
            {!isSmallScreen && (
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.875rem" },
                  color: "#000000",
                  display: { xs: "none", md: "block" },
                }}
              >
                admin@test.com
              </Typography>
            )}
            {!isMobile && (
              <IconButton
                size="small"
                sx={{
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <LaunchIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
            )}
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

