import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SignIn = () => {
    return (
        <div className="auth-container">
            <Logo />
            <h2>Sign In</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default SignIn;
