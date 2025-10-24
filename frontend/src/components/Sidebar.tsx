import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import '../Styles/component.styles/Sidebar.scss'
import { LuLayoutDashboard } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { SiGooglecampaignmanager360 } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo"><SiGooglecampaignmanager360 className='side-logo' /><span></span>lighty</h2>
      <div className="avatar">
        <UserButton afterSignOutUrl="/" />
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li><Link className="menu-list" to="/dashboard"><LuLayoutDashboard /> <span>Dashboard</span></Link></li>
          <li><Link className="menu-list" to="/dashboard/manager"><BiTask />  <span>Manage Task</span></Link></li>
           <li><Link className="menu-list" to="/dashboard/profile"><FaRegPlusSquare /> <span>Create Task</span></Link></li>
            <li><Link className="menu-list" to="/dashboard/profile"><FaUserGroup />  <span>Team Members</span></Link></li>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <li><Link className="sid-back-btn" to="/"> <IoReturnDownBack /> <span>Back</span></Link></li>
    
      </div>
    </div>
  );
};

export default Sidebar;
