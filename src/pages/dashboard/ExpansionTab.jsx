import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { dashboardConfig } from "./configs";
import StatsCards from "../../components/StatsCards";

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
                <ResponsiveContainer>
                  <BarChart data={expansionCharts.formatPerformance.data} barGap={6}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="format" stroke="#757575" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#757575" tick={{ fontSize: 12 }} />
                    <Tooltip
                      cursor={{ fill: "rgba(13, 71, 161, 0.08)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                      }}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: 12, paddingBottom: 12 }} />
                    <Bar dataKey="plan" name="Plan" fill="#0d47a1" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="actual" name="Actual" fill="#1976d2" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="pipeline" name="Pipeline" fill="#63a4ff" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer>
                  <LineChart data={expansionCharts.monthlyOpeningProgress.data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" stroke="#757575" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#757575" tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                      }}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: 12, paddingBottom: 12 }} />
                    <Line
                      type="monotone"
                      dataKey="target"
                      name="Target"
                      stroke="#ef5350"
                      strokeDasharray="6 4"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      name="Actual"
                      stroke="#1e88e5"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#1e88e5" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpansionTab;

