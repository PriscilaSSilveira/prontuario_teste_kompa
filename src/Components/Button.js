import React from 'react'

export default function Button(props) {
  return (
    <button id={props.id} class={props.className} onClick={props.handleClick}>
      {props.title}
      {props.addtitle}
    </button>
  )
}
