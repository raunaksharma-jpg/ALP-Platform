import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Analytics as AnalyticsIcon } from "@mui/icons-material";
import { analyticsConfig } from "./configs";
import { StatsCards, Chart } from "../../components";

const PlatformAnalytics = () => {
  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-start" },
          mb: 4,
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#424242",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            {analyticsConfig.header.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#757575",
              fontSize: { xs: "0.875rem", sm: "0.875rem" },
            }}
          >
            {analyticsConfig.header.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          {analyticsConfig.actionButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              sx={{
                textTransform: "none",
                borderColor: "#e0e0e0",
                color: button.isActive ? "#ffffff" : "#424242",
                backgroundColor: button.isActive ? "#00338d" : "transparent",
                borderRadius: 2,
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                fontWeight: button.isActive ? 500 : 400,
                flex: { xs: "1 1 calc(50% - 8px)", sm: "0 1 auto" },
                minWidth: { xs: "calc(50% - 8px)", sm: "auto" },
              }}
            >
              {button.label}
            </Button>
          ))}
          <Box
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              backgroundColor: "#e3f2fd",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: { xs: 0, sm: 1 },
            }}
          >
            <AnalyticsIcon sx={{ color: "#64b5f6", fontSize: { xs: 24, sm: 28 } }} />
          </Box>
        </Box>
      </Box>

      {/* Stats Cards Section */}
      <Box sx={{ mb: 4 }}>
        <StatsCards
          title=""
          subtitle=""
          cards={analyticsConfig.metricCards}
          showIcon={false}
          showSubtitle={false}
          noWrapper={true}
        />
      </Box>

      {/* Charts Section */}
      <Grid container spacing={3}>
        {/* Weekly Platform Activity */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "1rem",
                  mb: 3,
                }}
              >
                {analyticsConfig.weeklyActivity.title}
              </Typography>
              <Chart
                type="line"
                data={analyticsConfig.weeklyActivity.data}
                dataKeys={[
                  {
                    dataKey: "value1",
                    name: "Value 1",
                    color: "#64b5f6",
                    strokeWidth: 2,
                    dot: false,
                  },
                  {
                    dataKey: "value2",
                    name: "Value 2",
                    color: "#1976d2",
                    strokeWidth: 2,
                    dot: false,
                  },
                ]}
                xAxisKey="day"
                height={300}
                yAxisConfig={{
                  domain: [0, 800],
                  ticks: [0, 200, 400, 600, 800],
                }}
                xAxisConfig={{
                  style: { fontSize: "0.75rem" },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* User Role Distribution */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "1rem",
                  mb: 3,
                }}
              >
                {analyticsConfig.userRoleDistribution.title}
              </Typography>
              <Chart
                type="pie"
                data={analyticsConfig.userRoleDistribution.data}
                dataKeys={[
                  {
                    dataKey: "value",
                    outerRadius: 100,
                  },
                ]}
                height={300}
                showLegend={false}
                showGrid={false}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PlatformAnalytics;

