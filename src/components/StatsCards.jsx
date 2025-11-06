import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { ShowChart as ChartIcon } from "@mui/icons-material";

const StatsCards = ({
  title = "Performance Summary",
  subtitle = "",
  cards = [],
  showIcon = true,
  showSubtitle = true,
  noWrapper = false,
}) => {
  const content = (
    <>
      {(title || subtitle) && (
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            {showIcon && <ChartIcon sx={{ color: "#424242", fontSize: 20 }} />}
            {title && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "1rem",
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
          {showSubtitle && subtitle && (
            <Typography
              variant="body2"
              sx={{
                color: "#757575",
                fontSize: "0.75rem",
                ml: showIcon ? 4 : 0,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <Grid container spacing={2}>
        {cards.map((card, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      fontSize: "0.75rem",
                      mb: 1,
                    }}
                  >
                    {card.label}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#424242",
                      fontSize: "1.75rem",
                    }}
                  >
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );

  if (noWrapper) {
    return content;
  }

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default StatsCards;

