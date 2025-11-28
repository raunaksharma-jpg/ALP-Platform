import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Person as PersonIcon,
  Security as SecurityIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import { DataTable } from "../../components";

const RBACAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Manager",
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "User",
      status: "Inactive",
      lastActive: "5 days ago",
    },
  ];

  const userColumns = [
    {
      field: "name",
      label: "Name",
      type: "text",
    },
    {
      field: "email",
      label: "Email",
      type: "text",
    },
    {
      field: "role",
      label: "Role",
      render: (row) => (
        <Chip
          label={row.role}
          size="small"
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#00338d",
            fontWeight: 500,
          }}
        />
      ),
    },
    {
      field: "status",
      label: "Status",
      render: (row) => (
        <Chip
          label={row.status}
          size="small"
          sx={{
            backgroundColor:
              row.status === "Active" ? "#e8f5e9" : "#ffebee",
            color: row.status === "Active" ? "#2e7d32" : "#d32f2f",
            fontWeight: 500,
          }}
        />
      ),
    },
    {
      field: "lastActive",
      label: "Last Active",
      type: "text",
    },
    {
      field: "actions",
      label: "Actions",
      type: "actions",
    },
  ];

  const actionButtons = [
    {
      label: "Edit",
      action: "edit",
      icon: "Edit",
    },
    {
      label: "Delete",
      action: "delete",
      icon: "Delete",
    },
  ];

  const handleActionClick = (action, row, rowIndex) => {
    console.log("Action:", action, "Row:", row, "Index:", rowIndex);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const roles = [
    { id: 1, name: "Admin", users: 5, permissions: 12 },
    { id: 2, name: "Manager", users: 15, permissions: 8 },
    { id: 3, name: "User", users: 45, permissions: 4 },
    { id: 4, name: "Viewer", users: 20, permissions: 2 },
  ];

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
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#000000",
            }}
          >
            RBAC Admin
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "normal",
              color: "#000000",
            }}
          >
            Manage users, roles, and permissions for the platform
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: "#00338d",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#00286e",
              },
            }}
          >
            Add User
          </Button>
          <Button
            variant="outlined"
            startIcon={<SecurityIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              borderColor: "#00338d",
              color: "#00338d",
              "&:hover": {
                borderColor: "#00286e",
                backgroundColor: "rgba(0, 51, 141, 0.04)",
              },
            }}
          >
            Manage Roles
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon sx={{ color: "#00338d", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#000000" }}
                  >
                    85
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    Total Users
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: "#e8f5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon sx={{ color: "#2e7d32", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#000000" }}
                  >
                    4
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    Roles
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: "#fff3e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SecurityIcon sx={{ color: "#f57c00", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#000000" }}
                  >
                    26
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    Permissions
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: "#e8f5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon sx={{ color: "#2e7d32", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#000000" }}
                  >
                    78
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    Active Users
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#000000",
                  }}
                >
                  Users
                </Typography>
                <TextField
                  size="small"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#666666" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: { xs: "100%", sm: 300 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
              <DataTable
                columns={userColumns}
                data={filteredUsers}
                actionButtons={actionButtons}
                onActionClick={handleActionClick}
              />
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Roles Overview
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {roles.map((role) => (
                  <Box
                    key={role.id}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid #e0e0e0",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", color: "#000000" }}
                      >
                        {role.name}
                      </Typography>
                      <Chip
                        label={`${role.users} users`}
                        size="small"
                        sx={{
                          backgroundColor: "#e3f2fd",
                          color: "#00338d",
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: "#666666" }}>
                      {role.permissions} permissions
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default RBACAdmin;

