import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const API_URL = "http://localhost:3000/auth/login";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //Context use
    const { setUser } = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);

        setIsLoading(true);

        try{
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

            setIsLoading(false);
    
            const data = await res.json();

            if(!res.ok) {
                setError(data.message || "Incorrect log-in, please try again.");
                console.log(data.message);
                return;
            }

            const token = data.user.token;
    
            //save user token
            localStorage.setItem("token", token);
    
            //Set global state
            setUser(data.user.user);
    
            localStorage.setItem("user", JSON.stringify(data.user.user));
        } catch(error) {
            setError("Cannot connect to server.");
            console.error(error);
        }

    }

    return(
        <div>
            <h1>Login</h1>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            
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

                {
                    !isLoading && 
                    <button type="submit">Submit</button>
                }
            </form>
        </div>
           
    );
}

export default Login;