import React from 'react';

import NewsThumbnailImage from '../../../assets/images/slide-img/slide-img2.png';

const Mission = () => {
  return (
    <div className='mission-container'>
        <h2 className='mission-title'>Misi Kami</h2>
        <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu urna, etiam vel viverra pellentesque. Facilisis facilisi mi mauris viverra elementum nibh duis. Dui odio amet, in elementum lectus augue ullamcorper auctor.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu urna, etiam vel viverra pellentesque. Facilisis facilisi mi mauris viverra elementum nibh duis. Dui odio amet, in elementum lectus augue ullamcorper auctor.
        </p>
        <img className='mission-image' src={NewsThumbnailImage} alt='Gambar Misi' />
    </div>
  )
}

export default Mission;