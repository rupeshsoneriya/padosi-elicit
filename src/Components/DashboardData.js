import React from 'react'
import "./Dashboard.css";
import { json } from 'react-router-dom';

export default function DashboardData() {
 

  return (
    <div className='data'>
      <div className="data-content-div">
        <div className="Student">
          <div className="icon-name">
            <i class="fa-solid fa-graduation-cap"></i>
            <p>Admin</p>
          </div>
          <h6 className="h6">{1}</h6>
        </div>
        <div className="Course">
          <div className="icon-name">
            <i class="fa-solid fa-book"></i>
            <p>Colonies</p>
          </div>
          <h6 className="h6">13</h6>
        </div>

        <div className="User">
          <div className="icon-name">
            <i class="fa-solid fa-user"></i>
            <p>User</p>
          </div>
          <h6 className="h6">{2}</h6>
        </div>
        <div className="Payments">
          <div className="icon-name">
            <i class="fa-brands fa-cc-amazon-pay"></i>
            <p>Payments</p>
          </div>
          <h6 className="h6">INR:{100000000}</h6>
        </div>
       
      </div>
    </div>

  )
}
