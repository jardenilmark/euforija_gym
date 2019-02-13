const getBase64 = file => {
	console.log('FILE', file)
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})
}

function getFile(base64String) {
	const base64Image = base64String
	const arr = base64Image.split(';')
	const contentType = arr[0].split(':')[1]
	const imageData = arr[1].split(',')[1]

	const sliceSize = 512

	const byteCharacters = atob(imageData)
	let byteArrays = []

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize)

		const byteNumbers = new Array(slice.length)
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i)
		}

		const byteArray = new Uint8Array(byteNumbers)

		byteArrays.push(byteArray)
	}

	const blob = new Blob(byteArrays, { type: contentType })
	const file = new File([blob], 'image', { lastModified: new Date() })
	return file
}

const converter = async targetFile => {
	const data = await getBase64(targetFile)
	return data
}

export { converter, getFile }
