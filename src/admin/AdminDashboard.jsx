import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  FaSync,
  FaExclamationTriangle,
  FaTable,
  FaClipboardList,
  FaFileExport,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaEye,
  FaThLarge,
  FaWhatsapp, // Import WhatsApp icon
} from "react-icons/fa";
import { Modal } from "antd";
import "../styles/AdminDashboard.css";
import { exportToCSV } from "../../src/utils/exportUtils";

function AdminDashboard() {
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [viewMode, setViewMode] = useState("table");

  const getDriveDownloadLink = (url) => {
    if (
      typeof url === "string" &&
      url.startsWith("https://drive.google.com") &&
      url.includes("/file/d/")
    ) {
      const match = url.match(/\/file\/d\/([^/]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
    }
    return null;
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/v1/forms/form/responses", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ADMIN_SECRET}`,
        },
      });
      setResponses(res.data.data);

      if (res.data.data.length > 0) {
        const allColumns = Object.keys(res.data.data[0]);
        const initialVisible = {};
        const defaultVisible = [
          "Timestamp",
          "1. Institution Name",
          "2. Institution Type",
          "Email address",
        ];
        allColumns.forEach((col) => {
          initialVisible[col] = defaultVisible.includes(col);
        });
        setVisibleColumns(initialVisible);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch responses. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    exportToCSV(filteredData, "form-responses");
  };

  const handleSendReminders = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to send event reminders to all applicants?"
      );
      if (!confirm) return;

      const res = await axios.post(
        "/api/v1/forms/form/send-event-reminders",
        {},
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ADMIN_SECRET}`,
          },
        }
      );

      alert(res.data.message || "Reminders sent successfully!");
    } catch (error) {
      console.error("Reminder error:", error);
      alert("Failed to send reminders.");
    }
  };

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const showResponseDetails = (response) => {
    setSelectedResponse(response);
    setViewModalVisible(true);
  };

  const handleColumnSelectAll = (e) => {
    const newVisible = {};
    Object.keys(visibleColumns).forEach((col) => {
      newVisible[col] = e.target.checked;
    });
    setVisibleColumns(newVisible);
  };

  const handleShareOnWhatsApp = () => {
    if (!selectedResponse) return;

    let message = "🌟 New Form Response Details:\n\n";

    Object.entries(selectedResponse).forEach(([key, val]) => {
      if (
        key ===
        "13.Upload accreditations, recognition letters, research/placement highlights, or other supporting documents."
      ) {
        const urlRegex = /(https?:\/\/[^\s,]+)/g;
        const links = typeof val === "string" ? val.match(urlRegex) || [] : [];
        if (links.length > 0) {
          message += `📄 ${key}:\n`;
          links.forEach((link) => {
            message += `  - ${link}\n`;
          });
        } else {
          message += `📄 ${key}: N/A\n`;
        }
      } else {
        const formattedVal =
          String(val).length > 200
            ? `${String(val).substring(0, 200)}... (full details in dashboard)`
            : String(val);
        message += `➡️ ${key}: ${formattedVal || "N/A"}\n`;
      }
    });

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const filteredData = useMemo(() => {
    return responses.filter((row) =>
      Object.entries(row).some(([, val]) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [responses, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header-container">
        <h2 className="dashboard-header">
          <FaTable /> Form Responses
        </h2>

        <div className="dashboard-actions">
          <button onClick={handleExport} className="export-button">
            <FaFileExport /> Download to CSV
          </button>

          <button onClick={fetchData} className="refresh-button">
            <FaSync /> Refresh
          </button>

          <button
            onClick={() =>
              setViewMode((prev) => (prev === "table" ? "grid" : "table"))
            }
            className="toggle-view-button"
          >
            <FaThLarge /> {viewMode === "table" ? "Grid View" : "Table View"}
          </button>

          <button
            onClick={handleSendReminders}
            className="send-reminder-button"
          >
            <FaClipboardList /> Send "Awaiting Confirmation" Emails
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <FaExclamationTriangle /> {error}
        </div>
      )}

      <div className="dashboard-controls">
        <p className="total-respondents">
          Total Respondents: {responses.length}
        </p>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search responses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="filter-container">
            <FaFilter className="filter-icon" />
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>

          <div className="column-selector">
            <button
              className="column-selector-button"
              onClick={(e) => {
                e.stopPropagation();
                document
                  .getElementById("column-dropdown")
                  .classList.toggle("show");
              }}
            >
              Columns <FaChevronDown />
            </button>
            <div id="column-dropdown" className="column-dropdown">
              <div className="column-select-all">
                <label>
                  <input
                    type="checkbox"
                    checked={Object.values(visibleColumns).every((v) => v)}
                    onChange={handleColumnSelectAll}
                  />
                  Select All
                </label>
              </div>
              {responses[0] &&
                Object.keys(responses[0]).map((column) => (
                  <label key={column} className="column-option">
                    <input
                      type="checkbox"
                      checked={visibleColumns[column]}
                      onChange={() => toggleColumnVisibility(column)}
                    />
                    <span className="column-name">{column}</span>
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading responses...</p>
        </div>
      ) : filteredData.length === 0 ? (
        <div className="no-responses">
          <FaClipboardList size={48} />
          <p>No matching responses found</p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="clear-search-button"
            >
              Clear search
            </button>
          )}
        </div>
      ) : viewMode === "table" ? (
        <>
          <div className="table-container">
            <div className="table-scroll-wrapper">
              <table className="responses-table">
                <thead>
                  <tr>
                    <th className="action-column">View</th>
                    {responses[0] &&
                      Object.keys(responses[0]).map(
                        (key) =>
                          visibleColumns[key] && (
                            <th key={key}>
                              <div className="th-content">
                                <span className="column-header">{key}</span>
                              </div>
                            </th>
                          )
                      )}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((res, i) => (
                    <tr key={i}>
                      <td className="action-cell">
                        <button
                          onClick={() => showResponseDetails(res)}
                          className="view-button"
                        >
                          <FaEye />
                        </button>
                      </td>
                      {Object.entries(res).map(([key, val]) =>
                        visibleColumns[key] ? (
                          <td key={key}>
                            <div className="cell-content">
                              {key ===
                                "13.Upload accreditations, recognition letters, research/placement highlights, or other supporting documents." &&
                              typeof val === "string" &&
                              val.startsWith("https://drive.google.com") ? (
                                <a
                                  href={val}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="drive-link"
                                  style={{ wordBreak: "break-word" }}
                                >
                                  {val}
                                </a>
                              ) : String(val).length > 30 ? (
                                `${String(val).substring(0, 30)}...`
                              ) : (
                                val
                              )}
                            </div>
                          </td>
                        ) : null
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="page-info">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="grid-view-container">
          {paginatedData.map((res, index) => (
            <div key={index} className="grid-card">
              <div className="grid-card-header">
                <strong>{res["1. Institution Name"] || "No Title"}</strong>
                <button
                  onClick={() => showResponseDetails(res)}
                  className="view-button"
                >
                  <FaEye />
                </button>
              </div>
              <div className="grid-card-body">
                {Object.entries(res).map(([key, val]) =>
                  visibleColumns[key] ? (
                    <div key={key} className="grid-card-item">
                      <span className="grid-label">{key}:</span>{" "}
                      {key ===
                        "13.Upload accreditations, recognition letters, research/placement highlights, or other supporting documents." &&
                      typeof val === "string" &&
                      val.startsWith("https://drive.google.com") ? (
                        <a
                          href={val}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="drive-link"
                          style={{ wordBreak: "break-word" }}
                        >
                          {val}
                        </a>
                      ) : String(val).length > 100 ? (
                        `${String(val).substring(0, 100)}...`
                      ) : (
                        val
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        title="Response Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={null}
        width="80%"
        className="response-modal"
      >
        {selectedResponse && (
          <div className="response-details">
            {Object.entries(selectedResponse).map(([key, val]) => {
              if (
                key ===
                "13.Upload accreditations, recognition letters, research/placement highlights, or other supporting documents."
              ) {
                const urlRegex = /(https?:\/\/[^\s,]+)/g;
                const links =
                  typeof val === "string" ? val.match(urlRegex) || [] : [];

                return (
                  <div key={key} className="detail-row">
                    <div className="detail-label">{key}:</div>
                    <div className="detail-value">
                      {links.length > 0 ? (
                        links.map((link, i) => {
                          const driveDownloadLink = getDriveDownloadLink(link);
                          return (
                            <div key={i} style={{ marginBottom: "6px" }}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  wordBreak: "break-word",
                                  color: "#0f1c33",
                                  marginRight: "10px",
                                }}
                              >
                                {link}
                              </a>
                              {driveDownloadLink && (
                                <a
                                  href={driveDownloadLink}
                                  download
                                  className="download-button"
                                  style={{
                                    backgroundColor: "#0f1c33",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "4px",
                                    textDecoration: "none",
                                    fontSize: "0.8em",
                                  }}
                                >
                                  Download
                                </a>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <span className="empty-value">N/A</span>
                      )}
                    </div>
                  </div>
                );
              }

              const downloadLink = getDriveDownloadLink(val);
              return (
                <div key={key} className="detail-row">
                  <div className="detail-label">{key}:</div>
                  <div className="detail-value">
                    {val ? (
                      <>
                        {typeof val === "string" &&
                        (val.startsWith("http://") ||
                          val.startsWith("https://")) ? (
                          <a
                            href={String(val)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              wordBreak: "break-all",
                              marginRight: "10px",
                            }}
                          >
                            {String(val).length > 50
                              ? `${String(val).substring(0, 50)}...`
                              : val}
                          </a>
                        ) : (
                          <span>
                            {String(val).length > 50
                              ? `${String(val).substring(0, 50)}...`
                              : val}
                          </span>
                        )}

                        {downloadLink && (
                          <a
                            href={downloadLink}
                            download
                            className="download-button"
                            style={{
                              backgroundColor: "#0f1c33",
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "4px",
                              textDecoration: "none",
                              fontSize: "0.8em",
                            }}
                          >
                            Download
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="empty-value">N/A</span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="detail-row">
              <div className="detail-label">Share:</div>
              <div className="detail-value">
                <button
                  onClick={handleShareOnWhatsApp}
                  className="whatsapp-share-button"
                >
                  <FaWhatsapp /> Share All Details on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default AdminDashboard;
