import React from "react";
import "./Register.css";
import { useState } from "react";

export default function Register() {
  const [Name, setName] = useState('')
  const [Surname, setSurname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Phone, setPhone] = useState('')
  const [Dob, setDob] = useState('')
  const [Gender, setGender] = useState('')

  const Register = () => {
    let userData = {
      Name: Name,
      Surname: Surname,
      Email: Email,
      Password: Password,
      Phone: Phone,
      Dob: Dob,
      Gender: Gender
    }
    console.log(userData)
  }
  return (
    <div className="Register-main-div">
      <div className="Register-form">
        <div className="Register-heading">
          <h1 className="Register-heading1">STUDENT MANAGEMENT</h1>
          <h2 className="Register-heading2">
            Create Account <br />
          </h2>
          <p>Enter your credentials to create your account</p>
        </div>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <label>Name</label>
          <br />
          <input
            className="Register-input"
            type="text"
            placeholder="Please Enter Name"
            onChange={e => setName(e.target.value)}
          />
          <label>Surname</label>
          <input
            className="Register-input"
            type="text"
            id="right-input"
            onChange={e => setSurname(e.target.value)}
            placeholder="Please Enter Surname"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="Register-input"
            type="Email"
            placeholder="Please Enter Email"
            onChange={e => setEmail(e.target.value)}

          />
          <label>Password</label>
          <input
            className="Register-input"
            type="Password"
            id="right-input"
            onChange={e => setPassword(e.target.value)}

            placeholder="Please Enter Password"
          />
          <br />
          <label>Contact No</label>
          <br />
          <input
            className="Register-input"
            type="number"
            onChange={e => setPhone(e.target.value)}

            placeholder="Please Enter Contact No"
          />
          <label>D-O-B</label>
          <input
            className="Register-input"
            type="Date"
            id="right-input"
            onChange={e => setDob(e.target.value)}

            placeholder="Please Enter Surname"
          />
          <br /> <br />
          <label>Gender :</label> <input type="radio" className="gender" onChange={e => setGender(e.target.value)} name="Gender" value="Male" /><label>Male</label>
          <input type="radio" className="gender" name="Gender" onChange={e => setGender(e.target.value)} value="FeMale" /><label>Female</label>
          <input type="radio" className="gender" name="Gender" onChange={e => setGender(e.target.value)} value="Other" /><label>Other</label>

          <br />
          <br />
          <button type="submit" onClick={Register} className="Register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
