import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Button,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { platformModules } from "./configs";

const PlatformModules = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#000000",
            }}
          >
            ALP - Asset Lifecycle Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "normal",
              color: "#000000",
            }}
          >
            AI-native, agentic and easy-to-use new-store-opening operating system
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
          <Button
            variant="contained"
            onClick={() => {platformModules}}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: "#1976d2",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Platform Modules
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              borderColor: "#1976d2",
              color: "#1976d2",
              "&:hover": {
                borderColor: "#1565c0",
                backgroundColor: "rgba(21, 101, 192, 0.04)",
              },
            }}
          >
            Dashboard
          </Button>
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
          color: "#000000",
        }}
      >
        Platform Modules
      </Typography>
      <Grid container spacing={3}>
        {platformModules.map((module) => {
          const IconComponent = module.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={module.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: 32,
                        color: "#424242",
                      }}
                    />
                    <Chip
                      label={module.status}
                      size="small"
                      sx={{
                        backgroundColor: "#e8f5e9",
                        color: "#2e7d32",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        height: 24,
                        borderRadius: "16px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#000000",
                      fontSize: "1rem",
                    }}
                  >
                    {module.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666666",
                      mb: 3,
                      flexGrow: 1,
                      fontSize: "0.875rem",
                    }}
                  >
                    {module.description}
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 1,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Access Module
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PlatformModules;

