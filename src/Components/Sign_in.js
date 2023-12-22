import React, { useState } from "react";
import "./Sign-in.css";
import "./CreateAccount.css";
import Logo from "../Components/Logos/logo.jpg";
import usePost from "hooks/usePost";
import { AUTH_LOGIN } from "constants/api";


export default function Sign_in() {
  const {mutateAsync: login} = usePost();
  const initialState = {
    username: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const Login = (e) => {
    e.preventDefault();
    login({url: AUTH_LOGIN, payload: formValue}).then((res) => {
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
              <img src={Logo} style={{ maxWidth: "214px", height: 'auto', width: '100%' }} />

            </div>

          </div>

        </div>
        <div className="Payment-form">
          <div className="form-heading">
            <h3>Welcome </h3>
          </div>
          <div className="form">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" value={formValue.username} name="username" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleInput}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={formValue.password} name="password" placeholder="Password"onChange={handleInput} />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={Login}>Login</button>

        </div>
        </div>
      </div>


    </div>
  );
}
