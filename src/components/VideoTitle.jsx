import React from 'react'

const VideoTitle = ({title, overview}) => {

  //split('. '): splits the text into sentences. [0]: gets the first sentence. + '.': adds the period back, since split() removes it.
  const firstSentence = overview.split('. ')[0] + ".";

  return (
    <div>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold  '>{title}</h1>
      <p className='text-sm w-3/4 md:w-7/12 lg:w-4/12'>{firstSentence}</p>
      <div>
        <button >Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle