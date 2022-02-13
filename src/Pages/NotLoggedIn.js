import React, { useState } from 'react';
// Components
import OurCards from '../components/notLoggedIn/OurCards';
// Images
import backLarge from '../assects/background-netflix-large.jpg'
// style
import styled from 'styled-components';

const NotLoggedIn = () => {
  const [isfocus, setIsfocus] = useState(false)

// check input focus or not or value is 
  const addClass = (e) => {
    setIsfocus(true)
  }
  const removeClass = (e) => {
    if(!e.target.value) {
      setIsfocus(false)
    }
  }

  return (
    <article style={{zIndex: 0}}>
        <StyleSection>
            <div className="background">
                <div className="img-wraper">
                  <div className="image"></div>
                    <StyleGradient />
                </div>
            </div>
            <div className="content">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <form>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="form-container">

                  <div className="input-container">
                    <p className={`placeholder ${isfocus ? 'focus-input' : ""}`} >Email address</p>
                    <input onFocus={addClass} onBlur={removeClass} type="email" name='email' className='input-home' />
                  </div>
                  
                  <div className="button">
                    <button>Get Started
                    <svg viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M 0.61 1.312 l 0.78 -0.624 L 5.64 6 l -4.25 5.312 l -0.78 -0.624 L 4.36 6 Z" fill="white"/>
                    
                    </svg>
                    </button>
                  </div>

                </div>
              </form>
            </div>
        </StyleSection>

        <OurCards />

    </article>
  )
}

const StyleSection = styled.section`
  position: relative;
  width: 100%;
  //height: 650px;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  
  .background {
    position: absolute;
    top: -100px;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;

    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url(${backLarge}), #00000096;
      background-blend-mode: difference;
      background-position: center;
      background-size: cover;
    }
  }
  .content {
    color: #fff;
    position: relative;
    z-index: 2;
    padding: 75px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 4rem;
      width: 700px;
      text-align: center;
      @media (max-width: 1450px) {
        font-size: 3.125rem;
        width: 600px;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem auto;
    }
  }
  form {
    max-width: 950px;
    padding-top: 0.85rem;
    h3 {
      padding-bottom: 20px;
      font-size: 1.2rem;
      font-weight: 400;
      text-align: center;
    }
    .form-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .input-container {
        position: relative;

        .placeholder {
          position: absolute;
          color: #8c8c8c;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          font-weight: 400;
          pointer-events: none;
          transition: 250ms all ease;
        }
        // change to focus input
        .focus-input {
          top: 25%;
          font-size: 0.8em;
          font-weight: 600;
        }
        input {
          min-width: 450px;
          height: 60px;
          padding: 20px 0 0 10px;
          outline: none;
          font-weight: 500;
        }
      }
      .button {
        //min-height: 60px;
        button {
          height: 60px;
          line-height: 60px;
          font-size: 1.625rem;
          background-color: rgb(229,9,20);
          color: #fff;
          border: none;
          border-left: 1px solid #333;
          padding: 0 1.625rem;
          cursor: pointer;
          &:hover {
            background-color: rgb(244,6,18);
          }
          svg {
            height: 1.3rem;
            margin-left: 0.5rem;
          }
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
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%);

`

export default NotLoggedIn