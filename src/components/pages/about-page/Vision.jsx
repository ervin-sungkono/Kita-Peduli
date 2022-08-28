import React from 'react';
import VisionCard from './VisionCard';

import BackgroundImage from '../../../assets/images/backgroundCard.png';

const Vision = () => {
  return (
    <div className='vision-container'>
        <h2 className='vision-title'>Visi Kami</h2>
        <div className='vision-cards'>
          <VisionCard
            number='01'
            title='Education'
            caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.'
            image={BackgroundImage} />
          <VisionCard
            number='02'
            title='Education'
            caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.' />
          <VisionCard
            number='03'
            title='Education'
            caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.' />
          <VisionCard
            number='04'
            title='Education'
            caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.' />
        </div>
    </div>
  )
}

export default Vision;