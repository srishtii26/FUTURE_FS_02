import axios from "axios";

import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";


export default function Pipeline() {

  const [leads, setLeads] =
    useState([]);
const [selectedLead, setSelectedLead] =
  useState(null);
  useEffect(() => {
    fetchLeads();
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

  const newLeads =
    leads.filter(
      (lead) =>
        lead.status === "New"
    );

  const contactedLeads =
    leads.filter(
      (lead) =>
        lead.status ===
        "Contacted"
    );

  const convertedLeads =
    leads.filter(
      (lead) =>
        lead.status ===
        "Converted"
    );
const onDragEnd = (result) => {

  if (!result.destination)
    return;

};
  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>
              CRM Pipeline
            </h1>

            <p>
              Visual lead workflow
            </p>

          </div>

        </div>

        {/* PIPELINE */}
        

  <div className="pipeline-grid">
          {/* NEW */}
         

<div className="pipeline-column">

  <h2>
    New Leads
  </h2>
            {newLeads.map(
              (lead) => (

                <div
  className="pipeline-card"
  key={lead._id}
  onClick={() =>
    setSelectedLead(lead)
  }
>

                  <h3>
                    {lead.name}
                  </h3>

                  <p>
                    {lead.email}
                  </p>

                  <span>
                    {lead.source}
                  </span>

                </div>

              )
            )}


          </div>

          {/* CONTACTED */}
          <div className="pipeline-column">

            <h2>
              Contacted
            </h2>

            {contactedLeads.map(
              (lead) => (

                <div
                  className="pipeline-card"
                  key={lead._id}
                >

                  <h3>
                    {lead.name}
                  </h3>

                  <p>
                    {lead.email}
                  </p>

                  <span>
                    {lead.source}
                  </span>

                </div>

              )
            )}

          </div>

          {/* CONVERTED */}
          <div className="pipeline-column">

            <h2>
              Converted
            </h2>

            {convertedLeads.map(
              (lead) => (

                <div
                  className="pipeline-card"
                  key={lead._id}
                >

                  <h3>
                    {lead.name}
                  </h3>

                  <p>
                    {lead.email}
                  </p>

                  <span>
                    {lead.source}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        
{/* LEAD DRAWER */}

{selectedLead && (

  <div className="lead-drawer">

    <button
      className="close-drawer"
      onClick={() =>
        setSelectedLead(null)
      }
    >
      ✕
    </button>

    <h2>
      {selectedLead.name}
    </h2>

    <p className="drawer-email">
      {selectedLead.email}
    </p>

    <div className="drawer-section">

      <h4>
        Lead Source
      </h4>

      <span>
        {selectedLead.source}
      </span>

    </div>

    <div className="drawer-section">

      <h4>
        Status
      </h4>

      <span>
        {selectedLead.status}
      </span>

    </div>

    <div className="drawer-section">

      <h4>
        Notes
      </h4>

      <p>
        {selectedLead.notes ||
          "No notes added"}
      </p>

    </div>

  </div>

)}
      </main>

    </div>
  );
}