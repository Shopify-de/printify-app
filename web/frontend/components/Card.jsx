import React from 'react'
import './card.css'

export function Card(props) {
  const item = props?.data


  return (
    <div className='card_item'>
      <a href='#' className='item_link'>
        <div className='card_image'>
          <span className={`${item.tag[0].replaceAll(" ", '')} card_tag`} >{item.tag[0]}</span>
          <img className="card_media" src={item.featureImage} />
          <img className="card_media_hover" src={item.media[1].src} />
        </div>
        <div className='card_content'>
          <h6 className='card_title'>{item.title}</h6>
          <p className='card_tagline'>{item.tagline}</p>
        </div>
      </a>
    </div>
  )
}
