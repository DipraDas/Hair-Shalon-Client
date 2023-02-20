import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if(token){
    //     navigate('/');
    // }

    // const handleSignUp = (data) => {
    //     setSignUPError('');
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             toast('User Created Successfully.')
    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(() => {
    //                     saveUser(data.name, data.email);
    //                 })
    //                 .catch(err => console.log(err));
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             setSignUPError(error.message)
    //         });
    // }

    // const saveUser = (name, email) =>{
    //     const user ={name, email};
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         setCreatedUserEmail(email);
    //     })
    // }


    return (
        <div className='register'>
            <div className="container mx-auto">
                <h1>Register</h1>
                <form>
                    <div className="form-control w-full max-w-xs p-0 border-0">
                        <label className="label mb-1"> <span className="label-text">Name</span></label> <br />
                        <input
                            style={{ width: '100%', border: '1px solid #d7d7d7', outline: 'none' }} type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full  p-2" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs p-0 border-0">
                        <label className="label mb-1 mt-3"> <span className="label-text">Email</span></label> <br />
                        <input style={{ width: '100%', border: '1px solid #d7d7d7', outline: 'none' }} type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs  p-2" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full p-0 border-0">
                        <label className="label mb-1 mt-3"> <span className="label-text">Password</span></label> <br />
                        <input style={{ width: '100%', border: '1px solid #d7d7d7', outline: 'none' }} type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full  p-2" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input style={{ backgroundColor: '#000', color: '#fff', marginTop: '20px', padding: '7px 25px' }} className='w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-3 pb-3' style={{ textDecoration: 'none', color: '#d4a977' }} >Already have an account? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;