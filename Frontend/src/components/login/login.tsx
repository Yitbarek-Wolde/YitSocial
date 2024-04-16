import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LoginSignup() {
    const [loginData, setLogin] = useState({ loginEmail: '', loginPass: '' })
    const [signupData, setSignup] = useState({ userEmail: "", password: "", firstName: "", lastName: "", userName: "", userBirthDate: "", userPhoneNumber: "" })
    const [errorMes, setErrormes] = useState({ change: false, message: '' })
    
    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3001/users/signin',
                { ...loginData },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            console.log(response?.data);


            if (!response.data.success) {
                setErrormes({ change: true, message: response.data.data })
            } else {
                setErrormes({ change: false, message: '' })
            }
        } catch (err) {
            console.log(err + " came here")
        }
    }

    const handleSignup = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3001/users/signup',
                { ...signupData },
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true
                }
            );
            console.log(response?.data);


        } catch (err) {
            console.log(err + " came here")
        }
    }

    return (
        <>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src="./Images/frontImg.jpg" />
                        <div className="text">
                            <span className="text-1">Every new friend is a <br /> new adventure</span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">
                        <img className="backImg" src="./Images/backImg.jpg" />
                        <div className="text">
                            <span className="text-1">Complete miles of journey  with one step</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <div className="forms" id="root">
                    <div className="form-content">
                        <div className="login-form">
                            <form action="#" id="login_form">
                                <p style={{color:"red", fontWeight: 'bolder'}}>{errorMes.change && errorMes.message}</p>
                                {/*<!-- login starts here --!>*/}
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope"></i>
                                        {/*<!-- here put the email --!>*/}
                                        <input type="text" placeholder="Enter your email" value={loginData.loginEmail} onChange={(e) => setLogin({ ...loginData, loginEmail: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        {/*<!-- here put the password --!>*/}
                                        <input type="password" placeholder="Enter your password" value={loginData.loginPass} onChange={(e) => setLogin({ ...loginData, loginPass: e.target.value })} required />
                                    </div>
                                    <div className="text"><a href="#">Forgot password?</a></div>
                                    <div className="button input-box">
                                        <input type="submit" value="Login" onClick={handleLogin} />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                                </div>
                                {/*<!-- ends here --!>*/}
                            </form>
                        </div>
                        <div className="signup-form">
                            <form action="#">
                                {/*<!-- sign up start --!>*/}
                                <div className="input-boxes">
                                    {/*<!--addtions--!>*/}
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Enter your first name" value={signupData.firstName} onChange={(e) => setSignup({ ...signupData, firstName: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Enter your last name" value={signupData.lastName} onChange={(e) => setSignup({ ...signupData, lastName: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="choose a username" value={signupData.userName} onChange={(e) => setSignup({ ...signupData, userName: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="date" placeholder="Enter your date od birth" value={signupData.userBirthDate} onChange={(e) => setSignup({ ...signupData, userBirthDate: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="number" placeholder="Enter your phone number" value={signupData.userPhoneNumber} onChange={(e) => setSignup({ ...signupData, userPhoneNumber: e.target.value })} required />
                                    </div>

                                    <div className="input-box">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" value={signupData.userEmail} onChange={(e) => setSignup({ ...signupData, userEmail: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" value={signupData.password} onChange={(e) => setSignup({ ...signupData, password: e.target.value })} required />
                                    </div>

                                    <div className="button input-box">
                                        <input type="submit" value="Sign Up" onClick={handleSignup} />
                                    </div>

                                    {/*<!-- gone to front end --!>*/}
                                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default LoginSignup;