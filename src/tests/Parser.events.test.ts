import { expect, fn } from '@std/expect'
import ParserEventsSnapshot from './snapshots/Parser.events.snapshot.ts'

import { Parser } from '../Parser.ts'
import * as helper from './helper.ts'
import type { ParserOptions } from '../Parser.ts'

type SnapshotNames = keyof typeof ParserEventsSnapshot

/**
 * Write to the parser twice, once a bytes, once as a single blob. Then check
 * that we received the expected events.
 *
 * @internal
 * @param input Data to write.
 * @param options Parser options.
 * @returns Promise that resolves if the test passes.
 */
function runTest(testName: string, input: string, options?: ParserOptions) {
	let firstResult: unknown[] | undefined

	return new Promise<void>((resolve, reject) => {
		const handler = helper.getEventCollector((error, actual) => {
			if (error) {
				return reject(error)
			}

			if (firstResult) {
				expect(actual).toEqual(firstResult)
				resolve()
			} else {
				firstResult = actual
				expect(actual).toEqual(ParserEventsSnapshot[testName as SnapshotNames])
			}
		})

		const parser = new Parser(handler, options)
		// First, try to run the test via chunks
		for (let index = 0; index < input.length; index++) {
			parser.write(input.charAt(index))
		}
		parser.end()
		// Then, parse everything
		parser.parseComplete(input)
	})
}

Deno.test.ignore('simple', function (t) {
	runTest(t.name, '<h1 class=test>adsf</h1>')
})

Deno.test.ignore('Template script tags', function (t) {
	runTest(t.name, '<p><script type="text/template"><h1>Heading1</h1></script></p>')
})

Deno.test.ignore('CDATA (inside special)', function (t) {
	runTest(t.name, '<script>/*<![CDATA[*/ asdf ><asdf></adsf><> fo/*]]>*/</script>')
})

Deno.test.ignore('leading lt', function (t) {
	runTest(t.name, '>a>')
})

Deno.test.ignore('end slash: void element ending with />', function (t) {
	runTest(t.name, '<hr / ><p>Hold the line.')
})

Deno.test.ignore('end slash: void element ending with >', function (t) {
	runTest(t.name, '<hr   ><p>Hold the line.')
})

Deno.test.ignore('end slash: non-void element ending with />', function (t) {
	runTest(t.name, '<xx / ><p>Hold the line.')
})

Deno.test.ignore('end slash: as part of attrib value of void element', function (t) {
	runTest(t.name, '<img src=gif.com/123/><p>Hold the line.')
})

Deno.test.ignore('end slash: as part of attrib value of non-void element', function (t) {
	runTest(t.name, '<a href=http://test.com/>Foo</a><p>Hold the line.')
})

Deno.test.ignore('Implicit close tags', function (t) {
	runTest(
		t.name,
		'<ol><li class=test><div><table style=width:100%><tr><th>TH<td colspan=2><h3>Heading</h3><tr><td><div>Div</div><td><div>Div2</div></table></div><li><div><h3>Heading 2</h3></div></li></ol><p>Para<h4>Heading 4</h4><p><ul><li>Hi<li>bye</ul>',
	)
})

Deno.test.ignore('attributes (no white space, no value, no quotes)', function (t) {
	runTest(t.name, '<button class="test0"title="test1" disabled value=test2>adsf</button>')
})

Deno.test.ignore('crazy attribute', function (t) {
	runTest(t.name, "<p < = '' FAIL>stuff</p><a")
})

Deno.test.ignore('Scripts creating other scripts', function (t) {
	runTest(t.name, "<p><script>var str = '<script></'+'script>';</script></p>")
})

Deno.test.ignore('Long comment ending', function (t) {
	runTest(t.name, "<meta id='before'><!-- text ---><meta id='after'>")
})

Deno.test.ignore('Implicit open p and br tags', function (t) {
	runTest(t.name, '<div>Hallo</p>World</br></ignore></div></p></br>')
})

Deno.test.ignore('lt followed by whitespace', function (t) {
	runTest(t.name, 'a < b')
})

Deno.test.ignore('double attribute', function (t) {
	runTest(t.name, '<h1 class=test class=boo></h1>')
})

Deno.test.ignore('numeric entities', function (t) {
	runTest(t.name, '&#x61;&#x62&#99;&#100&#x66g&#x;&#x68')
})

Deno.test.ignore('legacy entities', function (t) {
	runTest(t.name, '&AMPel&iacutee&ampeer;s&lter&sum')
})

Deno.test.ignore('named entities', function (t) {
	runTest(t.name, '&amp;el&lt;er&CounterClockwiseContourIntegral;foo&bar')
})

Deno.test.ignore('entity in attribute', function (t) {
	runTest(
		t.name,
		"<a href='http://example.com/p&#x61;#x61ge?param=value&param2&param3=&lt;val&; & &'>",
	)
})

Deno.test.ignore('double brackets', function (t) {
	runTest(t.name, '<<princess-purpose>>testing</princess-purpose>')
})

Deno.test.ignore('legacy entities fail', function (t) {
	runTest(t.name, 'M&M')
})

Deno.test.ignore('Special special tags', function (t) {
	runTest(
		t.name,
		'<tItLe><b>foo</b><title></TiTlE><sitle><b></b></sitle><ttyle><b></b></ttyle><sCriPT></scripter</soo</sCript><STyLE></styler</STylE><sCiPt><stylee><scriptee><soo>',
	)
})

Deno.test.ignore('Empty tag name', function (t) {
	runTest(t.name, '< ></ >')
})

Deno.test.ignore('Not quite closed', function (t) {
	runTest(t.name, '<foo /bar></foo bar>')
})

Deno.test.ignore('Entities in attributes', function (t) {
	runTest(t.name, '<foo bar=&amp; baz="&amp;" boo=\'&amp;\' noo=>')
})

Deno.test.ignore('CDATA in HTML', function (t) {
	runTest(t.name, '<![CDATA[ foo ]]>')
})

Deno.test.ignore('Comment edge-cases', function (t) {
	runTest(t.name, '<!-foo><!-- --- --><!--foo')
})

Deno.test.ignore('Comment false ending', function (t) {
	runTest(t.name, '<!-- a-b-> -->')
})

Deno.test.ignore('Scripts ending with <', function (t) {
	runTest(t.name, '<script><</script>')
})

Deno.test.ignore('tag names are not ASCII alpha', function (t) {
	runTest(t.name, '<12>text</12>')
})

Deno.test.ignore('entity in attribute (#276)', function (t) {
	runTest(t.name, '<img src="?&image_uri=1&&image;=2&image=3"/>?&image_uri=1&&image;=2&image=3')
})

Deno.test.ignore('entity in title (#592)', function (t) {
	runTest(t.name, '<title>the &quot;title&quot')
})

Deno.test.ignore('entity in title - decodeEntities=false (#592)', function (t) {
	runTest(t.name, '<title>the &quot;title&quot;', { decodeEntities: false })
})

Deno.test.ignore('</title> in <script> (#745)', function (t) {
	runTest(t.name, "<script>'</title>'</script>")
})

Deno.test.ignore('Trailing legacy entity', function (t) {
	runTest(t.name, '&timesbar;&timesbar')
})

Deno.test.ignore('Trailing numeric entity', function (t) {
	runTest(t.name, '&#53&#53')
})

Deno.test.ignore('Multi-byte entity', function (t) {
	runTest(t.name, '&NotGreaterFullEqual;')
})

Deno.test.ignore('Start & end indices from domhandler', function (t) {
	runTest(
		t.name,
		"<!DOCTYPE html> <html> <title>The Title</title> <body class='foo'>Hello world <p></p></body> <!-- the comment --> </html> ",
	)
})

Deno.test.ignore('Entity after <', function (t) {
	runTest(t.name, '<&amp;')
})

Deno.test.ignore('should handle errors', function (_t) {
	const eventCallback = fn() as any

	const parser = new Parser(helper.getEventCollector(eventCallback))

	parser.end()
	parser.write('foo')

	expect(eventCallback).toHaveBeenCalledTimes(2)
	expect(eventCallback).toHaveBeenNthCalledWith(1, null, [])
	expect(eventCallback).toHaveBeenLastCalledWith(new Error('.write() after done!'))
})
