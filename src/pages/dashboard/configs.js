import {
  Store as StoreIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";

export const dashboardConfig = {
  header: {
    title: "Executive Dashboard",
    description: "Real-time insights across expansion, capex, development, and performance",
  },
  actionButtons: [
    {
      label: "Platform Module",
      icon: "Apps",
      variant: "outlined",
    },
    {
      label: "Bookmark View",
      icon: "BookmarkBorder",
      variant: "outlined",
    },
    {
      label: "Export PDF",
      icon: "Download",
      variant: "outlined",
    },
    {
      label: "Overall",
      icon: null,
      variant: "contained",
      isActive: true,
    },
    {
      label: "Deep Dive",
      icon: null,
      variant: "outlined",
    },
  ],
  globalFilters: {
    title: "Global Filters",
    filters: [
      {
        label: "Store Format",
        placeholder: "Select Format",
        type: "select",
        options: [],
      },
      {
        label: "Zone",
        placeholder: "Select Zone",
        type: "select",
        options: [],
      },
      {
        label: "State",
        placeholder: "Select State",
        type: "select",
        options: [],
      },
      {
        label: "Store ID / Name",
        placeholder: "Search store...",
        type: "search",
      },
      {
        label: "Time Range",
        placeholder: "YTD",
        type: "select",
        options: [
          { value: "YTD", label: "YTD" },
          { value: "MTD", label: "MTD" },
          { value: "QTD", label: "QTD" },
        ],
      },
    ],
  },
  metricCards: [
    {
      icon: StoreIcon,
      iconColor: "#1976d2",
      value: "147",
      label: "Total Operational stores",
      trend: "+12",
      trendColor: "#2e7d32",
    },
    {
      icon: MoneyIcon,
      iconColor: "#2e7d32",
      value: "₹284.5Cr",
      label: "Monthly Revenue (YTD)",
      trend: "+18.2%",
      trendColor: "#2e7d32",
    },
    {
      icon: PeopleIcon,
      iconColor: "#7b1fa2",
      value: "1,247",
      label: "Active Users",
      trend: "+89",
      trendColor: "#2e7d32",
    },
    {
      icon: TimeIcon,
      iconColor: "#f57c00",
      value: "156 days",
      label: "Avg. Project Timeline",
      trend: "-12 days",
      trendColor: "#2e7d32",
    },
  ],
  livePerformanceSummary: {
    title: "Live Performance Summary",
    subtitle: "All data | YTD",
  },
  liveUpdates: {
    title: "Live Updates",
    updates: [
      { color: "#2e7d32", text: "3 stores opened this week", time: "2m ago" },
      { color: "#f57c00", text: "Capex approval pending: ₹2.3Cr", time: "15m ago" },
      { color: "#1976d2", text: "New site acquired in Mumbai", time: "1h ago" },
      { color: "#2e7d32", text: "Q4 target 89% achieved", time: "3h ago" },
    ],
  },
};
