import React from 'react';

const timesheets = [
  { week: 1, date: '1 - 5 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 2, date: '8 - 12 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 3, date: '15 - 19 January, 2024', status: 'INCOMPLETE', action: 'Update' },
  { week: 4, date: '22 - 26 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 5, date: '28 January - 1 February, 2024', status: 'MISSING', action: 'Create' },
];

const getStatusBadge = (status) => {
  const base = "text-xs font-medium px-2 py-1 rounded";
  switch (status) {
    case 'COMPLETED':
      return <span className={`${base} bg-green-100 text-green-800`}>{status}</span>;
    case 'INCOMPLETE':
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status}</span>;
    case 'MISSING':
      return <span className={`${base} bg-pink-100 text-pink-800`}>{status}</span>;
    default:
      return <span className={base}>{status}</span>;
  }
};

function TableView() {
  return (
    <div className='h-screen' >
        {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm ">
        <div className="container-fluid ">
          <a className="navbar-brand text-black font-bold text-4xl" href="/">
            ticktock
          </a>

          <div className="navbar-nav">
            <a className="nav-link active text-black font-medium  text-lg ms-4 underline" href="/list">
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

      {/* Table Section */}
      <div className=" container bg-white shadow rounded-lg p-6 max-w-5xl  mt-8 ">
        <h2 className="text-lg font-semibold m-4">Your Timesheets</h2>
        <table className="w-full text-sm text-left shadow-sm  my-4">
          <thead className="text-gray-500  border-b" style={{ backgroundColor: '#F9FAFB' }}>
            <tr className='text-center '>
              <th className="py-3 ">WEEK #</th>
              <th className="py-3 ">DATE</th>
              <th className="py-3">STATUS</th>
              <th className="py-3  text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 border text-center">
            {timesheets.map((t, index) => (
              <tr key={index} className="border" >
                <td className="py-3 r ">{t.week}</td>
                <td className="py-3 ">{t.date}</td>
                <td className="py-3 ">{getStatusBadge(t.status)}</td>
                <td className="py-3  text-blue-600 cursor-pointer hover:underline">{t.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className=" container text-center border shadow-md mx-auto text-sm max-w-5xl rounded-lg  text-gray-400 mt-6 mb-4 p-3 bg-white">
        © 2024 tentwenty. All rights reserved.

      </footer>

    </div>

      
    
  );
}

export default TableView;
