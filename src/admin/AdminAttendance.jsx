import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import "../styles/AdminAttendance.css";

const AdminAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("table");
  const [modalData, setModalData] = useState(null); // data for modal
  const [filterTerm, setFilterTerm] = useState(""); // New state for filter term

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/v1/attendance/attending");
        setAttendanceData(res.data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="admin-attendance__loading">
        Loading attendance data...
      </div>
    );

  if (!attendanceData.length)
    return (
      <div className="admin-attendance__no-records">
        No attendance records found.
      </div>
    );

  const headers = Object.keys(attendanceData[0]);

  // Modal close handler
  const closeModal = () => setModalData(null);

  // Filtered attendance data
  const filteredAttendanceData = attendanceData.filter((row) => {
    // If filter term is empty, show all data
    if (!filterTerm) return true;

    // Convert filter term to lowercase for case-insensitive search
    const lowerCaseFilterTerm = filterTerm.toLowerCase();

    // Check if any header's corresponding value in the row includes the filter term
    return headers.some((header) => {
      const value = String(row[header]).toLowerCase();
      return value.includes(lowerCaseFilterTerm);
    });
  });

  // Modal component (remains unchanged)
  const Modal = ({ data, onClose }) => (
    <div className="admin-attendance__modal-overlay" onClick={onClose}>
      <div
        className="admin-attendance__modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <button
          className="admin-attendance__modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3>Attendee Details</h3>
        <div className="admin-attendance__modal-body">
          {headers.map((header) => (
            <p key={header}>
              <strong>{header}:</strong> {data[header]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-attendance">
      <div className="admin-attendance__controls">
        <div className="admin-attendance__toggle-buttons">
          <button
            className={`admin-attendance__toggle-button ${
              viewMode === "table"
                ? "admin-attendance__toggle-button--active"
                : ""
            }`}
            onClick={() => setViewMode("table")}
          >
            Table View
          </button>
          <button
            className={`admin-attendance__toggle-button ${
              viewMode === "grid"
                ? "admin-attendance__toggle-button--active"
                : ""
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid View
          </button>
        </div>

        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter attendees..."
          className="admin-attendance__filter-input"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />

        <div className="admin-attendance__total-count">
          Total Attendees: {filteredAttendanceData.length}
        </div>

        <CSVLink
          data={filteredAttendanceData} // Export filtered data
          headers={headers.map((h) => ({ label: h, key: h }))}
          filename={"attendance_data.csv"}
          className="admin-attendance__csv-export-button"
        >
          Export to CSV
        </CSVLink>
      </div>

      {viewMode === "table" ? (
        <div className="admin-attendance__table-container">
          <table className="admin-attendance__table">
            <thead className="admin-attendance__table-header">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="admin-attendance__table-heading">
                    {header}
                  </th>
                ))}
                <th className="admin-attendance__table-heading">View</th>
              </tr>
            </thead>
            <tbody className="admin-attendance__table-body">
              {filteredAttendanceData.map(
                (
                  row,
                  idx // Render filtered data
                ) => (
                  <tr key={idx} className="admin-attendance__table-row">
                    {headers.map((header) => (
                      <td key={header} className="admin-attendance__table-data">
                        {row[header]}
                      </td>
                    ))}
                    <td className="admin-attendance__table-data">
                      <button
                        className="admin-attendance__view-btn"
                        onClick={() => setModalData(row)}
                        aria-label={`View details of ${row[headers[0]]}`}
                      >
                        👁️
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="admin-attendance__grid-view">
          {filteredAttendanceData.map(
            (
              row,
              idx // Render filtered data
            ) => (
              <div className="admin-attendance__grid-card" key={idx}>
                {headers.map((header) => (
                  <p key={header} className="admin-attendance__grid-item">
                    <strong className="admin-attendance__grid-item-label">
                      {header}:
                    </strong>{" "}
                    {row[header]}
                  </p>
                ))}
                <button
                  className="admin-attendance__view-btn"
                  onClick={() => setModalData(row)}
                  aria-label={`View details of ${row[headers[0]]}`}
                >
                  👁️ View Details
                </button>
              </div>
            )
          )}
        </div>
      )}

      {modalData && <Modal data={modalData} onClose={closeModal} />}
    </div>
  );
};

export default AdminAttendance;
