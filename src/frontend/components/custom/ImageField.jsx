import React from 'react'

const adaptFileEventToValue = delegate => async e => {
	delegate(e.target.files[0])
}

//TODO: fix uncalled adaptFileEventToValue when initial value is set on item edit

const FieldComponent = ({
	input: { value: omitValue, onChange, onBlur, ...inputProps },
	meta: omitMeta,
	...props
}) => {
	return (
		<input
			onChange={adaptFileEventToValue(onChange)}
			onBlur={adaptFileEventToValue(onBlur)}
			type={'image'}
			accept={'.jpg,.jpeg,.png'}
			{...props.input}
			{...props}
		/>
	)
}

export default FieldComponent
