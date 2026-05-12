import Sidebar from "../components/Sidebar";

export default function Settings() {

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>
              Settings
            </h1>

            <p>
              Manage your CRM preferences
            </p>

          </div>

        </div>

        {/* PROFILE */}
        <div className="settings-grid">

          <div className="settings-card">

            <h2>
              Profile
            </h2>

            <div className="profile-info">

              <div className="settings-avatar">
                SR
              </div>

              <div>

                <h3>
                  Srishti Rao
                </h3>

                <p>
                  CRM Administrator
                </p>

              </div>

            </div>

          </div>

          {/* ACCOUNT */}
          <div className="settings-card">

            <h2>
              Account Settings
            </h2>

            <div className="settings-option">
              Change Email
            </div>

            <div className="settings-option">
              Reset Password
            </div>

            <div className="settings-option">
              Two-Factor Authentication
            </div>

          </div>

          {/* NOTIFICATIONS */}
          <div className="settings-card">

            <h2>
              Notifications
            </h2>

            <div className="toggle-row">

              <span>
                Email Notifications
              </span>

              <input type="checkbox" checked readOnly />

            </div>

            <div className="toggle-row">

              <span>
                Lead Alerts
              </span>

              <input type="checkbox" checked readOnly />

            </div>

            <div className="toggle-row">

              <span>
                Weekly Reports
              </span>

              <input type="checkbox" readOnly />

            </div>

          </div>

          {/* THEME */}
          <div className="settings-card">

            <h2>
              Theme
            </h2>

            <div className="theme-options">

              <div className="theme-box light-theme">
                Light
              </div>

              <div className="theme-box dark-theme">
                Dark
              </div>

            </div>

          </div>

          {/* SECURITY */}
          <div className="settings-card">

            <h2>
              Security
            </h2>

            <div className="settings-option">
              Active Sessions
            </div>

            <div className="settings-option">
              Device Management
            </div>

            <div className="settings-option">
              Privacy Controls
            </div>

          </div>

          {/* LOGOUT */}
          <div className="settings-card">

            <h2>
              Account Actions
            </h2>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </div>

      </main>

    </div>

  );
}