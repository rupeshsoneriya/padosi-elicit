import React, { useEffect, useState } from "react";
import "./AddnewColonies.css";
import "./EditDetails.css";

import { useNavigate } from "react-router-dom";


export default function EditDetails() {

  const [Colonylogo, setColonyLogo] = useState("");
  const [Colonyname, setColonyname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [RERAnumber, setRERAnumber] = useState("");
  const [RegisterationDate, setRegisterationDate] = useState("");
  const navigation = useNavigate('');

  let id = JSON.parse(window.localStorage.getItem("updateid"))
 
  useEffect(() => {
    let listData = localStorage.getItem('editDetails')
    console.log(listData)
    let [updatedata] = JSON.parse(listData)
    setColonyLogo(updatedata.Colonylogo)
    setColonyname(updatedata.Colonyname)
       setEmail(updatedata.Email)
       setPhone(updatedata.Phone)
       setRERAnumber(updatedata.RegisterationDate)
       setRegisterationDate(updatedata.RERAnumber)



  }, [])


  const editDetails = () => {

   
     

    let ColonieslistData = JSON.parse(window.localStorage.getItem("ColonyDetails"))
    
    for (let i = 0; i < ColonieslistData.length; ++i) {
      if (i=== id) {
        ColonieslistData.splice(id,1,{
          Colonylogo: Colonylogo,
          Colonyname: Colonyname,
          Email: Email,
          Phone: Phone,
          RegisterationDate: RegisterationDate,
          RERAnumber: RERAnumber
            })
       
       } 

       localStorage.setItem("ColonyDetails", JSON.stringify(ColonieslistData));

 }
   console.log(
    localStorage.setItem("ColonyDetails", JSON.stringify(ColonieslistData)))
  }

  return (
    <div className="editDetails-main">

      <div className="add-Student-main-div">

        <div className="add-Student-form-Edit" >
          <button
            className="cross-btn"
            onClick={() => navigation("/ColoniesData")}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h3>Edit-Details </h3>

          <div style={{ margin: "5px" }} className="row">
            <div className="col">
              <input
                type="text"
                onChange={(e) => setColonyname(e.target.value)}
                className="form-control"
                placeholder="Colonyname"
                aria-label="First name"
                value={Colonyname}

              />
            </div>
            
          </div>
          <div style={{ margin: "5px" }} className="row">
            <div className="col">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder=" Email Address"
                aria-label="Enter address"
                value={Email}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contact number"
                aria-label="contact number"
                value={Phone}
              />
            </div>
          </div>

          <div style={{ margin: "5px" }} className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="RERAnumber"
                onChange={(e) => setRERAnumber(e.target.value)}
                aria-label="setRERAnumber"
                value={RERAnumber}
              />
            </div>
            <div className="col">
              <input
                type="Date"
                className="form-control"
                placeholder="RegisterationDate"
                aria-label="Last name"
                onChange={(e) => setRegisterationDate(e.target.value)}
                value={RegisterationDate}
              />
            </div>
          </div>

          <div style={{ margin: "5px" }} className="row">
            <div className="col">
              <input
                onChange={(e) => setColonyLogo(e.target.value)}
                type="file"
                name="Colonylogo"
                id="img"
                // accept="image/*"
                className="form-control"
                aria-label="file name"
                // value={Colonylogo}
              />
            </div>
            <p className="photo">Upload Student photo</p>
          </div>
          <div style={{ margin: "5px" }} className="row" id="btn">
            <button onClick={editDetails} className="submit-btn">
              Update
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
