 import React, { FC, useState } from 'react';
 
 const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            <input value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <div>Login</div>
            <div>Register</div> 
        </div>
    );
 };
 
 export default LoginForm;