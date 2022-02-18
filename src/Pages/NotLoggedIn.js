import React, { useState, useEffect } from 'react';
// Components
import OurCards from '../components/notLoggedIn/OurCards';
// Images
import backLarge from '../assects/background-netflix-large.jpg'
// style
import styled from 'styled-components';

const NotLoggedIn = ({ setLoggeding }) => {
  const [isfocus, setIsfocus] = useState(false)

  useEffect(() => {
    setLoggeding(true)
  }, [])

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
  @media (max-width: 700px) {
    padding: 3.12em 5%;
  }
  
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
      background: url(${backLarge});
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
    @media (max-width: 500px) {
      padding-top: 1em;
    }

    h1 {
      font-size: 4rem;
      width: 700px;
      text-align: center;
      @media (max-width: 1450px) {
        font-size: 3.125rem;
        width: 600px;
      }
      @media (max-width: 560px) {
        width: 100%;
        font-size: 1.75rem;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem auto;
      @media (max-width: 560px) {
          font-size: 1.125rem;
          text-align: center;
        }
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
      @media (max-width: 740px) {
        font-size: 1rem;
      }
    }
    .form-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      @media (max-width: 900px) {
            flex-direction: column;
      }

      .input-container {
        position: relative;
        width: 31.26em;
        @media (max-width: 660px) {
          width: 100%;
        }

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
          display: block;
          width: 100%;
          height: 60px;
          padding: 20px 0 0 10px;
          outline: none;
          font-weight: 500;
          @media (max-width: 740px) {
            height: 45px;
          }
          
        }
      }
      .button {
        //min-height: 60px;
        button {
          height: 2.3em;
          line-height: 2.3em;
          font-size: 1.625em;
          background-color: rgb(229,9,20);
          color: #fff;
          border: none;
          border-left: 1px solid #333;
          padding: 0 1em;
          cursor: pointer;
          &:hover {
            background-color: rgb(244,6,18);
          }
          svg {
            height: 0.8em;
            margin-left: 0.5em;
          }
          @media (max-width: 900px) {
            font-size: 95%;
            margin-top: 0.8em;
            border-radius: 0.15em;
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