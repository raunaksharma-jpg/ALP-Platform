import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Grid,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  TrendingUp as TrendingUpIcon,
  MonitorHeart as MonitorHeartIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { moduleUsageConfig } from "./configs";
import { InfoCard } from "../../components";

const ModuleUsageAnalytics = () => {
  const getEfficiencyLabel = (percentage) => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 85) return "Good";
    return "Fair";
  };

  const getEfficiencyColor = (percentage) => {
    if (percentage >= 90) return "#e8f5e9";
    if (percentage >= 85) return "#fff9c4";
    return "#ffebee";
  };

  const getEfficiencyTextColor = (percentage) => {
    if (percentage >= 90) return "#2e7d32";
    if (percentage >= 85) return "#f57f17";
    return "#d32f2f";
  };

  return (
    <>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "#424242",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          {moduleUsageConfig.header.title}
        </Typography>
      </Box>

      {/* Modules List */}
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {moduleUsageConfig.modules.map((module, index) => {
            const efficiencyLabel = getEfficiencyLabel(module.efficiency);
            const efficiencyBgColor = getEfficiencyColor(module.efficiency);
            const efficiencyTextColor = getEfficiencyTextColor(module.efficiency);

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 2.5,
                  borderBottom:
                    index < moduleUsageConfig.modules.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                  gap: 3,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                }}
              >
                {/* Module Icon */}
                <Box
                  sx={{
                    width: { xs: 40, sm: 48 },
                    height: { xs: 40, sm: 48 },
                    backgroundColor: "#e3f2fd",
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <VisibilityIcon sx={{ color: "#64b5f6", fontSize: { xs: 20, sm: 24 } }} />
                </Box>

                {/* Module Info */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#424242",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      mb: 1,
                    }}
                  >
                    {module.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#757575",
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      {module.activeUsers.toLocaleString()} active users
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#757575",
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      {module.sessions.toLocaleString()} sessions
                    </Typography>
                  </Box>
                </Box>

                {/* Efficiency Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 1,
                    minWidth: { xs: "100%", md: 280 },
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      fontWeight: 500,
                      mb: 0.5,
                    }}
                  >
                    Efficiency
                  </Typography>
                  <Box sx={{ width: "100%", mb: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color: "#424242",
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                      >
                        {module.efficiency}%
                      </Typography>
                      <Chip
                        label={efficiencyLabel}
                        size="small"
                        sx={{
                          backgroundColor: efficiencyBgColor,
                          color: efficiencyTextColor,
                          fontWeight: 500,
                          fontSize: { xs: "0.7rem", sm: "0.75rem" },
                          height: 24,
                          borderRadius: "12px",
                        }}
                      />
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={module.efficiency}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#e0e0e0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#1976d2",
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Card>

      {/* Info Cards Section */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {moduleUsageConfig.infoCards.map((cardConfig, index) => {
          let IconComponent;
          switch (cardConfig.icon) {
            case "TrendingUp":
              IconComponent = (
                <TrendingUpIcon sx={{ color: "#2e7d32", fontSize: 20 }} />
              );
              break;
            case "MonitorHeart":
              IconComponent = (
                <MonitorHeartIcon sx={{ color: "#1976d2", fontSize: 20 }} />
              );
              break;
            case "LocationOn":
              IconComponent = (
                <LocationOnIcon sx={{ color: "#7b1fa2", fontSize: 20 }} />
              );
              break;
            default:
              IconComponent = null;
          }

          return (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <InfoCard
                title={cardConfig.title}
                icon={IconComponent}
                items={cardConfig.items}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ModuleUsageAnalytics;

