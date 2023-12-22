import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from "Components/Logos/logo.jpg";

import { faSearch, faBell, faHouse, faGraduationCap, faCcAmazonPay, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "../Dashboard.css";

const PrivateLayout = ({children}) => {

    const logOut = () => {
        localStorage.clear()
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
              <i className={`fas ${faSearch.iconName}`}></i>
            </div>
            {/* <i className={`fas ${faBell.iconName}`}></i> */}
          </div>
          <div className="main-div">
            {/* Assuming Routing is a component that renders different routes */}
            {children}
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
                 Dashboard {/* <i className={`fas ${faHouse.iconName}`}></i>Dashboard */}
                </Link>
              </li>
              <li>
                <Link className="links" to="/ColoniesData">
                  Colonies {/* <i className={`fas ${faGraduationCap.iconName}`}></i>Colonies */}
                </Link>
              </li>
              <li>
                <Link className="links" to="/Payment">
                 Payment {/* <i className={`fab ${faCcAmazonPay.iconName}`}></i>Payment */}
                </Link>
              </li>
              <li>
                <Link className="links" to="/">
                  Settings{/* <i className={`fas ${faGear.iconName}`}></i>Setting */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="Logout">
            <ul>
              <li>
                <Link className="links" onClick={logOut}>
                  Logout 
                  {/* <i className={`fas ${faSignOutAlt.iconName}`}></i> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default PrivateLayout
