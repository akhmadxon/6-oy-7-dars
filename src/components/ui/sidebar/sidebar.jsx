import { NavLink } from 'react-router-dom'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <NavLink to="/main" className="navlink">
         Cars
    </NavLink>
    <NavLink to="/main/brand"className="navlink">
         Brand
    </NavLink>
    </div>
  )
}

export default Sidebar