const data = [
  {
    name: "John Doe",
    status: "Active",
    company: "Acme Corp",
    lastOnline: "2024-10-20",
  },
  {
    name: "Jane Smith",
    status: "Inactive",
    company: "Beta LLC",
    lastOnline: "2024-10-18",
  },
  {
    name: "Alice Johnson",
    status: "Active",
    company: "Gamma Inc",
    lastOnline: "2024-10-19",
  },
];

export default async function ClientListing() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-caribbeanCurrant text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Last Online</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastOnline}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href="#" className="text-blue-600 hover:underline">
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
