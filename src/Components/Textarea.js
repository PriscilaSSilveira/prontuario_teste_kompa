import React from 'react'

export default function Textarea(props) {
  return (
    <textarea
      ref={props.value}
      type={props.type}
      class={props.className}
      id={props.id}
      onChange={props.onChange}
      maxlength={props.maxlength}
      minlength={props.minlength}

    />
  )
}
