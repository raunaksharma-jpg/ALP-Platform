import {
  Store as StoreIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  AccessTime as TimeIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Business as BusinessIcon,
  BarChart as BarChartIcon,
  Warning as WarningIcon,
  TrackChanges as TrackChangesIcon,
  Timeline as TimelineIcon,
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
  expansionMetrics: [
    {
      label: "Annual Opening Plan",
      value: "156 / 180",
    },
    {
      label: "Stores Opened (YTD)",
      value: "89 / 120",
    },
    {
      label: "Under Development",
      value: "34 / 40",
    },
    {
      label: "Sites Acquired",
      value: "67 / 75",
    },
    {
      label: "Sites in Pipeline",
      value: "123 / 150",
    },
  ],
  expansionCharts: {
    formatPerformance: {
      title: "Format-wise Performance",
      icon: TrackChangesIcon,
      data: [
        { format: "Smart", plan: 45, actual: 30, pipeline: 33 },
        { format: "Smart Point", plan: 32, actual: 20, pipeline: 24 },
        { format: "Smart Bazaar", plan: 28, actual: 17, pipeline: 21 },
        { format: "Freshpik", plan: 30, actual: 18, pipeline: 25 },
        { format: "Signature", plan: 15, actual: 5, pipeline: 12 },
        { format: "Signature Plus", plan: 8, actual: 3, pipeline: 6 },
      ],
    },
    monthlyOpeningProgress: {
      title: "Monthly Opening Progress",
      icon: TimelineIcon,
      data: [
        { month: "Apr", actual: 12, target: 14 },
        { month: "May", actual: 15, target: 17 },
        { month: "Jun", actual: 17, target: 19 },
        { month: "Jul", actual: 18, target: 21 },
        { month: "Aug", actual: 22, target: 23 },
        { month: "Sep", actual: 20, target: 21 },
      ],
    },
  },
  tabs: [
    {
      label: "Expansion",
      value: "expansion",
      icon: TrendingUpIcon,
      isActive: true,
    },
    {
      label: "Capex",
      value: "capex",
      icon: AccountBalanceIcon,
      isActive: false,
    },
    {
      label: "Development",
      value: "development",
      icon: BusinessIcon,
      isActive: false,
    },
    {
      label: "Performance",
      value: "performance",
      icon: BarChartIcon,
      isActive: false,
    },
    {
      label: "Insights",
      value: "insights",
      icon: WarningIcon,
      isActive: false,
    },
  ],
};
