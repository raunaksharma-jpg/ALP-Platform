import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const DataTable = ({
  columns = [],
  data = [],
  actionButtons = [],
  onActionClick = () => {},
  getEfficiencyLabel = (percentage) => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 85) return "Good";
    return "Fair";
  },
  getEfficiencyColor = (percentage) => {
    if (percentage >= 90) return "#e8f5e9";
    if (percentage >= 85) return "#fff9c4";
    return "#ffebee";
  },
  getEfficiencyTextColor = (percentage) => {
    if (percentage >= 90) return "#2e7d32";
    if (percentage >= 85) return "#f57f17";
    return "#d32f2f";
  },
}) => {
  const getActionIcon = (iconName) => {
    switch (iconName) {
      case "Visibility":
        return <VisibilityIcon />;
      case "Edit":
        return <EditIcon />;
      case "Delete":
        return <DeleteIcon />;
      default:
        return null;
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case "view":
        return "#1976d2";
      case "edit":
        return "#f57c00";
      case "delete":
        return "#d32f2f";
      default:
        return "#424242";
    }
  };
  const renderCellContent = (column, row, rowIndex) => {
    if (column.render) {
      return column.render(row, rowIndex);
    }

    const value = row[column.field];

    if (column.type === "efficiency") {
      const efficiencyLabel = getEfficiencyLabel(value);
      const efficiencyBgColor = getEfficiencyColor(value);
      const efficiencyTextColor = getEfficiencyTextColor(value);

      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: "#424242",
              fontSize: "0.875rem",
            }}
          >
            {value}%
          </Typography>
          <Chip
            label={efficiencyLabel}
            size="small"
            sx={{
              backgroundColor: efficiencyBgColor,
              color: efficiencyTextColor,
              fontWeight: 500,
              fontSize: "0.7rem",
              height: 24,
              borderRadius: "12px",
            }}
          />
        </Box>
      );
    }

    if (column.type === "actions") {
      return (
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {actionButtons.map((button, index) => (
            <Tooltip key={index} title={button.label}>
              <IconButton
                size="small"
                onClick={() => onActionClick(button.action, row, rowIndex)}
                sx={{
                  color: getActionColor(button.action),
                  "&:hover": {
                    backgroundColor: `${getActionColor(button.action)}15`,
                  },
                }}
              >
                {getActionIcon(button.icon)}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      );
    }

    if (column.type === "number") {
      return value?.toLocaleString() || value;
    }

    if (column.type === "text") {
      return (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#424242",
            fontSize: "0.875rem",
          }}
        >
          {value}
        </Typography>
      );
    }

    return value;
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "0.875rem",
                  backgroundColor: "#f5f5f5",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#fafafa",
                },
                "&:last-child td": {
                  borderBottom: "none",
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    color: "#424242",
                    fontSize: "0.875rem",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  {renderCellContent(column, row, index)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

