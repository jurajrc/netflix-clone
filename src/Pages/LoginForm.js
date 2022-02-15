import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Images
import backImage from '../assects/background-netflix-large.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInOut, fadeIn } from '../animations'

const LoginForm = ({ toggle,  Login, error, ok }) => {
    const [focus1, setFocus1] = useState(false)
    const [focus2, setFocus2] = useState(false)
    
    const [details, setDetails] = useState({email: "", password: ""})
  
    const submitHandler = (e) => {
      e.preventDefault()
      Login(details)
    }
   
    useEffect(() => {
      toggle(false)
    }, [])

    const addClass1 = () => {
        setFocus1(true)
    }
    const removeClass1 = (e) => {
        if(!e.target.value) setFocus1(false)
    }
    const addClass2 = () => {
        setFocus2(true)
    }
    const removeClass2 = (e) => {
        if(!e.target.value) setFocus2(false)
    }

  return (
    <StyleLogged>
        <StyleGradient />
        <header>
            <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="276.742" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26"/></svg>
            </a>
        </header>
        <AnimatePresence>
        {ok && (
            <StyleLinkLoggedIn variants={fadeIn} initial="hidden" animate="show" className="link-logged-in">
                <div className="one-user">
                    <Link to="/logged-in" onClick={() => toggle(true)}>
                        <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 3">
                        <rect id="Rectangle 5" width="152" height="152" rx="4" fill="url(#paint0_linear_113_13)"/>
                        <circle id="Ellipse 5" cx="30" cy="50" r="9" fill="white"/>
                        <circle id="Ellipse 6" cx="122" cy="50" r="9" fill="white"/>
                        <path id="Line 6" d="M65.9919 84.5001C90.3519 95.2543 103.897 94.9236 127.992 83.5001" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_113_13" x1="76" y1="0" x2="76" y2="152" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0A72E6"/>
                        <stop offset="1" stopColor="#4E98ED"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </Link>
                    <h3>Brainit</h3>
                </div>

            </StyleLinkLoggedIn>
        )}
        </AnimatePresence>
        <div className="login-body">
            <div className="sign-in">
                <main>
                    <h1>Sign In</h1>
                    <AnimatePresence>
                    {error && (
                        <motion.div variants={fadeInOut} initial="hidden" animate="show" exit="exit" className="error">
                            <h3>Wrong password or email !!!</h3>
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <form onSubmit={submitHandler}>
                        <div className="input-container">
                            <p className={`placeholder ${focus1 ? 'focus-input' : ""}`} >Email or phone number</p>
                            <input 
                                onFocus={addClass1} 
                                onBlur={removeClass1} 
                                onChange={e => setDetails({...details, email: e.target.value})} 
                                value={details.email} type="email" name='email' 
                                className='input-loggin' />
                        </div>
                        <div className="input-container">
                            <p className={`placeholder ${focus2 ? 'focus-input' : ""}`} >Password</p>
                            <input 
                                onFocus={addClass2} 
                                onBlur={removeClass2} 
                                onChange={e => setDetails({...details, password: e.target.value})} 
                                value={details.password} type="password" name='password' 
                                className='input-loggin-password' />
                        </div>
                        
                        <input type="submit" value="Sign In" className='login'/>
                    </form>
                    <div className="form-help">
                        <div className="check">
                            <input type="checkbox" />
                            <label htmlFor="remember me">Remember me</label>
                        </div>
                        <a href="/">Need help?</a>
                    </div>
                </main>
            </div>
        </div>

    </StyleLogged>
  )
}
const StyleLogged = styled.div`
    width: 100%;
    min-height: 50vh;
    background: url(${backImage});
    background-position: left;
    background-size: cover;
    position: relative;
    backface-visibility: visible;
    color: #fff;

    header {
        width: 100%;
        height: 90px;
        margin: 0 0rem;
        z-index: 2;
        position: relative;
        
        a {
            display: block;
            width: 10.4375rem;
            height: 2.8125rem;
            padding: 1.72em 0 1.72em 2em;
            svg {
                width: 10.4375rem;
                height: 2.8125rem;
            }
        }
    }
    .login-body {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
    }
    .sign-in {
        width: 450px;
        min-height: 650px;
        background: rgba(0, 0, 0, 0.75);
        margin-bottom: 5.625em;
        padding: 60px 68px 40px;

        h1 {
            font-size: 2em;
            margin-bottom: 28px;
        }
        .error {
            width: 100%;
            height: 50px;
            background: transparent;
            border-radius: 0.3rem;
            border: 2px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }
        form {
            transition: 250ms all ease;
        }
        .input-container {
            position: relative;
            margin-bottom: 1em;

            .placeholder {
                position: absolute;
                color: #000000;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                font-weight: 400;
                pointer-events: none;
                transition: 250ms all ease;
            }
            // change to focus input
            .focus-input {
                top: 25%;
                font-size: 0.7em;
                font-weight: 400;
            }
            input {
                font-size: 1.1rem;
                width: 100%;
                height: 50px;
                padding: 20px 0 0 20px;
                outline: none;
                font-weight: 500;
                border: none;
                border-radius: 0.3em;
            }
        }
        .login {
            font-size: 1.2rem;
            width: 100%;
            height: 50px;
            border: none;
            border-radius: 0.3em;
            background: #e50914;
            color: #fff;
            font-weight: 600;
            margin-top: 1.6rem;
            cursor: pointer;
        }
        .form-help {
            font-size: 0.85rem;
            display: flex;
            justify-content: space-between;
            margin: 1em 0;
            color: #999;
            a {
                pointer-events: none;
                color: #999;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
const StyleGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
`
const StyleLinkLoggedIn = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h3 {
        text-align: center;
        margin: 0.5em;
    }
    svg {
        transition: 250ms all ease;
        border: 2px solid #000;
    }
    .one-user:hover svg {
        
        border: 2px solid white;
        border-radius: 0.3em;
    }
`

export default LoginForm