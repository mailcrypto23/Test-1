import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MarketOverview from './components/MarketOverview'
import ActivitySummary from './components/ActivitySummary'
import CryptoPortfolio from './components/CryptoPortfolio'
import LivePrices from './components/LivePrices'
import ChatAI from './components/ChatAI'
import mock from './mock-data/mock_data.json'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('pm_theme') || 'dark')
  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('pm_theme', theme) },[theme])
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Topbar theme={theme} setTheme={setTheme}/>
        <div className="content">
          <div className="left">
            <MarketOverview data={mock.market}/>
            <ActivitySummary data={mock.activity}/>
          </div>
          <div className="right">
            <CryptoPortfolio data={mock.portfolio}/>
            <LivePrices data={mock.livePrices}/>
            <ChatAI />
          </div>
        </div>
      </div>
    </div>
  )
}
