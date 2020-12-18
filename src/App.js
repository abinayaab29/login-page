import React,{useState} from "react";
import './App.css';
import LoginForm from "./Components/LoginForm";

function App() {
  const admin = {
    email : 'admin@gmail.com',
    password : 'admin123'
  }

  const [user,setUser] = useState({name:"",email : ""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email== admin.email && details.password == admin.password)
    {
      console.log("Logged IN");
      setUser({
        name: details.name,
        email : details.email
      });
    }
    else{
      console.log("Error Login...Details do not match");
      setError("Details do not match or some fields are left blank")
    }
  }
  const logout = () => {
    setUser({name :"" ,email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className ="Welcome">
          <h2>Welcome ,<span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div> ): (
          <LoginForm Login= {Login} error = {error} />)
      }
    </div>
  );
}

export default App;
