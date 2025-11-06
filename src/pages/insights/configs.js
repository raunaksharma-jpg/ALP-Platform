import {
  People as PeopleIcon,
  AccessTime as TimeIcon,
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";

export const analyticsConfig = {
  header: {
    title: "Platform Analytics",
    description: "Comprehensive insights into ALP platform usage and performance.",
  },
  actionButtons: [
    {
      label: "Export Report",
      variant: "outlined",
      isActive: false,
    },
    {
      label: "Real-time Dashboard",
      variant: "contained",
      isActive: true,
    },
  ],
  metricCards: [
    {
      icon: PeopleIcon,
      iconColor: "#64b5f6",
      value: "1,247",
      label: "Total Active Users",
      trend: "+18%",
      trendColor: "#2e7d32",
    },
    {
      icon: TimeIcon,
      iconColor: "#81c784",
      value: "24m 32s",
      label: "Avg. Session Time",
      trend: "+8%",
      trendColor: "#2e7d32",
    },
    {
      icon: CheckIcon,
      iconColor: "#81c784",
      value: "94.2%",
      label: "Success Rate",
      trend: "+2.1%",
      trendColor: "#2e7d32",
    },
    {
      icon: ErrorIcon,
      iconColor: "#e57373",
      value: "3",
      label: "Critical Issues",
      trend: "-12",
      trendColor: "#d32f2f",
    },
  ],
  weeklyActivity: {
    title: "Weekly Platform Activity",
    data: [
      { day: "Mon", value1: 550, value2: 250 },
      { day: "Tue", value1: 580, value2: 270 },
      { day: "Wed", value1: 620, value2: 290 },
      { day: "Thu", value1: 650, value2: 300 },
      { day: "Fri", value1: 700, value2: 320 },
      { day: "Sat", value1: 400, value2: 200 },
      { day: "Sun", value1: 250, value2: 150 },
    ],
  },
  userRoleDistribution: {
    title: "User Role Distribution",
    data: [
      { name: "Strategy Leads", value: 35, color: "#1565c0" },
      { name: "Real Estate Managers", value: 28, color: "#42a5f5" },
      { name: "Finance Controllers", value: 22, color: "#90caf9" },
      { name: "Construction Teams", value: 15, color: "#e3f2fd" },
    ],
  },
};

export const moduleUsageConfig = {
  header: {
    title: "Module Usage Analytics",
  },
  tableColumns: [
    {
      field: "name",
      label: "Module",
      type: "text",
    },
    {
      field: "activeUsers",
      label: "Active Users",
      type: "number",
    },
    {
      field: "sessions",
      label: "Sessions",
      type: "number",
    },
    {
      field: "efficiency",
      label: "Efficiency",
      type: "efficiency",
    },
    {
      field: "actions",
      label: "Actions",
      type: "actions",
    },
  ],
  actionButtons: [
    {
      label: "View",
      action: "view",
      icon: "Visibility",
    },
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
  ],
  modules: [
    {
      name: "Location Intelligence",
      activeUsers: 234,
      sessions: 1456,
      efficiency: 92,
    },
    {
      name: "Real Estate Pipeline",
      activeUsers: 189,
      sessions: 987,
      efficiency: 88,
    },
    {
      name: "Feasibility Engine",
      activeUsers: 156,
      sessions: 743,
      efficiency: 95,
    },
    {
      name: "Construction Management",
      activeUsers: 145,
      sessions: 892,
      efficiency: 91,
    },
    {
      name: "Performance Dashboard",
      activeUsers: 134,
      sessions: 654,
      efficiency: 89,
    },
    {
      name: "Lease Management",
      activeUsers: 98,
      sessions: 432,
      efficiency: 85,
    },
    {
      name: "Handover Orchestration",
      activeUsers: 87,
      sessions: 321,
      efficiency: 87,
    },
    {
      name: "Data Lake & Copilot",
      activeUsers: 76,
      sessions: 289,
      efficiency: 93,
    },
  ],
  infoCards: [
    {
      title: "Top Performing Regions",
      icon: "TrendingUp",
      items: [
        {
          type: "region",
          name: "Mumbai",
          value: 98,
          chipColor: "#e8f5e9",
          textColor: "#2e7d32",
        },
        {
          type: "region",
          name: "Delhi NCR",
          value: 96,
          chipColor: "#e8f5e9",
          textColor: "#2e7d32",
        },
        {
          type: "region",
          name: "Bangalore",
          value: 89,
          chipColor: "#fff9c4",
          textColor: "#f57f17",
        },
      ],
    },
    {
      title: "System Health",
      icon: "MonitorHeart",
      items: [
        {
          type: "metric",
          label: "API Response Time",
          value: "45ms avg",
          valueColor: "#2e7d32",
        },
        {
          type: "metric",
          label: "Uptime",
          value: "99.8%",
          valueColor: "#2e7d32",
        },
        {
          type: "metric",
          label: "Error Rate",
          value: "0.02%",
          valueColor: "#2e7d32",
        },
      ],
    },
    {
      title: "Recent Milestones",
      icon: "LocationOn",
      items: [
        {
          type: "milestone",
          title: "Q4 Store Openings",
          description: "47 new locations launched",
        },
        {
          type: "milestone",
          title: "Process Automation",
          description: "65% reduction in manual tasks",
        },
        {
          type: "milestone",
          title: "Cost Optimization",
          description: "₹2.3Cr saved in Q4",
        },
      ],
    },
  ],
};
