import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { dashboardConfig } from "./configs";
import StatsCards from "../../components/StatsCards";
import { Chart } from "../../components";

const ExpansionTab = () => {
  const { expansionCharts } = dashboardConfig;
  const FormatIcon = expansionCharts.formatPerformance.icon;
  const ProgressIcon = expansionCharts.monthlyOpeningProgress.icon;

  return (
    <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
      <StatsCards
        cards={dashboardConfig.expansionMetrics}
        showIcon={false}
        showSubtitle={false}
        noWrapper
        title=""
        gridColumns={{ xs: 12, sm: 5, md: 5 }}
        gridSize={{ xs: 12, sm: 1, md: 1 }}
        spacing={2.5}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 16px rgba(25, 118, 210, 0.15)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    backgroundColor: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0d47a1",
                  }}
                >
                  <FormatIcon sx={{ fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#1f2933" }}>
                  {expansionCharts.formatPerformance.title}
                </Typography>
              </Box>
              <Box sx={{ width: "100%", height: 280 }}>
                <Chart
                  type="bar"
                  data={expansionCharts.formatPerformance.data}
                  dataKeys={[
                    {
                      dataKey: "plan",
                      name: "Plan",
                      color: "#0d47a1",
                      radius: [6, 6, 0, 0],
                    },
                    {
                      dataKey: "actual",
                      name: "Actual",
                      color: "#1976d2",
                      radius: [6, 6, 0, 0],
                    },
                    {
                      dataKey: "pipeline",
                      name: "Pipeline",
                      color: "#63a4ff",
                      radius: [6, 6, 0, 0],
                    },
                  ]}
                  xAxisKey="format"
                  height={280}
                  chartConfig={{ barGap: 6 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 16px rgba(25, 118, 210, 0.15)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    backgroundColor: "#fce4ec",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ad1457",
                  }}
                >
                  <ProgressIcon sx={{ fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#1f2933" }}>
                  {expansionCharts.monthlyOpeningProgress.title}
                </Typography>
              </Box>
              <Box sx={{ width: "100%", height: 280 }}>
                <Chart
                  type="line"
                  data={expansionCharts.monthlyOpeningProgress.data}
                  dataKeys={[
                    {
                      dataKey: "target",
                      name: "Target",
                      color: "#ef5350",
                      strokeDasharray: "6 4",
                      strokeWidth: 2,
                      dot: { r: 3 },
                    },
                    {
                      dataKey: "actual",
                      name: "Actual",
                      color: "#1e88e5",
                      strokeWidth: 3,
                      dot: { r: 4, fill: "#1e88e5" },
                      activeDot: { r: 6 },
                    },
                  ]}
                  xAxisKey="month"
                  height={280}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpansionTab;

