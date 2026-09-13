'use client'

import { FormEvent, useState } from 'react'

export default function AdminPage() {
  const [signedIn, setSignedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email === 'admin@fieldcraft.agri' && password === 'Fieldcraft2026!') {
      setSignedIn(true)
      setError('')
      return
    }
    setError('Use the demo credentials shown below.')
  }

  if (!signedIn) {
    return (
      <main className="admin-page">
        <div className="admin-login-shell">
          <a href="/" className="brand" aria-label="Return to Fieldcraft homepage">
            <span className="brand-mark">F</span>
            <span>FIELDCRAFT<span className="brand-sub">AGRICULTURAL SOLUTIONS</span></span>
          </a>
          <div className="admin-login-card">
            <p className="eyebrow">Private workspace</p>
            <h1>Admin <em>portal.</em></h1>
            <p className="admin-lead">Sign in to manage inquiries, services and website content.</p>
            <form onSubmit={handleSubmit} className="admin-login-form">
              <label>Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@fieldcraft.agri" /></label>
              <label>Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Your password" /></label>
              {error && <p className="admin-error" role="alert">{error}</p>}
              <button className="button button-dark" type="submit">Sign in <span>↗</span></button>
            </form>
            <div className="demo-credentials"><span>Demo access</span><strong>admin@fieldcraft.agri</strong><strong>Fieldcraft2026!</strong></div>
            <a href="/" className="admin-back">← Back to public website</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="admin-page">
      <header className="admin-bar"><a href="/" className="brand"><span className="brand-mark">F</span><span>FIELDCRAFT<span className="brand-sub">ADMINISTRATION</span></span></a><div className="admin-bar-actions"><span>Afaq Ahmad · Developer</span><button onClick={() => setSignedIn(false)}>Sign out</button></div></header>
      <section className="admin-dashboard-page">
        <div className="admin-dashboard-heading"><div><p className="eyebrow">Overview · 13 September 2026</p><h1>Good morning, <em>Afaq.</em></h1><p>Here&apos;s what&apos;s happening across your Fieldcraft website.</p></div><a href="/" className="button button-dark">View live site <span>↗</span></a></div>
        <div className="dashboard-metric-grid"><article><span>New inquiries</span><strong>12</strong><small>+18% this month</small></article><article><span>Service pages</span><strong>08</strong><small>All content up to date</small></article><article><span>Site performance</span><strong>96</strong><small>Excellent · Core Web Vitals</small></article><article><span>Last published</span><strong>2d</strong><small>13 September 2026</small></article></div>
        <div className="admin-panel-grid"><section className="admin-panel"><div className="panel-heading"><div><p className="admin-kicker">Latest activity</p><h2>Recent inquiries</h2></div><button>View all ↗</button></div><div className="inquiry-list"><div><span className="inquiry-avatar">MV</span><span><b>Mark van Dijk</b><small>Machinery · 12 Sep 2026</small></span><strong>New</strong></div><div><span className="inquiry-avatar">LS</span><span><b>Laura Smit</b><small>Parts & wear · 11 Sep 2026</small></span><strong>New</strong></div><div><span className="inquiry-avatar">PT</span><span><b>Pieter de Tiel</b><small>Service & repair · 10 Sep 2026</small></span><strong className="read">Read</strong></div></div></section><section className="admin-panel quick-panel"><p className="admin-kicker">Quick actions</p><h2>Keep things moving.</h2><button>Edit service pages <span>↗</span></button><button>Update contact details <span>↗</span></button><button>Manage inquiries <span>↗</span></button></section></div>
      </section>
    </main>
  )
}
