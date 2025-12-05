export const priceTimeseries = Array.from({length:24}).map((_,i)=>({t: i, v: Math.round(30000 + Math.sin(i/3)*2000 + Math.random()*500)}))
