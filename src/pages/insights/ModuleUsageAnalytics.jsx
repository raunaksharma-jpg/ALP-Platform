import React from "react";
import {
  Typography,
  Box,
  Grid,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  MonitorHeart as MonitorHeartIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { moduleUsageConfig } from "./configs";
import { InfoCard, DataTable } from "../../components";

const ModuleUsageAnalytics = () => {
  const handleActionClick = (action, row, index) => {
    console.log(`Action: ${action}`, row, index);
    // Handle action click here (e.g., navigate, open modal, etc.)
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

      {/* Data Table */}
      <DataTable
        columns={moduleUsageConfig.tableColumns}
        data={moduleUsageConfig.modules}
        actionButtons={moduleUsageConfig.actionButtons}
        onActionClick={handleActionClick}
      />

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

