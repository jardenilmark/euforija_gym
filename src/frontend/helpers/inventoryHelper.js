const onSubmit = props => {
	const { activeItem, filterList, setFilteredInv, priceOne, priceTwo, nameVal } = props
	if (priceOne && priceTwo && activeItem !== 'name') {
		filterList({ name: activeItem, value: priceOne, valueTwo: priceTwo })
	} else if (nameVal) {
		filterList({ name: activeItem, value: nameVal })
	} else {
		setFilteredInv([])
	}
}

export { onSubmit }
