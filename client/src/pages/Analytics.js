import Sidebar from "../components/Sidebar";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";


export default function Analytics() {

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 7000 },
    { month: "Mar", revenue: 9000 },
    { month: "Apr", revenue: 12000 },
    { month: "May", revenue: 15000 },
    { month: "Jun", revenue: 18000 },
  ];

  const sourceData = [
    { source: "Instagram", leads: 45 },
    { source: "Website", leads: 70 },
    { source: "LinkedIn", leads: 30 },
    { source: "Referral", leads: 20 },
  ];

  const pieData = [
    { name: "Converted", value: 60 },
    { name: "Contacted", value: 25 },
    { name: "New", value: 15 },
  ];

  const COLORS = [
    "#8b5cf6",
    "#3b82f6",
    "#06b6d4",
  ];

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        <div className="topbar">

          <div>

            <h1>
              Analytics
            </h1>

            <p>
              Business performance overview
            </p>

          </div>

        </div>

        {/* KPI */}
        <div className="cards">

          <div className="card">
            <h3>Total Revenue</h3>
            <h1>$48K</h1>
          </div>

          <div className="card">
            <h3>Conversions</h3>
            <h1>120</h1>
          </div>

          <div className="card">
            <h3>Growth Rate</h3>
            <h1>32%</h1>
          </div>

          <div className="card">
            <h3>New Clients</h3>
            <h1>18</h1>
          </div>

        </div>

        {/* ANALYTICS GRID */}
        <div className="analytics-grid">

          {/* REVENUE CHART */}
          <div className="chart-card">

            <h2>
              Revenue Growth
            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <AreaChart data={revenueData}>

                <defs>

                  <linearGradient
                    id="colorRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#8b5cf6"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="95%"
                      stopColor="#8b5cf6"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <XAxis dataKey="month" />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}
          <div className="pie-card">

            <h2>
              Conversion Ratio
            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  innerRadius={70}
                  outerRadius={110}
                  dataKey="value"
                >

                  {pieData.map(
                    (entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    )
                  )}

                </Pie>

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="analytics-grid">

          {/* SOURCE CHART */}
          <div className="chart-card">

            <h2>
              Lead Sources
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart data={sourceData}>

                <XAxis dataKey="source" />

                <Tooltip />

                <Bar
                  dataKey="leads"
                  fill="#3b82f6"
                  radius={[10,10,0,0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* ACTIVITY */}
          <div className="pie-card">

            <h2>
              Recent Activity
            </h2>

            <div className="activity-list">

              <div className="activity-item">
                New lead converted
              </div>

              <div className="activity-item">
                Meeting scheduled
              </div>

              <div className="activity-item">
                Proposal sent
              </div>

              <div className="activity-item">
                Client onboarding
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );
}