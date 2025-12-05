import React from 'react'
import { markets } from '../mock/markets'
import { orderbook } from '../mock/orderbook'
import { priceTimeseries } from '../mock/prices'
import { digest } from '../mock/digest'

function Card({children, title}){
  return <div className='card'><h3>{title}</h3><div>{children}</div></div>
}

export default function ATerminal(){
  return (
    <div className='layout'>
      <header className='header'>Polymarket AI Terminal — <em>Glossy</em></header>
      <main className='grid'>
        <section className='col-left'>
          <Card title='Daily Digest'>
            <ul>{digest.map((d,i)=>(<li key={i}><b>{d.title}</b> — {d.value} {d.change && <span className='muted'>{d.change}</span>}</li>))}</ul>
          </Card>
          <Card title='Bitcoin Price'>
            <div className='ts-graph'>
              {priceTimeseries.slice(0,12).map(p=>(<div key={p.t} className='bar' style={{height: (p.v-29000)/100+'px'}}></div>))}
            </div>
            <div className='price-big'>$ {priceTimeseries[priceTimeseries.length-1].v}</div>
          </Card>
        </section>
        <section className='col-mid'>
          <Card title='AI Explainer'>
            <p>The market thinks Ethereum is likely to reach $1,000 by 2025 due to strong upgrades...</p>
            <button className='cta'>Ask AI</button>
          </Card>
          <Card title='Orderbook'>
            <div className='orderbook'>
              <div><strong>Bids</strong>{orderbook.bids.map((b,i)=>(<div key={i}>{b.qty}@{b.price}</div>))}</div>
              <div><strong>Asks</strong>{orderbook.asks.map((b,i)=>(<div key={i}>{b.qty}@{b.price}</div>))}</div>
            </div>
          </Card>
        </section>
        <aside className='col-right'>
          <Card title='Portfolio'>
            <div className='box'>Balance: <b>$34,010</b></div>
            <div className='live-prices'>{markets.map(m=>(<div key={m.id}>{m.name} — ${m.price}</div>))}</div>
          </Card>
        </aside>
      </main>
    </div>
  )
}
