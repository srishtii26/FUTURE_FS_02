import Sidebar from "../components/Sidebar";

import axios from "axios";

import {
  useState,
} from "react";

export default function Clients() {

  const [file, setFile] =
    useState(null);

  const [uploadedFiles,
    setUploadedFiles] =
    useState([]);

  const [email, setEmail] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [sentEmails,
    setSentEmails] =
    useState([]);

  const clients = [

    {
      name: "John Carter",
      company: "Pixel Studio",
      revenue: "$12K",
      status: "Active",
      role: "Enterprise Client",
    },

    {
      name: "Sarah Smith",
      company: "Growthly",
      revenue: "$8K",
      status: "Pending",
      role: "Marketing Partner",
    },

    {
      name: "David Lee",
      company: "NextGen",
      revenue: "$15K",
      status: "Active",
      role: "Premium Client",
    },

  ];

  const uploadFile = async () => {

    if (!file) return;

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    try {

      await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setUploadedFiles([
        ...uploadedFiles,
        file.name,
      ]);

      alert(
        "File uploaded successfully"
      );

    } catch (error) {

      console.log(error);

    }
  };

  const sendEmail = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/mail/send",
        {
          email,
          subject,
          message,
        }
      );

      const newMail = {

        email,
        subject,

      };

      setSentEmails([
        ...sentEmails,
        newMail,
      ]);

      alert(
        "Email sent successfully"
      );

      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>
              Clients
            </h1>

            <p>
              Manage client relationships,
              communications & documents
            </p>

          </div>

        </div>

        {/* CLIENT STATS */}
        <div className="cards">

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Total Clients
              </h3>

              <span className="trend up">
                ↑ 12%
              </span>

            </div>

            <h1>
              48
            </h1>

            <p>
              Active business clients
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Revenue
              </h3>

              <span className="trend up">
                ↑ 18%
              </span>

            </div>

            <h1>
              $48K
            </h1>

            <p>
              Monthly recurring revenue
            </p>

          </div>

          <div className="card analytics-card">

            <div className="analytics-top">

              <h3>
                Retention
              </h3>

              <span className="trend up">
                ↑ 6%
              </span>

            </div>

            <h1>
              92%
            </h1>

            <p>
              Client retention rate
            </p>

          </div>

        </div>

        {/* CLIENT TABLE */}
        <div className="table-card">

          <div className="table-header">

            <h2>
              Client Directory
            </h2>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>Name</th>
                  <th>Company</th>
                  <th>Revenue</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {clients.map(
                  (client, index) => (

                    <tr key={index}>

                      <td>
                        {client.name}
                      </td>

                      <td>
                        {client.company}
                      </td>

                      <td>
                        {client.revenue}
                      </td>

                      <td>

                        <span
                          className={`client-status ${client.status.toLowerCase()}`}
                        >
                          {client.status}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* CLIENT PROFILES */}
        <div className="profile-grid">

          {clients.map(
            (client, index) => (

              <div
                className="profile-card"
                key={index}
              >

                <div className="profile-avatar">

                  {client.name
                    .split(" ")
                    .map(
                      (word) =>
                        word[0]
                    )
                    .join("")}

                </div>

                <h3>
                  {client.name}
                </h3>

                <p>
                  {client.role}
                </p>

                <button>
                  View Profile
                </button>

              </div>

            )
          )}

        </div>

        {/* FILE UPLOAD */}
        <div className="upload-card">

          <div className="section-header">

            <div>

              <h2>
                Upload Documents
              </h2>

              <p>
                Upload contracts,
                invoices and reports
              </p>

            </div>

          </div>

          <div className="upload-area">

            <input
              type="file"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />

            <button
              className="upload-btn"
              onClick={uploadFile}
            >
              Upload File
            </button>

          </div>

          {/* FILE LIST */}
          <div className="file-list">

            {uploadedFiles.length === 0 ? (

              <div className="empty-state">
                No documents uploaded yet
              </div>

            ) : (

              uploadedFiles.map(
                (item, index) => (

                  <div
                    className="file-item"
                    key={index}
                  >
                    📄 {item}
                  </div>

                )
              )

            )}

          </div>

        </div>

        {/* EMAIL SECTION */}
        <div className="upload-card">

          <div className="section-header">

            <div>

              <h2>
                Send Client Email
              </h2>

              <p>
                Send follow-ups and
                communication updates
              </p>

            </div>

          </div>

          <div className="email-form">

            <input
              type="email"
              placeholder="Client Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) =>
                setSubject(
                  e.target.value
                )
              }
            />

            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
            />

            <button
              className="upload-btn"
              onClick={sendEmail}
            >
              Send Email
            </button>

          </div>

          {/* EMAIL HISTORY */}
          <div className="file-list">

            {sentEmails.length === 0 ? (

              <div className="empty-state">
                No emails sent yet
              </div>

            ) : (

              sentEmails.map(
                (mail, index) => (

                  <div
                    className="file-item"
                    key={index}
                  >
                    ✉️ {mail.subject}
                    — {mail.email}
                  </div>

                )
              )

            )}

          </div>

        </div>

      </main>

    </div>

  );
}