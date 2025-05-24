// utils/exportUtils.js
import { utils, writeFile } from "xlsx";


export const exportToExcel = (data, filename) => {
  if (!data || data.length === 0) return;

  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Responses");
  writeFile(workbook, `${filename}.xlsx`);
};


export const exportToCSV = (data, filename) => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);

  // Format header row
  let csvContent = "\ufeff"; 
  csvContent +=
    headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(",") + "\r\n";

  // Format data rows
  data.forEach((row) => {
    const rowValues = headers.map((header) => {
      const value = row[header];

      if (value === null || value === undefined) return '""';

      // Special formatting for Excel
      if (typeof value === "number" && value.toString().length > 10) {
        return `="${value}"`; // Prevent scientific notation
      }

      if (value instanceof Date || header.toLowerCase().includes("date")) {
        return `"${new Date(value).toISOString()}"`;
      }

      return `"${String(value).replace(/"/g, '""')}"`;
    });

    csvContent += rowValues.join(",") + "\r\n";
  });

  
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
