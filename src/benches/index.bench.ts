import { Parser } from '../index.ts'

const html = await (await fetch('https://accuweather.com/')).text()

Deno.bench('No options', function () {
	let text = ''
	let attr = ''

	const parser = new Parser({
		ontext(data) {
			text += data
		},
		onattribute(data) {
			attr += data
		},
		onend() {
			console.log(text)
		},
	})

	parser.parseComplete(html)
})

Deno.bench('No decoding', function () {
	let text = ''
	let attr = ''

	const parser = new Parser({
		ontext(data) {
			text += data
		},
		onattribute(data) {
			attr += data
		},
	}, { decodeEntities: false })

	parser.parseComplete(html)
})
