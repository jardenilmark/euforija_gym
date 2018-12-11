const getBase64 = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})
}

const converter = async targetFile => {
	const data = await getBase64(targetFile)
	return data
}

export { converter }
