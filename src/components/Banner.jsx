import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://cdn.marvel.com/content/1x/theavengers_lob_mas_dsk_03_1.jpg)`}}>
      <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4'>Avengers Endgame</div>
    </div>
  )
}

export default Banner