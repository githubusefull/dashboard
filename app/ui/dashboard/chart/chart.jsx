"use client"
import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    visit: 1000,
    click: 4400,
  },
  {
    name: 'Mon',
    visit: 1000,
    click: 4400,
  },
  {
    name: 'Tue',
    visit: 3200,
    click: 2020,
  },
  {
    name: 'Wed',
    visit: 4000,
    click: 1400,
  },
  {
    name: 'Thu',
    visit: 5100,
    click: 2400,
  },
  {
    name: 'Fri',
    visit: 4200,
    click: 2100,
  },
  {
    name: 'Sat',
    visit: 3456,
    click: 4300,
  },
 
];
const chart = () => {
  return (
    <div className={styles.container}>
          <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#182237", border:"none", borderRadius:"5px"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart

