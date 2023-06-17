import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'jan',
      uv: 40,
      pv: 65,
      amt: 24,
    },
    {
      name: 'feb',
      uv: 30,
      pv: 45,
      amt: 22,
    },
    {
      name: 'mar',
      uv: 20,
      pv: 98,
      amt: 20,
    },
  ];

export default class DoubleBar extends PureComponent {
  

  render() {
    return (
      <div style={{width: '105%', height: 335, background: 'white'}}>
<ResponsiveContainer width="100%" height={335}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#3969DC" />
          <Bar dataKey="uv" fill="#00D43D" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      
    );
  }
}