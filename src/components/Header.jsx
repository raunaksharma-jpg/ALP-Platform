import React from "react";
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
  useTheme,
} from "@mui/material";
import {
  Apps as AppsIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  SmartToy as SmartToyIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: AppsIcon, label: "Platform Modules", path: "/platform-modules" },
    { icon: DashboardIcon, label: "Dashboard", path: "/dashboard" },
    { icon: AnalyticsIcon, label: "Analytics", path: "/analytics" },
    { icon: SmartToyIcon, label: "AI Agent", path: "/ai-agent" },
  ];

  return (
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
          px: 3,
          py: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
          }}
          onClick={() => navigate("/platform-modules")}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
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
                fontSize: "0.875rem",
              }}
            >
              ALP
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
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
                fontSize: "0.75rem",
                display: "block",
                lineHeight: 1.2,
              }}
            >
              New Store Opening System
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
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
                    gap: 1,
                    cursor: "pointer",
                    color: isActive ? theme.palette.primary.main : "#000000",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <IconComponent sx={{ fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </NavLink>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Divider orientation="vertical" flexItem sx={{ height: 30 }} />
          <Chip
            label="Online"
            sx={{
              backgroundColor: "#e8f5e9",
              color: "#2e7d32",
              fontWeight: 500,
              height: 28,
              borderRadius: "20px",
              fontSize: "0.75rem",
            }}
          />
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "#e0e0e0",
              color: "#666666",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
              A
            </Typography>
          </Avatar>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: "#000000",
            }}
          >
            admin@test.com
          </Typography>
          <IconButton
            size="small"
            sx={{
              color: "#000000",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <LaunchIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

