import React, { useContext } from 'react';
import './LogIn.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/UserProvider';

const LogIn = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(location.state)

    const loginHandler = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true })
        })
        .catch(error=>{
            console.log(error)
        });
        const toSingUp =()=>{
            navigate('/signup', )
        }
    }
    return (
        <div>
            <form onSubmit={loginHandler} className=''>
                <div className='form-container'>
                    <h2 className='form-heading'>Login</h2>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required/>
                    </div>
                    <button className='submit-btn'>Login</button>
                    <p className='form-pre'>New to Ema-John? <Link to='/signup' state={{from:location.state}}>Create account</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LogIn;