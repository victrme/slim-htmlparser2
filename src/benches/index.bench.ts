import { Parser } from '../index.ts'

const html = await (await fetch('https://weather.com/')).text()

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
    })

    parser.parseComplete(html)
})

Deno.bench('Lowercase tags', function () {
    let text = ''
    let attr = ''

    const parser = new Parser({
        ontext(data) {
            text += data
        },
        onattribute(data) {
            attr += data
        },
    }, { lowerCaseTags: true })

    parser.parseComplete(html)
})

Deno.bench('Lowercase tags & attribute names', function () {
    let text = ''
    let attr = ''

    const parser = new Parser({
        ontext(data) {
            text += data
        },
        onattribute(data) {
            attr += data
        },
    }, { lowerCaseTags: true, lowerCaseAttributeNames: true })

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
