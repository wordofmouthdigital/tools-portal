import React, { useState } from "react"
import { Input } from "../components/input"
import BarChart from "../components/bar-chart"

export const MarketingCalculator = () => {
  
  const [aov, setAov] = useState(80);
  const [cogs, setCogs] = useState(0.3);
  const [adspend, setAdspend] = useState(5000);
  const [cpc, setCpc] = useState(2.6);
  const [ctr, setCtr] = useState(0.02);
  const [cpm, setCpm] = useState(11);
  const [cr, setCr] = useState(0.018);
  const [cspend, setCspend] = useState(2000);
  const [aspend, setAspend] = useState(3500);
  const [audience, setAudience] = useState(1);

  const impressions = (adspend / cpm) * 1000;
  const users =  impressions * ctr;
  const totalSales = users * cr;
  const revenue = totalSales * aov;
  const tCogs = totalSales * cogs
  const profit = revenue - (tCogs + adspend + aspend + cspend);
  const roas = revenue / adspend;

  console.log(impressions, users, totalSales, revenue, profit)

  const months = Array.from({length: 3}, (v, k) => `Month ${k+1}`); 
  const data = months.map((month, index) => {
    // displayed here should only be costs, e.g. add tcogs, adspend, aspend,cspend    
    // aspend vs in house cost
    return {
    "month": index + 1,

    "revenue": revenue.toFixed(2),
    "profit": profit.toFixed(2),
    }
  });
  // for (let i = 1; i < 6; i ++) {
  //   data[`Month ${i}`] = {
  //     "impressions": impressions,
  //     "users": users,
  //     "total sales": totalSales,
  //     "revenue": revenue,
  //     "profit": profit
  //   }
  // }
  
  console.log(data);
 

  
  return (
    <>
      <h1>{ impressions }</h1>
      <Input value={ aov } handleChange={ setAov } label={ "AOV" } type={ "number" }  />
      <Input value={ cogs } handleChange={ setCogs } label={ "COGS" } type={ "number" }  />
      <Input value={ adspend } handleChange={ setAdspend } label={ "Monthly Adspend" } type={ "number" }  />
      <Input value={ cpc } handleChange={ setCpc } label={ "CPC" } type={ "number" }  />
      <Input value={ cpm } handleChange={ setCpm } label={ "CPM" } type={ "number" }  />
      <Input value={ cr } handleChange={ setCr } label={ "CR" } type={ "number" }  />
      <Input value={ cspend } handleChange={ setCspend } label={ "CSpend" } type={ "number" }  />
      <Input value={ aspend } handleChange={ setAspend } label={ "ASpend" } type={ "number" }  />
      <Input value={ audience } handleChange={ setAudience } label={ "Audience" } type={ "number" }  />
      <BarChart data={data} />
    </>
  );
}
    
  