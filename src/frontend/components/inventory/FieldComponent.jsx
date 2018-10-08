import React from 'react'

const adaptFileEventToValue = (delegate) => async e => {
  delegate(e.target.files[0])
}

const FieldComponent = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type='file'
      accept='.jpg,.jpeg,.png'
      {...props.input}
      {...props}
    />
  )
}

export default FieldComponent
