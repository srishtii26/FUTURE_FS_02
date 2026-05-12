import axios from "axios";

import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";


export default function Tasks() {

  const [tasks, setTasks] =
    useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      leadName: "",
      dueDate: "",
      status: "Pending",
      priority: "Medium",
    });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await axios.get(
          "https://future-fs-02-crm-backend.onrender.com/api/tasks",
          {
            headers: {
              Authorization:
                token,
            },
          }
        );

      setTasks(res.data);

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
        "https://future-fs-02-crm-backend.onrender.com/api/tasks",
        formData,
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      fetchTasks();

      setShowModal(false);

      setFormData({
        title: "",
        leadName: "",
        dueDate: "",
        status: "Pending",
      });

    } catch (error) {

      console.log(error);

    }
  };

  const updateTask = async (
    id,
    status
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.put(
        `https://future-fs-02-crm-backend.onrender.com/api/tasks/${id}`,
        { status },
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }
  };

  const deleteTask = async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.delete(
        `https://future-fs-02-crm-backend.onrender.com/api/tasks/${id}`,
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      fetchTasks();

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
              Tasks
            </h1>

            <p>
              Manage follow-ups
            </p>

          </div>

          <button
            className="add-btn"
            onClick={() =>
              setShowModal(true)
            }
          >
            + Add Task
          </button>

        </div>

        {/* TASK STATS */}
        <div className="cards">

          <div className="card">
            <h3>Total Tasks</h3>
            <h1>
              {tasks.length}
            </h1>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h1>

              {
                tasks.filter(
                  (task) =>
                    task.status ===
                    "Pending"
                ).length
              }

            </h1>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h1>

              {
                tasks.filter(
                  (task) =>
                    task.status ===
                    "Completed"
                ).length
              }

            </h1>
          </div>

          <div className="card">
            <h3>Overdue</h3>
            <h1>3</h1>
          </div>

        </div>

        {/* TASK TABLE */}
        <div className="table-card">

          <div className="table-header">

            <h2>
              Follow-up Tasks
            </h2>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>Task</th>
                  <th>Lead</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {tasks.map(
                  (task) => (

                    <tr
  key={task._id}
  className={
    new Date(task.dueDate) <
      new Date() &&
    task.status !== "Completed"
      ? "overdue-row"
      : ""
  }
>
                      <td>
                        {task.title}
                      </td>

                      <td>
                        {task.leadName}
                      </td>

                      <td>
                        {task.dueDate}
                      </td>

                      <td>

                        <select
                          value={
                            task.status
                          }
                          onChange={(
                            e
                          ) =>
                            updateTask(
                              task._id,
                              e.target
                                .value
                            )
                          }
                        >

                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Completed">
                            Completed
                          </option>

                        </select>

                      </td>
                      <td>

  <span
    className={`priority-badge ${task.priority.toLowerCase()}`}
  >
    {task.priority}
  </span>

</td>

                      <td>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            deleteTask(
                              task._id
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

      </main>

      {/* MODAL */}
      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              Add Task
            </h2>

            <form
              onSubmit={
                handleSubmit
              }
            >

              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={
                  formData.title
                }
                onChange={
                  handleChange
                }
                required
              />

              <input
                type="text"
                name="leadName"
                placeholder="Lead Name"
                value={
                  formData.leadName
                }
                onChange={
                  handleChange
                }
                required
              />

              <input
                type="date"
                name="dueDate"
                value={
                  formData.dueDate
                }
                onChange={
                  handleChange
                }
                required
              />
              <select
  name="priority"
  value={formData.priority}
  onChange={handleChange}
>

  <option value="Low">
    Low
  </option>

  <option value="Medium">
    Medium
  </option>

  <option value="High">
    High
  </option>

</select>

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