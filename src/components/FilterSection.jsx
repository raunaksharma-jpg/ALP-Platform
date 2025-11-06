import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  FilterList as FilterIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const FilterSection = ({
  title = "Global Filters",
  filters = [],
  filterValues = {},
  onFilterChange = () => {},
  showIcon = true,
}) => {
  const handleChange = (filterLabel, value) => {
    onFilterChange(filterLabel, value);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        mb: 4,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          {showIcon && <FilterIcon sx={{ color: "#424242", fontSize: 20 }} />}
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
        <Grid container spacing={2}>
          {filters.map((filter, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              {filter.type === "search" ? (
                <TextField
                  fullWidth
                  placeholder={filter.placeholder}
                  variant="outlined"
                  size="small"
                  value={filterValues[filter.label] || ""}
                  onChange={(e) => handleChange(filter.label, e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#757575", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f5f5f5",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e0e0e0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.875rem",
                    },
                  }}
                />
              ) : (
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel sx={{ fontSize: "0.75rem", color: "#757575" }}>
                    {filter.label}
                  </InputLabel>
                  <Select
                    value={filterValues[filter.label] || ""}
                    label={filter.label}
                    onChange={(e) => handleChange(filter.label, e.target.value)}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                    }}
                  >
                    <MenuItem value="">{filter.placeholder}</MenuItem>
                    {filter.options?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FilterSection;

