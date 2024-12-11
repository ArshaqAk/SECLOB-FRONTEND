import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleLine = ({data,filterby}) => {
  if(filterby.topic){
    var transformedData= data.filter((item)=>item.topic == filterby.topic).map((item) => ({
    name: item.topic,
    intensity: item.intensity,
    relevance: item.relevance,
  }));
    
  }
  else{
    var transformedData= data.map((item) => ({
      name: item.topic,
      intensity: item.intensity,
      relevance: item.relevance,
    }));
  }

  return (
    <div style={{ width: '100%', height: '300px' }}> 
      <ResponsiveContainer>
        <LineChart
          data={transformedData}
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
          <Legend />
          <Line type="monotone" dataKey="relevance" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="intensity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLine;
