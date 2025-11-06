import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { ShowChart as ChartIcon } from "@mui/icons-material";

const StatsCards = ({
  title = "Performance Summary",
  subtitle = "",
  cards = [],
  showIcon = true,
  showSubtitle = true,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        height: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            {showIcon && <ChartIcon sx={{ color: "#424242", fontSize: 20 }} />}
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
        <Grid container spacing={2}>
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <IconComponent
                        sx={{
                          color: card.iconColor,
                          fontSize: 32,
                        }}
                      />
                      {card.trend && (
                        <Chip
                          label={card.trend}
                          size="small"
                          sx={{
                            backgroundColor: "#e8f5e9",
                            color: card.trendColor || "#2e7d32",
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            height: 24,
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        color: "#424242",
                        mb: 0.5,
                        fontSize: "1.75rem",
                      }}
                    >
                      {card.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#757575",
                        fontSize: "0.75rem",
                      }}
                    >
                      {card.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatsCards;

