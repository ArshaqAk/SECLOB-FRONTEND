import '../styles/sidebar.css'
import dashboard_img from '../assets/dashboard.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="menu-div mt-4">
            <img src={dashboard_img} alt="" />
            <h6>Dashboard</h6>
        </div>
        
    </div>
  )
}

export default Sidebar