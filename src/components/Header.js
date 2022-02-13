import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {

  return (
    <StyleHeader>
        <div className="container">
            <div className="logo">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="276.742" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26"/></svg>
                </a>
            </div>
            <div className="menu">
            <svg 
                width="50" height="50" className='glob'  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M26 49.9804C34.6275 49.641 42.1317 44.9295 46.3584 38H37.0011C34.4519 43.0908 30.4965 46.5068 26 46.9508V49.9804ZM26 44.9379C28.9131 44.5754 31.7199 42.6345 33.9425 39.3005C34.219 38.8858 34.4845 38.4519 34.7379 38H26V44.9379ZM24 38V44.9379C21.0869 44.5754 18.2801 42.6345 16.0575 39.3005C15.781 38.8858 15.5155 38.4519 15.2621 38H24ZM26 36H35.7292C37.0947 32.8682 37.9329 29.0998 37.9962 25H26V36ZM24 25V36H14.2708C12.9053 32.8682 12.0671 29.0998 12.0039 25H24ZM26 23H37.9652C37.7716 18.8472 36.782 15.0703 35.2647 12H26V23ZM24 12V23H12.0348C12.2284 18.8472 13.218 15.0703 14.7353 12H24ZM26 10H34.1388C34.074 9.89875 34.0086 9.79858 33.9425 9.6995C31.7199 6.36555 28.9131 4.42456 26 4.06213V10ZM24 4.06213V10H15.8612C15.926 9.89875 15.9914 9.79858 16.0575 9.6995C18.2801 6.36555 21.0869 4.42456 24 4.06213ZM26 2.04921C30.1954 2.46342 33.9196 5.46492 36.4702 10H45.0018C40.6276 4.17641 33.7693 0.325258 26 0.0196342V2.04921ZM24 0.0196342V2.04921C19.8046 2.46342 16.0804 5.46492 13.5298 10H4.99817C9.37244 4.17641 16.2307 0.325258 24 0.0196342ZM24 46.9508V49.9804C15.3725 49.641 7.86835 44.9295 3.64161 38H12.9989C15.5481 43.0908 19.5035 46.5068 24 46.9508ZM47.4562 36H37.8954C39.179 32.7685 39.938 29.0138 39.9964 25H50C50 28.9471 49.0853 32.6806 47.4562 36ZM49.9212 23H39.9672C39.7893 18.9462 38.8957 15.1856 37.4741 12H46.3584C48.3422 15.2523 49.604 18.9932 49.9212 23ZM3.64161 12H12.5259C11.1043 15.1856 10.2107 18.9462 10.0328 23H0.0788345C0.395988 18.9932 1.65782 15.2523 3.64161 12ZM0 25H10.0036C10.062 29.0138 10.821 32.7685 12.1046 36H2.54379C0.91474 32.6806 0 28.9471 0 25Z" fill="white"/>
                </svg>

                <select>
                    <option value="en" >English</option>
                    <option value="cz" >Čeština</option>
                </select>
                <svg   
                    width="64" className='polygon' height="39"    viewBox="0 0 64 39" fill="none" xmlns="http://www.  w3.org/2000/svg">
                    <path d="M32 39L0.82309 0.75L63.1769 0.75L32 39Z" fill="white"/>
                </svg>

                
                <a href="/login">Sign In</a>
            </div>
        </div>
    </StyleHeader>
  )
}

const StyleHeader = styled.header`
    width: 100%;
    height: 100px;
    padding-top: 20px;
    position: relative;
    z-index: 2;
    background-color: transparent;

    .container {
        margin: 0 4.6rem;
        padding-top: 0.5rem; 
        display: flex;
        justify-content: space-between; 
        align-items: center;

        select {
            border: 1px solid #aaa;
            border-radius: 3px;
            padding: 7px 1.6rem; 
            line-height: 1.3rem;
            background: rgba(0, 0, 0, 0.4);
            color: #fff;
            margin-right: 2rem;
            appearance: none;
            pointer-events: visible;
            pointer-events: inherit;
            
            
        }
        .menu {
            position: relative;
            svg {
                pointer-events: none;
            }
            .glob {
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            .polygon {
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                left: 75px;
                top: 50%;
                transform: translateY(-50%);
            }
            
            a {
                background: #e50914;
                color: #fff;
                padding: 7px 17px;
                border-radius: 3px;
                
            }

        }
    }

    svg {
        width: 10.4375rem;
        height: 2.8125rem
    }
`

export default Header