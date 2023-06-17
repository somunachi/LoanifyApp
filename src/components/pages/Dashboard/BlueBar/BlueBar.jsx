import { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  // Line,
  // Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      name: 'jan',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'feb',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'mar',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'april',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'may',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'june',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

export default class BlueBar extends PureComponent {
  

  render() {
    return (
      <div style={{ width: '105%', height: 335, background: 'white' }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
  
            <Bar dataKey="pv" barSize={20} fill="#3969DC" />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}