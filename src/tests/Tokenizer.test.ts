// import type { TokenizerCallbacks } from '../Tokenizer.ts'

// function tokenize(data: string, options = {}) {
// 	const log: unknown[][] = []
// 	const tokenizer = new Tokenizer(
// 		options,
// 		new Proxy(
// 			{},
// 			{
// 				get(_, property) {
// 					return (...values: unknown[]) => log.push([property, ...values])
// 				},
// 			},
// 		) as TokenizerCallbacks,
// 	)

// 	tokenizer.write(data)
// 	tokenizer.end()

// 	return log
// }

Deno.test.ignore('Self-closing special tags: for self-closing script tag', () => {
	// expect(tokenize('<script /><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Self-closing special tags: for self-closing style tag', () => {
	// expect(tokenize('<style /><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Self-closing special tags: for self-closing title tag', () => {
	// expect(tokenize('<title /><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Self-closing special tags: for self-closing textarea tag', () => {
	// expect(tokenize('<textarea /><div></div>')).toMatchSnapshot()
})

Deno.test.ignore('Standard special tags: for normal script tag', () => {
	// expect(tokenize('<script></script><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Standard special tags: for normal style tag', () => {
	// expect(tokenize('<style></style><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Standard special tags: for normal sitle tag', () => {
	// expect(tokenize('<title></title><div></div>')).toMatchSnapshot()
})
Deno.test.ignore('Standard special tags: for normal textarea tag', () => {
	// expect(tokenize('<textarea></textarea><div></div>')).toMatchSnapshot()
})

Deno.test.ignore('Html inside special tags as text: for div inside script tag', () => {
	// expect(tokenize('<script><div></div></script>')).toMatchSnapshot()
})
Deno.test.ignore('Html inside special tags as text: for div inside style tag', () => {
	// expect(tokenize('<style><div></div></style>')).toMatchSnapshot()
})
Deno.test.ignore('Html inside special tags as text: for div inside title tag', () => {
	// expect(tokenize('<title><div></div></title>')).toMatchSnapshot()
})
Deno.test.ignore('Html inside special tags as text: for div inside textarea tag', () => {
	// expect(tokenize('<textarea><div></div></textarea>')).toMatchSnapshot()
})

Deno.test.ignore('Mark attributes: for no value attribute', () => {
	// expect(tokenize('<div aaaaaaa >')).toMatchSnapshot()
})
Deno.test.ignore('Mark attributes: for no quotes attribute', () => {
	// expect(tokenize('<div aaa=aaa >')).toMatchSnapshot()
})
Deno.test.ignore('Mark attributes: for single quotes attribute', () => {
	// expect(tokenize("<div aaa='a' >")).toMatchSnapshot()
})
Deno.test.ignore('Mark attributes: for double quotes attribute', () => {
	// expect(tokenize('<div aaa="a" >')).toMatchSnapshot()
})

Deno.test.ignore(
	'Not break after special tag followed by an entity: for normal special tag',
	() => {
		// expect(tokenize('<style>a{}</style>&apos;<br/>')).toMatchSnapshot()
	},
)
Deno.test.ignore(
	'Not break after special tag followed by an entity: for self-closing special tag',
	() => {
		// expect(tokenize('<style />&apos;<br/>')).toMatchSnapshot()
	},
)

Deno.test.ignore('Handle entities: for entities in attributes (#276)', () => {
	//  expect(
	// 	tokenize('<img src="?&image_uri=1&&image;=2&image=3"/>?&image_uri=1&&image;=2&image=3'),
	// ).toMatchSnapshot()
})

Deno.test.ignore('Handle entities: for trailing legacy entity', () => {
	// expect(tokenize('&timesbar;&timesbar')).toMatchSnapshot())
})

Deno.test.ignore('Handle entities: for multi-byte entities', () => {
	// expect(tokenize('&NotGreaterFullEqual;')).toMatchSnapshot()
})
