const rows = [
    { name: "John Doe", email: "john@example.com", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
    { name: "Bob Lee", email: "bob@example.com", status: "Inactive" },
  ];
  
  const DataTable = () => (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow w-full">
      <h2 className="text-lg font-semibold mb-4">📋 User Table</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-green-700 dark:text-green-300">
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-white">
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-green-100 dark:border-zinc-700">
              <td className="py-2">{row.name}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default DataTable;
  