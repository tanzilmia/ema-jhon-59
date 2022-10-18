import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mycontext } from '../../contextApi/UseContext';
import './Login.css'
const Login = () => {
    let {names,login} = useContext(mycontext)
    let navigetor = useNavigate()
    let locatiion = useLocation()
    let from = locatiion.state?.from?.pathname || '/';
    const handlelogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
            navigetor(from,{replace : true})
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='from_box'>
            <h2> Login Now</h2>
            <p>{names?.value}</p>
            <form onSubmit={handlelogin}>
                <div className="form_control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your Email' required />
                </div>
                <div className="form_control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Your Password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
            <p><small>New To Ema Jhon ?</small> <Link to ='/signup'>Create New Account</Link> </p>
        </div>
    );
};

export default Login;