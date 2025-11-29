export default function AdminSchedule() {
  const schedules = [
    { id: 1, event: 'Google Tech Talk', time: '10:00 AM', date: 'Nov 30', venue: 'Hall A' },
    { id: 2, event: 'Amazon Workshop', time: '2:00 PM', date: 'Nov 30', venue: 'Hall B' },
    { id: 3, event: 'Infosys Info Session', time: '4:00 PM', date: 'Dec 1', venue: 'Hall C' },
  ];

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="row space-between mb-6">
        <h1 className="title-xl" style={{ marginBottom: 0 }}>Event Schedule</h1>
        <button className="btn btn-green">+ Add Event</button>
      </div>
      <div style={{ display: 'grid', gap: 16 }}>
        {schedules.map((schedule) => (
          <div key={schedule.id} className="card row space-between">
            <div>
              <h3 className="title-lg" style={{ marginBottom: 4 }}>{schedule.event}</h3>
              <p className="muted">{schedule.date} at {schedule.time} • {schedule.venue}</p>
            </div>
            <div>
              <button className="btn btn-blue" style={{ marginRight: 8 }}>Edit</button>
              <button className="btn btn-red">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
