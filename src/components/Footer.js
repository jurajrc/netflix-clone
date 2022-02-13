import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyleFooter>
        <div className="footer-container">
            <p className='footer-top'>Questions? Contact us.</p>
            <ul>
                <li><a href="fqa">FQA</a></li>
                <li><a href="help">Help Center</a></li>
                <li><a href="account">Acount</a></li>
                <li><a href="Media">Media Center</a></li>
                <li><a href="investor">Investor Relations</a></li>
                <li><a href="jobs">Jobs</a></li>
                <li><a href="ways">Ways to Watch</a></li>
                <li><a href="terms">Terms of Use</a></li>
                <li><a href="privacy">Privacy</a></li>
                <li><a href="cookie">Cookie Preferences</a></li>
                <li><a href="information">Corporate Information</a></li>
                <li><a href="contact">Contact Us</a></li>
                <li><a href="speed_test">Speed Test</a></li>
                <li><a href="notices">Legal Notices</a></li>
                <li><a href="only_on_netflix">Only on Netflix</a></li>

            </ul>
            <div className="select-lan">
                <svg 
                    width="50" height="50" className='glob'  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26 49.9804C34.6275 49.641 42.1317 44.9295 46.3584 38H37.0011C34.4519 43.0908 30.4965 46.5068 26 46.9508V49.9804ZM26 44.9379C28.9131 44.5754 31.7199 42.6345 33.9425 39.3005C34.219 38.8858 34.4845 38.4519 34.7379 38H26V44.9379ZM24 38V44.9379C21.0869 44.5754 18.2801 42.6345 16.0575 39.3005C15.781 38.8858 15.5155 38.4519 15.2621 38H24ZM26 36H35.7292C37.0947 32.8682 37.9329 29.0998 37.9962 25H26V36ZM24 25V36H14.2708C12.9053 32.8682 12.0671 29.0998 12.0039 25H24ZM26 23H37.9652C37.7716 18.8472 36.782 15.0703 35.2647 12H26V23ZM24 12V23H12.0348C12.2284 18.8472 13.218 15.0703 14.7353 12H24ZM26 10H34.1388C34.074 9.89875 34.0086 9.79858 33.9425 9.6995C31.7199 6.36555 28.9131 4.42456 26 4.06213V10ZM24 4.06213V10H15.8612C15.926 9.89875 15.9914 9.79858 16.0575 9.6995C18.2801 6.36555 21.0869 4.42456 24 4.06213ZM26 2.04921C30.1954 2.46342 33.9196 5.46492 36.4702 10H45.0018C40.6276 4.17641 33.7693 0.325258 26 0.0196342V2.04921ZM24 0.0196342V2.04921C19.8046 2.46342 16.0804 5.46492 13.5298 10H4.99817C9.37244 4.17641 16.2307 0.325258 24 0.0196342ZM24 46.9508V49.9804C15.3725 49.641 7.86835 44.9295 3.64161 38H12.9989C15.5481 43.0908 19.5035 46.5068 24 46.9508ZM47.4562 36H37.8954C39.179 32.7685 39.938 29.0138 39.9964 25H50C50 28.9471 49.0853 32.6806 47.4562 36ZM49.9212 23H39.9672C39.7893 18.9462 38.8957 15.1856 37.4741 12H46.3584C48.3422 15.2523 49.604 18.9932 49.9212 23ZM3.64161 12H12.5259C11.1043 15.1856 10.2107 18.9462 10.0328 23H0.0788345C0.395988 18.9932 1.65782 15.2523 3.64161 12ZM0 25H10.0036C10.062 29.0138 10.821 32.7685 12.1046 36H2.54379C0.91474 32.6806 0 28.9471 0 25Z" fill="#999"/>
                </svg>

                <select>
                    <option value="en" >English</option>
                    <option value="cz" >Čeština</option>
                </select>
                <svg   
                    width="64" className='polygon' height="39"    viewBox="0 0 64 39" fill="none" xmlns="http://www.  w3.org/2000/svg">
                    <path d="M32 39L0.82309 0.75L63.1769 0.75L32 39Z" fill="#999"/>
                </svg>
            </div>
            <p className='footer-country'>Netflix Slovakia</p>
        </div>
    </StyleFooter>
  )
}
const StyleFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 70px 45px;
    .footer-container {
        max-width: 56.25em;
        color: #757575;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .footer-top {
            margin-bottom: 1.875em;
        }
    }

    ul {
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            margin-bottom: 1rem;
            @media (max-width: 740px) {
                width: 33.2%;
            }
            @media (max-width: 500px) {
                width: 50%;
            }
            a {
                font-size: 0.8125em;
                color: #757575;
                transition: 200ms ;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    select {
            border: 1px solid #333;
            border-radius: 3px;
            padding: 1em 2.5em 1em 3.5em; 
            line-height: 1.3rem;
            background: #000;
            color: #999;
            margin-right: 2rem;
            appearance: none;
            pointer-events: visible;
            pointer-events: inherit;
            outline: none;
            
        }

    .select-lan {
            position: relative;
            margin-top: 20px;
            svg {
                pointer-events: none;
            }
            .glob {
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                left: 19px;
                top: 50%;
                transform: translateY(-50%);
            }
            .polygon {
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                left: 6.5em;
                top: 50%;
                transform: translateY(-50%);
            }
            

        }

    .footer-country {
        font-size: 0.8125em;
        margin: 1.5em 0 1em 0;
    }

`

export default Footer