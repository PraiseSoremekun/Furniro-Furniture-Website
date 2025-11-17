import React from 'react'

function BrowseRange() {
  return (
    <div className='mt-15'>
        <h3 className='text-center text-3xl font-bold'> Browse the range</h3>
        <p className='text-center text-[17px] text-[#666666]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='flex justify-between w-[70%] mx-auto mt-10 '>
          <div>
            <img src="./images/dinning.svg" alt="Dinning Room" className='w-[300px]'/>
            <p className='text-center mt-4 text-[18px] font-semibold'>Dining</p>
          </div>
          <div>
            <img src="./images/living-room.svg" alt="Living Room" className='w-[300px]' />
            <p className='text-center mt-4 text-[18px] font-semibold'>Living</p>
          </div>
          <div>
            <img src="./images/bedroom.svg" alt="Bedroom" className='w-[300px]' />
            <p className='text-center mt-4 text-[18px] font-semibold'>Bedroom</p>
          </div>
        </div>
    </div>
  )
}

export default BrowseRange