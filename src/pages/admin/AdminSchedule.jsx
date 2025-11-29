export default function AdminSchedule() {
  const schedules = [
    { id: 1, event: 'Google Tech Talk', time: '10:00 AM', date: 'Nov 30', venue: 'Hall A' },
    { id: 2, event: 'Amazon Workshop', time: '2:00 PM', date: 'Nov 30', venue: 'Hall B' },
    { id: 3, event: 'Infosys Info Session', time: '4:00 PM', date: 'Dec 1', venue: 'Hall C' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Event Schedule</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          + Add Event
        </button>
      </div>
      <div className="grid gap-4">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{schedule.event}</h3>
              <p className="text-gray-500">{schedule.date} at {schedule.time} • {schedule.venue}</p>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Edit</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
