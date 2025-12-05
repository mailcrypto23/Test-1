import React from 'react'
import ATerminal from './components/ATerminal.jsx'
import BDashboard from './components/BDashboard.jsx'

export default function App(){
  const url = new URL(window.location.href)
  const view = url.searchParams.get('view') || 'a'
  return (
    <div className='app-root'>
      {view === 'a' ? <ATerminal/> : <BDashboard/>}
      <div className='toolbar'>
        <a href='/?view=a'>Open A — AI Terminal</a> | <a href='/?view=b'>Open B — Dashboard</a>
      </div>
    </div>
  )
}
