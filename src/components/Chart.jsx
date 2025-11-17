import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({
  type = "line",
  data = [],
  dataKeys = [],
  xAxisKey = "name",
  height = 300,
  showLegend = true,
  showGrid = true,
  tooltipConfig = {},
  xAxisConfig = {},
  yAxisConfig = {},
  chartConfig = {},
}) => {
  const defaultTooltipStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
  };

  const defaultAxisStyle = {
    stroke: "#757575",
    fontSize: 12,
  };

  const renderLineChart = () => (
    <LineChart data={data} {...chartConfig}>
      {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />}
      <XAxis
        dataKey={xAxisKey}
        {...defaultAxisStyle}
        {...xAxisConfig}
      />
      <YAxis {...defaultAxisStyle} {...yAxisConfig} />
      <Tooltip
        contentStyle={defaultTooltipStyle}
        {...tooltipConfig}
      />
      {showLegend && (
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingBottom: 12 }}
        />
      )}
      {dataKeys.map((keyConfig, index) => (
        <Line
          key={index}
          type={keyConfig.type || "monotone"}
          dataKey={keyConfig.dataKey}
          name={keyConfig.name || keyConfig.dataKey}
          stroke={keyConfig.color || "#1976d2"}
          strokeWidth={keyConfig.strokeWidth || 2}
          dot={keyConfig.dot !== undefined ? keyConfig.dot : { r: 4 }}
          strokeDasharray={keyConfig.strokeDasharray}
          activeDot={keyConfig.activeDot || { r: 6 }}
        />
      ))}
    </LineChart>
  );

  const renderBarChart = () => (
    <BarChart data={data} {...chartConfig}>
      {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />}
      <XAxis
        dataKey={xAxisKey}
        {...defaultAxisStyle}
        {...xAxisConfig}
      />
      <YAxis {...defaultAxisStyle} {...yAxisConfig} />
      <Tooltip
        contentStyle={defaultTooltipStyle}
        cursor={{ fill: "rgba(13, 71, 161, 0.08)" }}
        {...tooltipConfig}
      />
      {showLegend && (
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingBottom: 12 }}
        />
      )}
      {dataKeys.map((keyConfig, index) => (
        <Bar
          key={index}
          dataKey={keyConfig.dataKey}
          name={keyConfig.name || keyConfig.dataKey}
          fill={keyConfig.color || "#1976d2"}
          radius={keyConfig.radius || [6, 6, 0, 0]}
        />
      ))}
    </BarChart>
  );

  const renderPieChart = () => (
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={true}
        label={({ name, value }) => `${name}: ${value}%`}
        outerRadius={dataKeys[0]?.outerRadius || 100}
        fill="#8884d8"
        dataKey={dataKeys[0]?.dataKey || "value"}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color || "#8884d8"} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={defaultTooltipStyle}
        formatter={(value) => `${value}%`}
        {...tooltipConfig}
      />
    </PieChart>
  );

  const renderChart = () => {
    switch (type.toLowerCase()) {
      case "line":
        return renderLineChart();
      case "bar":
        return renderBarChart();
      case "pie":
        return renderPieChart();
      default:
        return renderLineChart();
    }
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      {renderChart()}
    </ResponsiveContainer>
  );
};

export default Chart;

