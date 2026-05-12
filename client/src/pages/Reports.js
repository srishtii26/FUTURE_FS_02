import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";
export default function Reports() {

  const reports = [

    {
      month: "January",
      revenue: "$12K",
      conversions: 18,
      growth: "+12%",
    },

    {
      month: "February",
      revenue: "$15K",
      conversions: 24,
      growth: "+18%",
    },

    {
      month: "March",
      revenue: "$18K",
      conversions: 32,
      growth: "+22%",
    },

    {
      month: "April",
      revenue: "$22K",
      conversions: 40,
      growth: "+28%",
    },

  ];

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.text(
      "CRM Reports",
      14,
      20
    );

    autoTable(doc, {

      startY: 30,

      head: [[
        "Month",
        "Revenue",
        "Conversions",
        "Growth",
      ]],

      body: reports.map(
        (report) => [

          report.month,
          report.revenue,
          report.conversions,
          report.growth,

        ]
      ),

    });

    doc.save(
      "crm-report.pdf"
    );

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">
<button
  className="export-btn"
  onClick={exportPDF}
>
  Export PDF
</button>
          <div>

            <h1>
              Reports
            </h1>

            <p>
              Business performance reports
            </p>

          </div>

        </div>

        {/* KPI */}
        <div className="cards">

          <div className="card">
            <h3>Total Revenue</h3>
            <h1>$68K</h1>
          </div>

          <div className="card">
            <h3>Total Leads</h3>
            <h1>248</h1>
          </div>

          <div className="card">
            <h3>Conversions</h3>
            <h1>84</h1>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <h1>32%</h1>
          </div>

        </div>

        {/* REPORT TABLE */}
        <div className="table-card">

          <div className="table-header">

            <h2>
              Monthly Reports
            </h2>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>Month</th>
                  <th>Revenue</th>
                  <th>Conversions</th>
                  <th>Growth</th>
                  <th>Export</th>

                </tr>

              </thead>

              <tbody>

                {reports.map(
                  (report, index) => (

                    <tr key={index}>

                      <td>
                        {report.month}
                      </td>

                      <td>
                        {report.revenue}
                      </td>

                      <td>
                        {report.conversions}
                      </td>

                      <td>
                        {report.growth}
                      </td>

                      <td>

                        <button className="export-btn">
                          Export PDF
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* REPORT WIDGETS */}
        <div className="report-grid">

          <div className="report-card">

            <h2>
              Weekly Summary
            </h2>

            <p>
              24 new leads added this week.
            </p>

            <p>
              Conversion rate increased by 12%.
            </p>

          </div>

          <div className="report-card">

            <h2>
              Top Lead Source
            </h2>

            <p>
              LinkedIn generated highest conversions.
            </p>

            <p>
              48 qualified leads received.
            </p>

          </div>

          <div className="report-card">

            <h2>
              Sales Performance
            </h2>

            <p>
              Revenue growth reached 32%.
            </p>

            <p>
              Best performing month: April.
            </p>

          </div>

        </div>

      </main>

    </div>

  );
}