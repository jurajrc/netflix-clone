import React from 'react'
import styled from 'styled-components'
// Images
import oneImg from '../../assects/home_card/tv.png'
import twoImg from '../../assects/home_card/mobile-0819.jpg'
import treeImg from '../../assects/home_card/device-pile.png'
import m4v_ntflix from '../../assects/home_card/video-tv-0819.m4v'
import m4v_things from '../../assects/home_card/video-devices.m4v'

const OurCards = () => {
  return (
    <>
    <StyleSection>
      <div className="card-container">
        <div className="card-left">
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>

        <div className="card-right">
          <div className="img-container">

            <div className="img">
              <img src={oneImg} alt="video-tv" />
            </div>

            <div className="inner">
              <video autoPlay muted loop playsInline >
                <source src={m4v_ntflix} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      </div>
        
    </StyleSection>

    <StyleSection>
      <div className="card-container">
        <div className="card-left">
          <div className="img-container">

            <div className="img">
              <img src={twoImg} alt="video-tv" />
            </div>
          </div>
        </div>

        <div className="card-right">
          <h1>Download your shows to watch offline.</h1>
          <h2>Save your favorites easily and always have something to watch.</h2>
        </div>
      </div>
        
    </StyleSection>

    <StyleSection>
      <div className="card-container">
        <div className="card-left">
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
        </div>

        <div className="card-right">
          <div className="img-container-last">

            <div className="img">
              <img src={treeImg} alt="video-tv" />
            </div>

            <div className="inner">
              <video autoPlay muted loop playsInline >
                <source src={m4v_things} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      </div>
        
    </StyleSection>
    </>
  )
}
const StyleSection = styled.section`
  color: #fff;
  width: 100%;
  padding: 4.375em 2.8125em;
  border-bottom: 8px solid #222;
  
  .card-container {
    max-width: 1100px;
    display: flex;
    margin: 0 auto;

    @media (max-width: 950px) {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 3.125em;
      margin-bottom: 0.4rem;
      @media (max-width: 950px) {
        
        text-align: center;
      }
    }
    h2 {
      font-size: 1.625em;
      margin: 0.75em 0 0.25em;
      font-weight: 400;
      @media (max-width: 950px) {
        text-align: center;
      }
    }
    .card-left,
    .card-right {
      width: 50%;
      @media (max-width: 950px) {
        width: 90%;
      }
    }
    .card-left {
      padding-right: 3em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 950px) {
        padding: 0;
      }
    }
    
    .img-container {
      width: 100%;
      position: relative;
      margin: -10% -5% -5% 0;
      @media (max-width: 950px) {
        max-width: 38em;
        margin: 0 auto;
      }
      img {
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
      }
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 73%;
        max-height: 54%;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        video {
          width: 100%;
          height: 100%;
        }
      }
    }
    .img-container-last {
      width: 100%;
      position: relative;
      margin: -5% -10% 0 0;
      @media (max-width: 950px) {
        max-width: 38em;
        margin: 0 auto;
      }
      img {
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
      }
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 63%;
        max-height: 47%;
        top: 32%;
        left: 50%;
        transform: translate(-50%, -50%);
        video {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`

export default OurCards