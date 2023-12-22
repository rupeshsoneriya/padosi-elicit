import React, { useState } from "react";
import "./AddnewColonies.css";
import { json } from "react-router-dom";
import Logo from "../Components/Logos/logo.jpg";


export default function Routing() {
    

    const initialState = {
        Colonyname: "",
        Colonylogo: "",
        Email: "",
        Phone:"",
        RegisterationDate: "",
        RERAnumber:" ",
    };
    let temp={
        Colonyname: "No Record",
        Colonylogo:"No Record",
        Email: "No Record",
        Phone:"No Record",
        RegisterationDate:"No Record",
        RERAnumber:"No Record",
     }
    const [formValue, setFormValue] = useState(initialState);
    const [ColonyDetails, setColonyDetails] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });


        let localColonyDetails = JSON.parse(localStorage.getItem('ColonyDetails'))
        if (localColonyDetails!== null) {
            if (formValue.Colonyname !== 0 && formValue.Colonylogo !== 0 && formValue.Phone !== 0 && formValue.Eamil !== 0) {
                setColonyDetails(localColonyDetails)
                console.log(localColonyDetails)
            }
        }

    };
    const feesSubmit = (e) => {
        e.preventDefault();

          { formValue!==null?
            ColonyDetails.push(formValue)
        :  ColonyDetails.push(temp)}
            window.localStorage.setItem("ColonyDetails", JSON.stringify(ColonyDetails))
          
        
       
        setFormValue(initialState)
        // console.log(paymentList)
    };
    

   
    return (
        <div className="Deposit-main">
            <div className="Deposit-form">
                <div className="content-div">
                    <div className="main-content">
                        <h4>Add New Colonies</h4>
                        <p> Enter Colonies Credentials to Access Colony Registeration in Apna Padosi</p>
                        <br />
                        <div className="Details-div">
                           <img src={Logo} style={{    maxWidth: "214px", height: 'auto', width: '100%'}}/>
                        
                        </div>

                    </div>

                </div>
                <div className="Payment-form">
                    <div className="form-heading">
                        <h3>Feel All Details</h3>
                    </div>
                    <form onSubmit={feesSubmit} >
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12"><div className="input">
                                <h6>Colony NAME</h6>
                                <input placeholder="Colony Name" value={formValue.Colonyname} name="Colonyname" onChange={handleInput} />
                            </div>
</div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">  <div className="input1">
                                <h6>Upload Colony Logo </h6>
                                <input  type="file" value={formValue.Colonylogo} name="Colonylogo" onChange={handleInput} />
                            </div></div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input">
                                <h6>Email</h6>
                                <input  type="email" value={formValue.Email} placeholder="Enter Email" name="Email" onChange={handleInput} />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input1">
                                <h6>Phone</h6>
                                <input  type="text" value={formValue.Phone} name="Phone" placeholder="Enter Phone number" onChange={handleInput} />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input">
                                <h6> Select Date</h6>
                                <input type="Date" value={formValue.RegisterationDate}  name="RegisterationDate" onChange={handleInput} />
                            </div>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input11">
                                <h6>RERA NO.</h6>
                                <input type="number" value={formValue.RERAnumber} placeholder="Enter RERA No." name="RERAnumber" onChange={handleInput} />
                            </div>
                            </div>
                        </div>
                       
                        <div >
                            <button className="btn" >Submit</button>
                        </div>

                    </form>

                </div>

            </div>


        </div>
    );
}
