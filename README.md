# htmlparser2

[![NPM Version](https://img.shields.io/npm/v/htmlparser2?color=%23cb3837)](https://npmjs.org/package/htmlparser2)
[![JSR Version](<https://img.shields.io/jsr/v/%40victr/htmlparser2?color=rgb(247%2C%20223%2C%2030)>)](https://jsr.io/@victr/htmlparser2)
[![Downloads](https://img.shields.io/npm/dm/htmlparser2.svg)](https://npmjs.org/package/htmlparser2)

The fast & forgiving HTML parser, only with Parser.

_htmlparser2 is [the fastest HTML parser](#performance), and takes some shortcuts to get there. If you need strict HTML
spec compliance, have a look at [parse5](https://github.com/inikulin/parse5)._

## Usage

`htmlparser2` itself provides a callback interface that allows consumption of documents with minimal allocations. For a
more ergonomic experience, read [Getting a DOM](#getting-a-dom) below.

```js
import * as htmlparser2 from '@victr/htmlparser2'

const parser = new htmlparser2.Parser({
	onopentag(name, attributes) {
		/*
		 * This fires when a new tag is opened.
		 *
		 * If you don't need an aggregated `attributes` object,
		 * have a look at the `onopentagname` and `onattribute` events.
		 */
		if (name === 'script' && attributes.type === 'text/javascript') {
			console.log('JS! Hooray!')
		}
	},
	ontext(text) {
		/*
		 * Fires whenever a section of text was processed.
		 *
		 * Note that this can fire at any point within text and you might
		 * have to stitch together multiple pieces.
		 */
		console.log('-->', text)
	},
	onclosetag(tagname) {
		/*
		 * Fires when a tag is closed.
		 *
		 * You can rely on this event only firing when you have received an
		 * equivalent opening tag before. Closing tags without corresponding
		 * opening tags will be ignored.
		 */
		if (tagname === 'script') {
			console.log("That's it?!")
		}
	},
})
parser.write("Xyz <script type='text/javascript'>const foo = '<<bar>>';</script>")
parser.end()
```

Output (with multiple text events combined):

```
--> Xyz
JS! Hooray!
--> const foo = '<<bar>>';
That's it?!
```

## Performance

```
htmlparser2        : 2.17215 ms/file ± 3.81587
node-html-parser   : 2.35983 ms/file ± 1.54487
html5parser        : 2.43468 ms/file ± 2.81501
neutron-html5parser: 2.61356 ms/file ± 1.70324
htmlparser2-dom    : 3.09034 ms/file ± 4.77033
html-dom-parser    : 3.56804 ms/file ± 5.15621
libxmljs           : 4.07490 ms/file ± 2.99869
htmljs-parser      : 6.15812 ms/file ± 7.52497
parse5             : 9.70406 ms/file ± 6.74872
htmlparser         : 15.0596 ms/file ± 89.0826
html-parser        : 28.6282 ms/file ± 22.6652
saxes              : 45.7921 ms/file ± 128.691
html5              : 120.844 ms/file ± 153.944
```
