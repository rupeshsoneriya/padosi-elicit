import React from "react";
import AddPayment from "./AddPayment";
import Register from "./Register";
import SignIn from "./Sign_in";
import ColoniesData from "./ColoniesData";
import { Route, Routes } from "react-router-dom";
import DashboardData from "./DashboardData";
import EditDetails from "./EditDetails";
import Payment from "./Payment";
import AddnewColonies from "./AddnewColonies"
import Dashboard from "./Dashboard";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardData />}> </Route>
        {/* <Route path="/Dashboard" element={<Dashboard />}> </Route> */}
        <Route path="/AddPayment" element={<AddPayment />}></Route>
        <Route path="/ColoniesData" element={<ColoniesData />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Sign_in" element={<SignIn />}></Route>
        <Route path="/EditDetails" element={<EditDetails />}> </Route>
        <Route path="/AddnewColonies" element={<AddnewColonies/>}> </Route>
      </Routes>
    </div>
  );
}
