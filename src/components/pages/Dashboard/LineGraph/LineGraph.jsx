import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '0/10',
      uv: 40,
      pv: 65,
      amt: 24,
    },
    {
      name: '3/10',
      uv: 30,
      pv: 45,
      amt: 22,
    },
    {
      name: '6/10',
      uv: 20,
      pv: 98,
      amt: 20,
    },
  ];

export default class LineGraph extends PureComponent {
  

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '105%', background: 'white' }}>
        <ResponsiveContainer width="100%" height={335}>
          <LineChart
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
            {/* <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} /> */}
            <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#D30744" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#3969DC" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}