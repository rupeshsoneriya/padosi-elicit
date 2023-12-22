import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Routing from "./Routing";
import Logo from "../Components/Logos/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch, faBell, faHouse, faGraduationCap, faCcAmazonPay, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



import "./Dashboard.css";
import DashboardData from "./DashboardData";

export default function Dashboard() {
  const navigate = useNavigate()
  const logOut=()=>{
     localStorage.clear();
     navigate('/')
  }
 
 
    
    return (
      <div className="Dashboard-main-div">
        <div className="dashboard-Content-div">
          <div className="dashboard-header">
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
              />
             <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </div>
          <div className="main-div">
            Assuming Routing is a component that renders different routes
            <Routing />
          </div>
        </div>
        <div className="dashboard-side-div">
        
          <div className="Admin-Profile">
            <img src={Logo}/>
            <h6>Admin</h6>
          </div>
          <div className="Navigation">
            <ul>
              <li>
                <Link className="links" to="/DashboardData">
                 Dashboard <i className={`fas ${faHouse.iconName}`}></i>
                </Link>
              </li>
              <li>
                <Link className="links" to="/ColoniesData">
                  Colonies <i className={`fas ${faGraduationCap.iconName}`}></i>
                </Link>
              </li>
              <li>
                <Link className="links" to="/Payment">
                 Payment <i className={`fab ${faCcAmazonPay.iconName}`}></i>
                </Link>
              </li>
              <li>
                <Link className="links" to="/">
                  Settings<i className={`fas ${faGear.iconName}`}></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Logout">
            <ul>
              <li>
                <Link className="links" onClick={logOut}>
                  Logout 
                  <i className={`fas ${faSignOutAlt.iconName}`}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    
  
}
