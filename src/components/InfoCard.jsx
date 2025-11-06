import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

const InfoCard = ({ title, icon, items = [] }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        height: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          {icon && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          )}
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((item, index) => (
            <Box key={index}>
              {item.type === "region" && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "#424242",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Chip
                    label={`${item.value}% efficiency`}
                    size="small"
                    sx={{
                      backgroundColor: item.chipColor || "#e8f5e9",
                      color: item.textColor || "#2e7d32",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      height: 24,
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              )}
              {item.type === "metric" && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: item.valueColor || "#2e7d32",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              )}
              {item.type === "milestone" && (
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#424242",
                      fontSize: "0.875rem",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

