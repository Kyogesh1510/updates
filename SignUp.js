import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SignUp = () => {
    return (
        <div className="auth-container">
            <Logo />
            <h2>Sign Up</h2>
            <form>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
    );
};

export default SignUp;
