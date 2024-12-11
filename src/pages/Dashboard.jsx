import axios from "axios";
import Sidebar from "../components/sidebar"
import SimpleBar from "../components/SimpleBar";
import SimpleLine from "../components/SimpleLine";
import SimplePiechart from "../components/SimplePiechart";
import '../styles/dashboard.css'
import { MDBBadge } from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
const Dashboard = () => {
const[isLoading,setLoading]= useState(true)
const[data,setData]=useState([])
const[filter,setFilter]=useState({
    region:'',
    topic:''
})
   
    const fetchData = async()=>{
        try {
            let response = await axios.get('https://seclob-server-7sks.onrender.com/api/data')
            setData(response.data.allData)
            if(response.status == 200){
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSelectRegion=(e)=>{
        setFilter({...filter,region:e.target.value})
    }
    const handleSelectTopic=(e)=>{
        setFilter({...filter,topic:e.target.value})
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className="dashboard-cotainer">
     {
        isLoading?
        <div className="spinner-container">
        <MDBSpinner className='mx-2' style={{color:'red'}}>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
        </div>
        :
        <div className="row">
        <div className="col-lg-3 col-sm-none custom-col ">
            <Sidebar/>
        </div>
        <div className="col-lg-9 col-sm-12">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 "></div>
                <div className="col-2 ">
                    <div className="icons mt-2">
                        <div className="badge">
                        <i style={{color:'#f20000'}} className="fa-solid fa-bell"></i>
                         <sup className="badge-icon"><MDBBadge className='ms-2 '>4</MDBBadge></sup>
                        </div>
                        <i style={{color:'#f20000'}} className="fa-solid fa-user ms-3"></i>
                    </div>
                </div>
            </div>
            <div className="row statics">
                <div className="col-lg-4 col-sm-12">
                <div className="stat-div">
                        <select onChange={handleSelectTopic}  className="select" name="" id="">
                            <option value="" hidden>Filter by topic</option>
                             {
                             Array.from(new Set(data.map((item) => item.topic))).map((region, index) => (
                                <option key={index} value={region}>{region} </option>
                             ))
                             }
                         </select>  
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                <div className="stat-div">Total Number: {data.length}</div>
                </div>
                <div className="col-lg-4 col-sm-12 ">
                <div className="stat-div">
                        <select onChange={handleSelectRegion}  className="select" name="" id="">
                            <option value="" hidden>Filter by region</option>
                             {
                             Array.from(new Set(data.map((item) => item.region))).map((region, index) => (
                                <option key={index} value={region}>{region} </option>
                             ))
                             }
                         </select>  
                    </div>
                </div>
            </div>
            <hr style={{color:'white'}} />
            {/* charts */}
            <div className="row mt-1 mb-3">
               <div className="col-lg-4 col-sm-12">
               <div className="chart-container">
                  <SimpleLine  data={data}  filterby={filter}/>
               </div>
               </div>
               <div className="col-lg-4"col-sm-12>
                <div className="chart-container">
                 <SimplePiechart data={data}/>
                </div>
               </div>
               <div className="col-lg-4"col-sm-12>
                <div className="chart-container">
                <SimpleBar data={data} filterby={filter}/>
                </div>
               </div>
            </div>
            </div>
        </div>
    </div>
     }
    </div>

  )
}

export default Dashboard