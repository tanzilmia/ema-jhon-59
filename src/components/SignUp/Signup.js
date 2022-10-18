import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mycontext } from '../../contextApi/UseContext';

const Signup = () => {
    const naviget = useNavigate()
const [error, seterror] = useState(null)
const {registration} = useContext(mycontext)


    const handelSignin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(email,password,confirm);
        if(password !== confirm){
            seterror('password not match , plese provide same password')
            return;
        }
        if(password.length < 6 ){
            seterror('passwod less then at 6 charecture')
            return;
        }

        registration(email,password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            naviget('/')
        })
        .cathc(error => console.error(error))

    }



    return (
        <div className='from_box'>
        <h2> SignIn Now</h2>
        <form onSubmit={handelSignin}>
            <div className="form_control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Your Email' required />
            </div>
            <div className="form_control">
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder='Your Password' required />
            </div>
            <div className="form_control">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm" placeholder='Your Password' required />
            </div>
            <button type='submit'>SignIn</button>
        </form>
        <p><small>Already have an account ?</small> <Link to ='/login'>Login </Link> </p>
         <p>{error}</p>
    </div>
    );
};

export default Signup;