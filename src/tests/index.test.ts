import { expect } from '@std/expect'
import { Parser } from '../index.ts'

const decoder = new TextDecoder()
const html = decoder.decode(Deno.readFileSync('./src/tests/fixtures/Real.html'))

Deno.test('Works as expected (not snapshots on Deno yet)', () => {
	const parser = new Parser({
		ontext(data) {
			expect(data).toBeTruthy()
		},
		onattribute(name, value) {
			expect(name).toBeTruthy()
			expect(value).toBeDefined()
		},
	})
	parser.parseComplete(html)
})
