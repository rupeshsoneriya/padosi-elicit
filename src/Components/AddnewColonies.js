import React, { useState } from "react";
import "./AddnewColonies.css";
import { json } from "react-router-dom";
import Logo from "../Components/Logos/logo.jpg";
import usePost from "hooks/usePost";
import { Township_Add} from "constants/api";

export default function Routing() {
    

    const initialState = {
        townshipName: "",
        password: "",
        location:"",
        numberOfPlots:"",
        email: "",
        mobileNumber:"",
        role:"",
        townshipImage:"",
        townshipLogo:"",
        RegisterationDate: "",
        reraNumber:" ",
    };
    
    const [formValue, setFormValue] = useState(initialState);
    const [TownshipDetails, setTownshipDetails] = useState([]);

    const handleInput = (e) => {
        
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });


      

    };
    const Submit = (e) => { 
        setTownshipDetails(formValue)
        const {mutateAsync: addTownshtip} = usePost();
        addTownshtip({url: Township_Add, payload: TownshipDetails}).then((res) => {
            console.log(res)
            if(res?.token) {
              for (const key in res) {
                localStorage.setItem(key, res[key])
            }
            }
          }).catch((err) => {
            console.error(err)
          })  

         
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
                    <form onSubmit={Submit} enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12"><div className="input">
                                <h6>Township Name</h6>
                                <input placeholder="Colony Name" value={formValue.townshipName} name="townshipName" onChange={handleInput} />
                            </div>
</div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12"> 
                            <div className="input">
                                <h6>Email</h6>
                                <input  type="email" value={formValue.email} placeholder="Enter Email" name="email" onChange={handleInput} />
                            </div>
                            </div>
                            
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            
                            <div className="input1">
                                <h6>Password </h6>
                                <input  type="Password" value={formValue.password} name="password" onChange={handleInput} />
                            </div></div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input1">
                                <h6>Mobilenumber</h6>
                                <input  type="text" value={formValue.mobileNumber} name="mobileNumber" placeholder="Enter Mobile No" onChange={handleInput} />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input">
                                <h6> Number Of Plots</h6>
                                <input type="number" value={formValue.numberOfPlots}  name="numberOfPlots" onChange={handleInput}  />
                            </div>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input11">
                                <h6>RERA NO.</h6>
                                <input type="number" value={formValue.reraNumber} placeholder="Enter RERA No." name="reraNumber" onChange={handleInput} />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input">
                                <h6>Uplode Township Image</h6>
                                <input type="file" value={formValue.townshipImage}  name="townshipImage" onChange={handleInput}  />
                            </div>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-12 col-xs-12">
                            <div className="input11">
                                <h6>Uplode township Logo.</h6>
                                <input type="file" value={formValue.townshipLogo} placeholder="Enter RERA No." name="townshipLogo" onChange={handleInput} />
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
