import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 700 },
  { name: 'Wed', uv: 200 },
  { name: 'Thu', uv: 980 },
  { name: 'Fri', uv: 600 },
];

const ChartSection = () => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow w-full mb-6">
    <h2 className="text-lg font-semibold mb-4">📈 Weekly Analytics</h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#16a34a" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartSection;
