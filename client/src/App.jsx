import { useEffect, useState } from 'react'

function App() {
  const [page, setPage] = useState(window.location.hash || '#/')
  const [leads, setLeads] = useState([])
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('New')

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '/'
    }

    function changePage() {
      setPage(window.location.hash || '#/')
    }

    window.addEventListener('hashchange', changePage)

    return () => {
      window.removeEventListener('hashchange', changePage)
    }
  }, [])

  function addLead(e) {
    e.preventDefault()

    if (name.trim() === '' || company.trim() === '') {
      return
    }

    const lead = {
      id: Date.now(),
      name: name.trim(),
      company: company.trim(),
      status: status
    }

    setLeads([lead, ...leads])
    setName('')
    setCompany('')
    setStatus('New')
    window.location.hash = '/leads'
  }

  const filteredLeads = leads.filter((lead) => {
    const text = (lead.name + ' ' + lead.company + ' ' + lead.status).toLowerCase()
    return text.includes(search.toLowerCase())
  })

  let newCount = 0
  let qualifiedCount = 0
  let proposalCount = 0

  for (let i = 0; i < leads.length; i++) {
    if (leads[i].status === 'New') {
      newCount++
    }

    if (leads[i].status === 'Qualified') {
      qualifiedCount++
    }

    if (leads[i].status === 'Proposal Sent') {
      proposalCount++
    }
  }

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
          <a href="#/" className={page === '#/' ? 'active-link' : ''}>Dashboard</a>
          <a href="#/leads" className={page === '#/leads' ? 'active-link' : ''}>Leads</a>
          <a href="#/contacts" className={page === '#/contacts' ? 'active-link' : ''}>Contacts</a>
          <a href="#/deals" className={page === '#/deals' ? 'active-link' : ''}>Deals</a>
          <a href="#/tasks" className={page === '#/tasks' ? 'active-link' : ''}>Tasks</a>
          <a href="#/reports" className={page === '#/reports' ? 'active-link' : ''}>Reports</a>
        </nav>

        <div className="target-box">
          <p>Total leads</p>
          <strong>{leads.length}</strong>
          <span>{newCount} new and {qualifiedCount} qualified</span>
        </div>
      </aside>

      <main className="content-area">
        {page === '#/' && (
          <>
            <div className="header-row">
              <div>
                <p className="small-text">Dashboard</p>
                <h2>Welcome to Smart CRM</h2>
                <p className="sub-text">Start by adding leads and keeping the pipeline moving.</p>
              </div>

              <div className="header-actions">
                <a className="primary-link-button" href="#/leads">Open leads</a>
              </div>
            </div>

            <div className="summary-row">
              <div className="summary-box">
                <p>Total leads</p>
                <strong>{leads.length}</strong>
                <span>All leads added in this app</span>
              </div>

              <div className="summary-box">
                <p>New leads</p>
                <strong>{newCount}</strong>
                <span>Fresh leads to review</span>
              </div>

              <div className="summary-box">
                <p>Qualified</p>
                <strong>{qualifiedCount}</strong>
                <span>Leads ready for follow-up</span>
              </div>

              <div className="summary-box summary-box-last">
                <p>Proposal sent</p>
                <strong>{proposalCount}</strong>
                <span>Leads waiting for response</span>
              </div>
            </div>

            <div className="content-grid">
              <section className="main-block">
                <div className="table-box">
                  <div className="box-head">
                    <h3>Recent leads</h3>
                    <a href="#/leads">manage</a>
                  </div>

                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Company</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.length > 0 ? (
                          leads.slice(0, 5).map((lead) => (
                            <tr key={lead.id}>
                              <td>{lead.name}</td>
                              <td>{lead.company}</td>
                              <td><span className="status-tag">{lead.status}</span></td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3">No leads yet. Add your first one from here.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <aside className="right-block">
                <div className="side-box">
                  <div className="box-head">
                    <h3>Add lead</h3>
                  </div>

                  <form className="lead-form" onSubmit={addLead}>
                    <label>
                      <span>Name</span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter lead name"
                      />
                    </label>

                    <label>
                      <span>Company</span>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
                      />
                    </label>

                    <label>
                      <span>Status</span>
                      <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>New</option>
                        <option>Qualified</option>
                        <option>Proposal Sent</option>
                      </select>
                    </label>

                    <button type="submit">Add lead</button>
                  </form>
                </div>
              </aside>
            </div>
          </>
        )}

        {page === '#/leads' && (
          <>
            <div className="header-row">
              <div>
                <p className="small-text">Leads</p>
                <h2>Lead management</h2>
                <p className="sub-text">Add leads, search them, and keep this section updated.</p>
              </div>

              <div className="header-actions">
                <input
                  type="text"
                  placeholder="Search by name or company"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="content-grid">
              <section className="main-block">
                <div className="table-box">
                  <div className="box-head">
                    <h3>All leads</h3>
                    <span className="table-count">{filteredLeads.length} shown</span>
                  </div>

                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Company</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredLeads.length > 0 ? (
                          filteredLeads.map((lead) => (
                            <tr key={lead.id}>
                              <td>{lead.name}</td>
                              <td>{lead.company}</td>
                              <td><span className="status-tag">{lead.status}</span></td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3">No matching leads found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <aside className="right-block">
                <div className="side-box">
                  <div className="box-head">
                    <h3>Add new lead</h3>
                  </div>

                  <form className="lead-form" onSubmit={addLead}>
                    <label>
                      <span>Name</span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter lead name"
                      />
                    </label>

                    <label>
                      <span>Company</span>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
                      />
                    </label>

                    <label>
                      <span>Status</span>
                      <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>New</option>
                        <option>Qualified</option>
                        <option>Proposal Sent</option>
                      </select>
                    </label>

                    <button type="submit">Add lead</button>
                  </form>
                </div>
              </aside>
            </div>
          </>
        )}

        {page !== '#/' && page !== '#/leads' && (
          <div className="placeholder-page">
            <p className="small-text">Section</p>
            <h2>{page.replace('#/', '').charAt(0).toUpperCase() + page.replace('#/', '').slice(1)}</h2>
            <p className="sub-text">This part can be built next after leads.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
