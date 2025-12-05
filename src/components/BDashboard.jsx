import React from 'react'
import { markets } from '../mock/markets'
import { priceTimeseries } from '../mock/prices'

function Panel({title, children}){ return <div className='panel'><h4>{title}</h4>{children}</div> }

export default function BDashboard(){
  return (
    <div className='dashboard'>
      <header className='header'>Polymarket Daily — Dashboard</header>
      <div className='overview'>
        <div className='metrics'>
          <div className='metric'>Open Interest<br/><b>1,245</b></div>
          <div className='metric'>Active Markets<br/><b>3.4K</b></div>
          <div className='metric'>Sentiment<br/><b>58%</b></div>
        </div>
      </div>
      <div className='main-area'>
        <Panel title='Activity Summary'>
          <div className='ts-graph small'>
            {priceTimeseries.slice(0,14).map(p=>(<div key={p.t} className='bar' style={{height:(p.v-29000)/150+'px'}}></div>))}
          </div>
        </Panel>
        <aside className='sidebar'>
          <Panel title='Live Prices'>
            {markets.map(m=>(<div key={m.id} className='lp'>{m.name}: ${m.price}</div>))}
          </Panel>
          <Panel title='Chat AI'><input placeholder='Ask me about markets...' /></Panel>
        </aside>
      </div>
    </div>
  )
}
