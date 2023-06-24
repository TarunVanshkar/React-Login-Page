import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");

    const navigate  = useNavigate();

    function handleLogin() {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                password: password
            })
        })
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            // Login successfully, now save the object in local storage
            if(data.id && data.token){
                localStorage.setItem("user", JSON.stringify(data));
                alert("User logged in successfully");
                navigate("/profile");
            }
            else{
                // Error occurred
                setError(data.message);
            }
        })
        .catch((error) => {
            setError("Network error occurred while fetching data from API!")
            console.log(error);
        })
    }
    
return (
    <div className="login-container">
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={(event) => setName(event.target.value)} />
        <input type="text" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <button onClick={handleLogin}>Login</button>

        {
            error && <p>{error}</p>
        }
    </div>
)
}

export default Login;