import { useState } from "react";

const API_URL = "http://localhost:3000/auth/login";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        //fetch
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        const token = data.user.token;

        //save user token
        localStorage.setItem("token", token);

    }

    return(
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;