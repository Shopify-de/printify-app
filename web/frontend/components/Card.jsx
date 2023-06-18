import React from 'react'
import { Link } from "react-router-dom";
import './card.css'

export function Card(props) {
  const item = props?.data

  return (
    <Link to={`/details?id=${item.id}`}>
      
    <div className='card_item'>
        <div className='card_image'>
          <span className={`${item.tag[0].replaceAll(" ", '')} card_tag`} >{item.tag[0]}</span>
          <img className="card_media" src={item.featureImage} />
          <img className="card_media_hover" src={item.media[1].src} />
        </div>
        <div className='card_content'>
          <h6 className='card_title'>{item.title}</h6>
          <p className='card_tagline'>{item.tagline}</p>
        </div>
    </div>
    </Link>
  )
}
