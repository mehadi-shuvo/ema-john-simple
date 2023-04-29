import React, { useContext, useState } from 'react';
import './LogOut.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/UserProvider';

const LogOut = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.from?.pathname || '/';
    console.log(from)

    const signUpHandler = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        console.log(email, password, confirm);
        setError('');
        if(password !== confirm){
            setError('Password did not match.');
            return;
        }
        else if(password.length<6){
            setError('Password have to 6 characters or longer');
            return;
        }
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div >
            <form onSubmit={signUpHandler} className=''>
                <div className='form-container'>
                    <h2 className='form-heading'>Sign Up</h2>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" required />
                    </div>
                    <button className='submit-btn'>Sign Up</button>
                    <p className='form-error'>{error}</p>
                    <p className='form-pre'>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LogOut;