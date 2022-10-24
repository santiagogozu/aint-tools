import React from 'react'
import "./Item.scss";

export default function Item(props) {
  return (
    <li className='TodoItem'>
        <p>{props.text}</p>
    </li>
  )
}
