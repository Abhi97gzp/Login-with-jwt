import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [users,setUsers] = useState("");

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //    console.log("dataLogin",auth)
  //   if (auth) {
  //     navigate("/");
  //   }
  // }, []);


  // useEffect(() => {
  //   allData();
  // }, []);

  // const allData = async () => {
  //   let result = await fetch("http://localhost:3100/allUsers");
  //   result = await result.json();
  //   setUsers(result);
  // };
  // console.log("All user data ", users);
  // console.log("name ", users.fName);

  const formHandle = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:3100/login", {
      method: "post",
      body: JSON.stringify({ email,role,password}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result.fName){
      localStorage.setItem("user",JSON.stringify(result));
      alert("login  successful");
      navigate("/");
    }else {
      alert("you are not rejisterd");
    }
    
  //  console.log(result);
    // if(result.name){
    //   
    //   alert("login  successful");
    //   
    // }

    // if (data) {
    //   // localStorage.setItem("user", JSON.stringify(data));
    //   // localStorage.setItem("token", JSON.stringify(data.auth));
    //   navigate("/");
    // } else {
    //   alert("please enter correct detailes");
    // }
  };
  return (
    <div>
      <h3>Login USER</h3>
      <form>
        <label>Email -- -:</label>
        <input
          type="input"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Role---:</label>
        
        <select   style={{width:"20%"}} className="form-control"
          onChange={(e) => {
            const selectRole = e.target.value;
            setRole(selectRole);
          }}
          // className="form-control"
        >
          <option>Choose Role</option>
          <option vlaue={role}>Admin</option>
          <option value={role}>Trainer</option>
          <option value={role}>Member</option>
        </select>
        <br />
        <br />
        <label>Password</label>
        <input
          type="input"
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={formHandle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
