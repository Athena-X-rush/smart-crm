const summaryList = [
  { title: 'New leads', count: '148', text: '22 added this week' },
  { title: 'Open deals', count: '31', text: '7 need follow-up' },
  { title: 'Expected payment', count: '$18,400', text: 'for this month' }
]

const leadRows = [
  { name: 'Arjun Mehta', company: 'Bright Pixel', status: 'New', owner: 'Riya', value: '$3,200' },
  { name: 'Sara Khan', company: 'North Wind', status: 'Qualified', owner: 'Aman', value: '$5,600' },
  { name: 'Daniel Lee', company: 'Blue Harbor', status: 'Proposal', owner: 'Nisha', value: '$8,300' },
  { name: 'Priya Sharma', company: 'Urban Hive', status: 'Negotiation', owner: 'Riya', value: '$6,900' }
]

const tasks = [
  { title: 'Call back Bright Pixel', time: '10:30 AM' },
  { title: 'Send updated proposal', time: '12:15 PM' },
  { title: 'Check payment status', time: '2:00 PM' },
  { title: 'Evening sales review', time: '5:30 PM' }
]

const updates = [
  'Bright Pixel moved to proposal stage',
  'North Wind contact details updated',
  'Urban Hive meeting shifted to Friday',
  'Blue Harbor asked for revised pricing'
]

function App() {
  return (
    <div className="crm-page">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-mark">SC</div>
          <div>
            <h1>Smart CRM</h1>
            <p>sales and client work</p>
          </div>
        </div>

        <div className="menu-title">Main</div>
        <nav className="nav-list">
          <a className="active-link" href="/">Dashboard</a>
          <a href="/">Leads</a>
          <a href="/">Contacts</a>
          <a href="/">Deals</a>
          <a href="/">Tasks</a>
          <a href="/">Reports</a>
        </nav>

        <div className="target-box">
          <p>This month target</p>
          <strong>$75,000</strong>
          <span>Done so far: $48,900</span>
        </div>
      </aside>

      <main className="content-area">
        <div className="header-row">
          <div>
            <p className="small-text">Dashboard</p>
            <h2>Welcome back, Mayank</h2>
            <p className="sub-text">You can check leads, tasks and daily updates from here.</p>
          </div>

          <div className="header-actions">
            <input type="text" placeholder="Search leads" />
            <button type="button">Add lead</button>
          </div>
        </div>

        <div className="summary-row">
          {summaryList.map((item) => (
            <div className="summary-box" key={item.title}>
              <p>{item.title}</p>
              <strong>{item.count}</strong>
              <span>{item.text}</span>
            </div>
          ))}
          <div className="summary-box summary-box-last">
            <p>Pending tasks</p>
            <strong>14</strong>
            <span>4 overdue today</span>
          </div>
        </div>

        <div className="content-grid">
          <section className="main-block">
            <div className="box-head">
              <h3>Deal stages</h3>
              <a href="/">view all</a>
            </div>

            <div className="stage-row">
              <div className="stage-box">
                <h4>New</h4>
                <strong>12</strong>
                <p>$7,800</p>
              </div>
              <div className="stage-box">
                <h4>Qualified</h4>
                <strong>9</strong>
                <p>$11,200</p>
              </div>
              <div className="stage-box">
                <h4>Proposal</h4>
                <strong>6</strong>
                <p>$16,700</p>
              </div>
              <div className="stage-box">
                <h4>Negotiation</h4>
                <strong>4</strong>
                <p>$13,400</p>
              </div>
            </div>

            <div className="table-box">
              <div className="box-head">
                <h3>Recent leads</h3>
                <a href="/">manage</a>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Status</th>
                      <th>Owner</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadRows.map((item) => (
                      <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td><span className="status-tag">{item.status}</span></td>
                        <td>{item.owner}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <aside className="right-block">
            <div className="side-box">
              <div className="box-head">
                <h3>Today tasks</h3>
                <a href="/">open</a>
              </div>

              <div className="task-items">
                {tasks.map((item) => (
                  <div className="task-item" key={item.title}>
                    <div>
                      <strong>{item.title}</strong>
                    </div>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="side-box">
              <div className="box-head">
                <h3>Quick updates</h3>
              </div>

              <ul className="update-list">
                {updates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App
