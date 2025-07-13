import React from 'react'

const VideoTitle = ({title, overview}) => {

  //split('. '): splits the text into sentences. [0]: gets the first sentence. + '.': adds the period back, since split() removes it.
  const firstSentence = overview.split('. ')[0] + ".";

  return (
    <div className=" absolute -top-4 w-full aspect-video text-white bg-gradient-to-r grad from-black pt-22 xs:pt-27 sm:pt-48 md:pt-56  lg:pt-72 xl:pt-[26rem] pl-2 sm:pl-5 md:pl-7 lg:pl-14">
      <h1 className='text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold '>{title}</h1>
      <p className='text-neutral-400 text-[11px] xs:text-xs sm:text-sm lg:text-base xl:text-lg w-3/4 md:w-7/12 sm:w-5/12 lg:w-6/12 xl:w-5/12 mt-1 md:mt-4 xl:mt-6'>{firstSentence}</p>
      <div className="flex gap-2 lg:gap-5 mt-2">
        <button className='text-black font-medium text-xs px-2 py-1 sm:px-4 sm:py-2 md:text-base lg:text-lg lg:px-6 lg:py-3  bg-white/80  rounded sm:rounded-md cursor-pointer'>▶ Play</button>
        <button className='bg-gray-600/70 text-xs px-2 py-1  sm:px-4 sm:py-2 md:text-base lg:text-lg lg:px-6 lg:py-3 rounded sm:rounded-md cursor-pointer'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle