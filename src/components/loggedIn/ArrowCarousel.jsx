import React from 'react'

const ArrowCarousel = ({ nameClass, click }) => {
  return (
    <div className={nameClass} onClick={click} >
        <svg width="18" height="35" viewBox="0 0 18 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.7876 17.0585L0.631335 2.57115L3.69551 0L17.9589 17.0415L18.0002 17.0693L3.48459 34.1678L0.519165 31.6795L12.7876 17.0585Z" fill="white"/>
        </svg>
    </div>
  )
}

export default ArrowCarousel