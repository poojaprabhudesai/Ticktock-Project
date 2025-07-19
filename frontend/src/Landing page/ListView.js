import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListView() {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addEntry");
  };

  const hoursWorked = 20;
  const totalHours = 40;
  const percentage = (hoursWorked / totalHours) * 100;

  return (
    <div className="h-screen">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand text-black font-bold" href="/">
            ticktock
          </a>
          <div className="navbar-nav">
            <a className="nav-link active text-black font-medium text-lg ms-4 underline" href="#">
              Timesheets
            </a>
          </div>
          <div className="ms-auto">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle text-black text-lg text-muted font-medium cursor-pointer"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                John Doe
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container shadow mt-5">
        {/* Header Section */}
        <div className="flex items-center justify-between p-3">
          <div>
            <p className="font-bold text-lg">This week's timesheet</p>
            <p className="text-sm text-gray-500">21 - 26 January, 2024</p>
          </div>
          <div className="relative w-[220px]">
            <div className="absolute -top-8 left-[50%] -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-sm font-medium text-gray-900 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white">
              {hoursWorked}/{totalHours} hrs
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full h-2 bg-gray-200 rounded">
                <div
                  className="absolute top-0 left-0 h-2 bg-orange-400 rounded"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">100%</span>
            </div>
          </div>
        </div>

        {/* Timesheet Rows */}
        {["21", "22", "23", "24"].map((day, dayIndex) => (
          <div className="row mt-3" key={dayIndex}>
            <h3 className="col-2 px-4 text-sm">{day} Jan</h3>
            <div className="col-10">
              {[1, 2, 3].map((item, itemIndex) => {
                const itemId = `${dayIndex}-${itemIndex}`;
                return (
                  <div
                    key={itemId}
                    className="flex justify-between border border-gray-200 rounded-lg p-2 bg-white shadow-sm mb-2"
                  >
                    <p className="text-sm font-medium text-gray-900 mt-3">
                      Homepage Development
                    </p>
                    <div className="text-xs text-gray-500 mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3 relative">
                      <span className="bg-blue-100 text-blue-800 p-2 rounded">Project Name</span>
                      <span>4hrs</span>
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenDropdownId(openDropdownId === itemId ? null : itemId)
                          }
                          className="flex items-center space-x-1 p-2"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                        </button>
                        {openDropdownId === itemId && (
                          <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow z-10">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Add
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Edit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add New Entry Button */}
              <div
                className="flex justify-center border border-gray-200 border-dashed rounded-lg p-2 bg-white shadow-sm mb-2"
                onClick={handleClick}
              >
                <p className="text-sm font-medium text-gray-500 mt-3">+ Add New Text</p>
              </div>
            </div>
          </div>
        ))}

        {/* Final Day (25 Jan) */}
        <div className="row mt-3">
          <h3 className="col-2 px-4 text-sm">25 Jan</h3>
          <div className="col-10">
            <div
              className="flex justify-center border border-gray-200 border-dashed rounded-lg p-2 bg-white shadow-sm mb-2"
              onClick={handleClick}
            >
              <p className="text-sm font-medium text-gray-500 mt-3 text-center">
                + Add New Text
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container text-center border shadow-md text-sm max-w-5xl rounded-lg text-gray-400 mt-6 mb-5 p-3 bg-white">
        © 2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}

export default ListView;


