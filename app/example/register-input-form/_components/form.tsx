import { useRegisterForm } from "../_hooks/use-register";

export default function registrationForm() {
    const {
        username,email,password,cPassword,
        handleUsername,handleEmail,handlePassword,handleCPassword,handleSubmit
    }=useRegisterForm();
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" required value={username} onChange={handleUsername}></input>
            </div>
                        <div>
                <label>Email:</label>
                <input type="email" required value={email} onChange={handleEmail}></input>
            </div>
                        <div>
                <label>Password:</label>
                <input type="password" required value={password} onChange={handlePassword}></input>
            </div>

                        <div>
                <label>Confirm Password:</label>
                <input type="password"required value={cPassword} onChange={handleCPassword}></input>
            </div>
            <button type="submit">submit</button>
            </form>
        </div>
    );
}