import React, { useState } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import PlatformAnalytics from "./PlatformAnalytics";
import ModuleUsageAnalytics from "./ModuleUsageAnalytics";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "95%",
        mt: 4,
        mb: 4,
        mx: "auto",
      }}
    >
      {/* Tabs Section */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              fontWeight: 500,
              minHeight: 48,
            },
            "& .Mui-selected": {
              color: "#1976d2",
            },
          }}
          indicatorColor="primary"
        >
          <Tab label="Platform Analytics" />
          <Tab label="Module Usage Analytics" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {activeTab === 0 && <PlatformAnalytics />}
      {activeTab === 1 && <ModuleUsageAnalytics />}
    </Container>
  );
};

export default Analytics;
