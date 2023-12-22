import React, { useState } from "react";
import "./AddPayment.css";
import { useNavigate } from "react-router-dom";

export default function AddPayment() {
  const [ColoniesName, setColoniesName] = useState("");
  const [RERAnumber, setRERAnumber] = useState("");
  const [PaidDate, setPaidDate] = useState("");
  const [PaidAmount, setPaidAmount] = useState("");
  const navigation = useNavigate();
  let PaymentData = {};
  const Register = () => {
    if (
      ColoniesName !== "" ||
      RERAnumber !== "" ||
      PaidDate !== "" ||
            PaidAmount !== "" 
     
    ) {
      PaymentData = {
        ColoniesName: ColoniesName,
           RERAnumber: RERAnumber,
        PaidDate: PaidDate,
        PaidAmount: PaidAmount,
       
      };
    }

    
      let list = [];
      list.push(PaymentData);
      localStorage.setItem("PaymentList", JSON.stringify(list));
    
    inputFelid();
  };
  const inputFelid = () => {
    setColoniesName("");
    setPaidAmount("");
    setPaidDate("");
    setRERAnumber("");
   
  };
  return (
    <div className="add-Student-main-div">

      <div className="add-Student-form">
        <button
          className="cross-btn"
          onClick={() => navigation("/ColoniesData")}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h3>Add Payment Details </h3>
        <h4 className="heading2">Pay Amount</h4>
                <div style={{ margin: "5px" }} className="row">
          
          <div className="col">
            <input
              type="text"
              onChange={(e) => setColoniesName(e.target.value)}
              className="form-control"
              placeholder="ColonyName"
              aria-label="First name"
              value={ColoniesName}
            />
           </div>
           <div className="col">
            <input
              type="text"
              onChange={(e) => setRERAnumber(e.target.value)}
              className="form-control"
              placeholder="RERAnumber"
              aria-label="Last name"
              value={RERAnumber}
            />
          </div>
        </div>
        
        <div style={{ margin: "5px" }} className="row">
          <div className="col">
            <input
              type="Date"
              onChange={(e) => setPaidDate(e.target.value)}
              className="form-control"
              placeholder=" PaidDate"
              aria-label="Enter address"
              value={PaidDate}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPaidAmount(e.target.value)}
               aria-label="PaidAmount"
              value={PaidAmount}
            />
          </div>
        </div>

      
        <div style={{ margin: "5px" }} className="row" id="btn">
          <button onClick={Register} className="submit-btn">
            Submit
          </button>
        </div>
      </div>

    </div>
  );
}
