import axios from "axios";

import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";


export default function Dashboard({
  darkMode,
  toggleTheme,
}) {

 const [leads, setLeads] =
  useState([

    {
      _id: 1,
      name: "Srishti Rao",
      email: "srishti@gmail.com",
      source: "LinkedIn",
      status: "Contacted",
      notes: "Interested in internship",
    },

    {
      _id: 2,
      name: "Rahul Mehta",
      email: "rahul@gmail.com",
      source: "Website",
      status: "New",
      notes: "Requested product demo",
    },

    {
      _id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      source: "Instagram",
      status: "Converted",
      notes: "Closed premium plan",
    },

  ]);

const [notifications] =
  useState([

    "🔥 12 new leads added today",

    "📧 Client follow-up scheduled",

    "✅ 3 leads converted this week",

    "📈 Revenue increased by 18%",

    "🗓 Meeting scheduled for tomorrow",

  ]);


   
  const addLead = () => {

  const lead = {

    _id: Date.now(),

    ...formData,

    status: "New",

  };

  setLeads([
    lead,
    ...leads,
  ]);

  setShowModal(false);

  setFormData({

    name: "",

    email: "",

    source: "",

    notes: "",

  });

};
const deleteLead = (id) => {

  setLeads(

    leads.filter(
      (lead) =>
        lead._id !== id
    )

  );
};
const [analytics, setAnalytics] =
  useState({
    totalLeads: 0,
    contacted: 0,
    converted: 0,
    newLeads: 0,
    sourceStats: [],
  });
  const [searchTerm, setSearchTerm] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      source: "",
      status: "New",
      notes: "",
    });

  useEffect(() => {

  fetchLeads();

  fetchAnalytics();

}, []);

  const fetchLeads = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await axios.get(
          "http://localhost:5000/api/leads",
          {
            headers: {
              Authorization:
                token,
            },
          }
        );

      setLeads(res.data);

    } catch (error) {

      console.log(error);

    }
  };
  const fetchAnalytics = async () => {

  try {

    const token =
      localStorage.getItem(
        "token"
      );

    const res =
      await axios.get(
        "http://localhost:5000/api/analytics",
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

    setAnalytics(res.data);

  } catch (error) {

    console.log(error);

  }
};

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.post(
        "http://localhost:5000/api/leads",
        formData,
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      fetchLeads();

      setShowModal(false);

      setFormData({
        name: "",
        email: "",
        source: "",
        status: "New",
        notes: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.put(
        `http://localhost:5000/api/leads/${id}`,
        { status },
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      fetchLeads();

    } catch (error) {

      console.log(error);

    }
  };

  const filteredLeads =
    leads.filter(
      (lead) =>
        lead.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        lead.email
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  const analyticsData = [
    {
      month: "Jan",
      leads: 20,
    },
    {
      month: "Feb",
      leads: 35,
    },
    {
      month: "Mar",
      leads: 45,
    },
    {
      month: "Apr",
      leads: 65,
    },
    {
      month: "May",
      leads: 90,
    },
  ];

 const pieData = [

  {
    name: "New",
    value: 32,
  },

  {
    name: "Contacted",
    value: 48,
  },

  {
    name: "Converted",
    value: 20,
  },

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

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>
              CRM Dashboard
            </h1>

            <p>
              Manage your business
              leads
            </p>

          </div>

          <div className="topbar-actions">

            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />
           <button
  className="theme-toggle"
  onClick={toggleTheme}
>

  {darkMode ? "☀️" : "🌙"}

</button>
<div className="notification-wrapper">

  <button className="notification-btn">

    🔔

    <span className="notification-badge">
      {notifications.length}
    </span>

  </button>

  <div className="notification-dropdown">

    {notifications.map(
  (item, index) => (

    <div
      className="notification-item"
      key={index}
    >
      {item}
    </div>

  )
)}

    <div className="notification-item">
      Task deadline tomorrow
    </div>

    <div className="notification-item">
      Lead converted successfully
    </div>

  </div>

</div>
            <button
  onClick={() =>
  setShowModal(true)
}
>
  Add Lead
</button>

          </div>

        </div>

        {/* KPI */}
                {/* KPI */}
        <div className="cards">

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Total Leads
              </h3>

              <span className="trend up">
                ↑ 18%
              </span>

            </div>

            <h1>
              128
            </h1>

            <p>
              Compared to last month
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Contacted
              </h3>

              <span className="trend up">
                ↑ 12%
              </span>

            </div>

            <h1>
              82
            </h1>

            <p>
              Active client engagement
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Converted
              </h3>

              <span className="trend up">
                ↑ 24%
              </span>

            </div>

            <h1>
              34
            </h1>

            <p>
              Successful conversions
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                New Leads
              </h3>

              <span className="trend up">
                ↑ 9%
              </span>

            </div>

            <h1>
              46
            </h1>

            <p>
              New incoming prospects
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Conversion Rate
              </h3>

              <span className="trend up">
                ↑ 8%
              </span>

            </div>

            <h1>
              27%
            </h1>

            <p>
              Lead-to-client performance
            </p>

          </div>

        </div>
        {/* ANALYTICS */}
        <div className="analytics-grid">

          <div className="chart-card">

            <h2>
              Lead Analytics
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <LineChart
                data={
                  analyticsData
                }
              >

                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="#8b5cf6"
                  strokeWidth={4}
                />

                <Tooltip />

              </LineChart>

            </ResponsiveContainer>

          </div>

          <div className="pie-card">

            <h2>
              Lead Status
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                >

                  {pieData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index
                          ]
                        }
                      />

                    )
                  )}

                </Pie>

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* TABLE */}
        <div className="table-card">

          <div className="table-header">

            <h2>
              Recent Leads
            </h2>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>Name</th>
                  <th>Email</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Notes</th>
                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {leads.map(
  (lead) => (

    <tr
      key={lead._id}
    >

      <td>
        {lead.name}
      </td>

      <td>
        {lead.email}
      </td>

      <td>
        {lead.source}
      </td>

      <td>

        <select
          value={
            lead.status
          }
          onChange={(
            e
          ) =>
            updateStatus(
              lead._id,
              e.target.value
            )
          }
        >

          <option value="New">
            New
          </option>

          <option value="Contacted">
            Contacted
          </option>

          <option value="Converted">
            Converted
          </option>

        </select>

      </td>

      <td>
        {lead.notes}
      </td>

      <td>

        <button
          className="delete-btn"
          onClick={() =>
            deleteLead(
              lead._id
            )
          }
        >
          Delete
        </button>

      </td>

    </tr>

  )
)}

</tbody>

</table>

</div>

</div>
{/* ADD LEAD MODAL */}

{showModal && (

  <div className="modal-overlay">

    <div className="lead-modal">

      <h2>
        Add New Lead
      </h2>

      <input
        type="text"
        placeholder="Lead Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name:
              e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Lead Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email:
              e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Lead Source"
        value={formData.source}
        onChange={(e) =>
          setFormData({
            ...formData,
            source:
              e.target.value,
          })
        }
      />

      <textarea
        placeholder="Notes"
        value={formData.notes}
        onChange={(e) =>
          setFormData({
            ...formData,
            notes:
              e.target.value,
          })
        }
      />

      <div className="modal-actions">

        <button
          className="upload-btn"
          onClick={addLead}
        >
          Add Lead
        </button>

        <button
          className="cancel-btn"
          onClick={() =>
            setShowModal(false)
          }
        >
          Cancel
        </button>

      </div>

    </div>

  </div>

)}
</main>

      {/* MODAL */}
      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              Add Lead
            </h2>

            <form
              onSubmit={
                handleSubmit
              }
            >

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
              />

              <input
                type="text"
                name="source"
                placeholder="Source"
                value={
                  formData.source
                }
                onChange={
                  handleChange
                }
              />

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
              >

                <option value="New">
                  New
                </option>

                <option value="Contacted">
                  Contacted
                </option>

                <option value="Converted">
                  Converted
                </option>

              </select>

              <textarea
                name="notes"
                placeholder="Notes"
                value={
                  formData.notes
                }
                onChange={
                  handleChange
                }
              />

              <div className="modal-buttons">

                <button type="submit">
                  Save
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(
                      false
                    )
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}