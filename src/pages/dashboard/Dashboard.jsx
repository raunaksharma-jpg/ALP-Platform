import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Apps as AppsIcon,
  BookmarkBorder as BookmarkIcon,
  Download as DownloadIcon,
  ShowChart as ChartIcon,
} from "@mui/icons-material";
import { dashboardConfig } from "./configs";
import { FilterSection, StatsCards } from "../../components";
import ExpansionTab from "./ExpansionTab";

const Dashboard = () => {
  const [filterValues, setFilterValues] = React.useState({
    "Time Range": "YTD",
  });
  const [activeTab, setActiveTab] = React.useState("expansion");

  const handleFilterChange = (filterLabel, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filterLabel]: value,
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getActionButtonIcon = (iconName) => {
    switch (iconName) {
      case "Apps":
        return <AppsIcon />;
      case "BookmarkBorder":
        return <BookmarkIcon />;
      case "Download":
        return <DownloadIcon />;
      default:
        return null;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "95%",
        mt: 4,
        mb: 4,
        mx: "auto", // centers the container horizontally
      }}
    >
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
            {dashboardConfig.header.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#757575",
              fontSize: { xs: "0.875rem", sm: "0.875rem" },
            }}
          >
            {dashboardConfig.header.description}
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
          {dashboardConfig.actionButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              startIcon={button.icon ? getActionButtonIcon(button.icon) : null}
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
        </Box>
      </Box>

      {/* Global Filters Section */}
      <FilterSection
        title={dashboardConfig.globalFilters.title}
        filters={dashboardConfig.globalFilters.filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
      />

      {/* Content Sections */}
      <Grid container spacing={3}>
        {/* Live Performance Summary */}
        <Grid size={{ xs: 12, md: 8 }}>
          <StatsCards
            title={dashboardConfig.livePerformanceSummary.title}
            subtitle={dashboardConfig.livePerformanceSummary.subtitle}
            cards={dashboardConfig.metricCards}
          />
        </Grid>

        {/* Live Updates */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              height: "100%",
            }}
          >
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ChartIcon sx={{ color: "#424242", fontSize: 20 }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#424242",
                      fontSize: "1rem",
                    }}
                  >
                    {dashboardConfig.liveUpdates.title}
                  </Typography>
                </Box>
              </Box>
              <List sx={{ p: 0 }}>
                {dashboardConfig.liveUpdates.updates.map((update, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      px: 0,
                      py: 1.5,
                      borderBottom:
                        index < dashboardConfig.liveUpdates.updates.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: update.color,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: "#424242",
                            fontSize: "0.875rem",
                            fontWeight: 400,
                          }}
                        >
                          {update.text}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            color: "#757575",
                            fontSize: "0.75rem",
                            mt: 0.5,
                          }}
                        >
                          {update.time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #e0e0e0",
            // justifyContent: "space-between",
            gap: 0,
          }}
        >
          {dashboardConfig.tabs.map((tab, index) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.value;

            return (
              <Button
                key={tab.value}
                onClick={(e) => handleTabChange(e, tab.value)}
                startIcon={<IconComponent sx={{ fontSize: 20 }} />}
                sx={{
                  textTransform: "none",
                  minHeight: 48,
                  px: 3,
                  py: 1.5,
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#00338d" : "#757575",
                  backgroundColor: isActive ? "#e3f2fd" : "transparent",
                  borderRadius: 0,
                  border: "1px solid #e0e0e0",
                  borderBottom: "none",
                  borderRight: index < dashboardConfig.tabs.length - 1 ? "1px solid #e0e0e0" : "1px solid #e0e0e0",
                  mr: 0,
                  position: "relative",
                  "&:hover": {
                    backgroundColor: isActive ? "#e3f2fd" : "#f5f5f5",
                  },
                  "&:first-of-type": {
                    borderTopLeftRadius: "8px",
                  },
                  "&:last-of-type": {
                    borderTopRightRadius: "8px",
                  },
                }}
              >
                {tab.label}
              </Button>
            );
          })}
        </Box>
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderTop: "none",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            p: 3,
            backgroundColor: "#ffffff",
          }}
        >
          {activeTab === "expansion" && <ExpansionTab />}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
