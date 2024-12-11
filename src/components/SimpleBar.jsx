import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBar = ({data,filterby}) => {
  if(filterby.region){
    var transformedData= data.filter((item)=>item.region == filterby.region).map((item)=>({
      name:item.region,
      likelihood:item.likelihood,
      relevance:item.relevance 
     }))
    
  }
  else{
    var transformedData= data.map((item)=>({
      name:item.region,
      likelihood:item.likelihood,
      relevance:item.relevance 
     }))
  }
      
  return (
    <div style={{width:'100%',height:'300px'}}>
         <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
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
          <Bar dataKey="relevance" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="likelihood" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleBar