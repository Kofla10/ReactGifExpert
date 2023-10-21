import React from 'react'

const GifItem = ({url, title}) => {
  return (
        <div className='card' >
            <img src={url} alt={title}  />
            <div >
                <p >{title}</p>
            </div>
        </div>
  )
}

export default GifItem;