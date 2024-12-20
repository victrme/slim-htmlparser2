export default {
  '</title> in <script> (#745)': `
[
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {},
      false,
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "'</title>'",
    ],
    "endIndex": 17,
    "startIndex": 8,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 26,
    "startIndex": 18,
  },
]
`,

  'Attribute in XML (see #1350)': `
[
  {
    "$event": "opentagname",
    "data": [
      "Page",
    ],
    "endIndex": 5,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "title",
      "Hello world",
      """,
    ],
    "endIndex": 29,
    "startIndex": 10,
  },
  {
    "$event": "attribute",
    "data": [
      "actionBarVisible",
      "false",
      """,
    ],
    "endIndex": 58,
    "startIndex": 34,
  },
  {
    "$event": "opentag",
    "data": [
      "Page",
      {
        "actionBarVisible": "false",
        "title": "Hello world",
      },
      false,
    ],
    "endIndex": 59,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "Page",
      true,
    ],
    "endIndex": 59,
    "startIndex": 0,
  },
]
`,

  'CDATA (inside special)': `
[
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {},
      false,
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "/*<![CDATA[*/ asdf ><asdf></adsf><> fo/*]]>*/",
    ],
    "endIndex": 52,
    "startIndex": 8,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 61,
    "startIndex": 53,
  },
]
`,

  'CDATA': `
[
  {
    "$event": "opentagname",
    "data": [
      "tag",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "tag",
      {},
      false,
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "cdatastart",
    "data": [],
    "endIndex": 41,
    "startIndex": 5,
  },
  {
    "$event": "text",
    "data": [
      " asdf ><asdf></adsf><> fo",
    ],
    "endIndex": 41,
    "startIndex": 5,
  },
  {
    "$event": "cdataend",
    "data": [],
    "endIndex": 41,
    "startIndex": 5,
  },
  {
    "$event": "closetag",
    "data": [
      "tag",
      false,
    ],
    "endIndex": 47,
    "startIndex": 42,
  },
  {
    "$event": "processinginstruction",
    "data": [
      "![CD",
      "![CD",
    ],
    "endIndex": 53,
    "startIndex": 48,
  },
]
`,

  'CDATA edge-cases': `
[
  {
    "$event": "processinginstruction",
    "data": [
      "![cdata",
      "![CDATA",
    ],
    "endIndex": 8,
    "startIndex": 0,
  },
  {
    "$event": "cdatastart",
    "data": [],
    "endIndex": 27,
    "startIndex": 9,
  },
  {
    "$event": "text",
    "data": [
      "[]]sdaf",
    ],
    "endIndex": 27,
    "startIndex": 9,
  },
  {
    "$event": "cdataend",
    "data": [],
    "endIndex": 27,
    "startIndex": 9,
  },
  {
    "$event": "cdatastart",
    "data": [],
    "endIndex": 40,
    "startIndex": 28,
  },
  {
    "$event": "text",
    "data": [
      "foo",
    ],
    "endIndex": 40,
    "startIndex": 28,
  },
  {
    "$event": "cdataend",
    "data": [],
    "endIndex": 40,
    "startIndex": 28,
  },
]
`,

  'CDATA in HTML': `
[
  {
    "$event": "comment",
    "data": [
      "[CDATA[ foo ]]",
    ],
    "endIndex": 16,
    "startIndex": 0,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 16,
    "startIndex": 0,
  },
]
`,

  'CDATA more edge-cases': `
[
  {
    "$event": "cdatastart",
    "data": [],
    "endIndex": 23,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "foo]bar]>baz",
    ],
    "endIndex": 23,
    "startIndex": 0,
  },
  {
    "$event": "cdataend",
    "data": [],
    "endIndex": 23,
    "startIndex": 0,
  },
]
`,

  'Comment edge-cases': `
[
  {
    "$event": "processinginstruction",
    "data": [
      "!-foo",
      "!-foo",
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "comment",
    "data": [
      " --- ",
    ],
    "endIndex": 18,
    "startIndex": 7,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 18,
    "startIndex": 7,
  },
  {
    "$event": "comment",
    "data": [
      "foo",
    ],
    "endIndex": 26,
    "startIndex": 19,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 26,
    "startIndex": 19,
  },
]
`,

  'Comment false ending': `
[
  {
    "$event": "comment",
    "data": [
      " a-b-> ",
    ],
    "endIndex": 13,
    "startIndex": 0,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 13,
    "startIndex": 0,
  },
]
`,

  'Empty tag name': `
[
  {
    "$event": "text",
    "data": [
      "< ></ >",
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
]
`,

  'Entities in attributes': `
[
  {
    "$event": "opentagname",
    "data": [
      "foo",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "bar",
      "&",
      null,
    ],
    "endIndex": 14,
    "startIndex": 5,
  },
  {
    "$event": "attribute",
    "data": [
      "baz",
      "&",
      """,
    ],
    "endIndex": 26,
    "startIndex": 15,
  },
  {
    "$event": "attribute",
    "data": [
      "boo",
      "&",
      "'",
    ],
    "endIndex": 38,
    "startIndex": 27,
  },
  {
    "$event": "attribute",
    "data": [
      "noo",
      "",
      null,
    ],
    "endIndex": 43,
    "startIndex": 39,
  },
  {
    "$event": "opentag",
    "data": [
      "foo",
      {
        "bar": "&",
        "baz": "&",
        "boo": "&",
        "noo": "",
      },
      false,
    ],
    "endIndex": 43,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "foo",
      true,
    ],
    "endIndex": 44,
    "startIndex": 44,
  },
]
`,

  'Entity after <': `
[
  {
    "$event": "text",
    "data": [
      "<&",
    ],
    "endIndex": 5,
    "startIndex": 0,
  },
]
`,

  'Implicit close tags': `
[
  {
    "$event": "opentagname",
    "data": [
      "ol",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "ol",
      {},
      false,
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "li",
    ],
    "endIndex": 7,
    "startIndex": 4,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "test",
      null,
    ],
    "endIndex": 18,
    "startIndex": 8,
  },
  {
    "$event": "opentag",
    "data": [
      "li",
      {
        "class": "test",
      },
      false,
    ],
    "endIndex": 18,
    "startIndex": 4,
  },
  {
    "$event": "opentagname",
    "data": [
      "div",
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
  {
    "$event": "opentag",
    "data": [
      "div",
      {},
      false,
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
  {
    "$event": "opentagname",
    "data": [
      "table",
    ],
    "endIndex": 30,
    "startIndex": 24,
  },
  {
    "$event": "attribute",
    "data": [
      "style",
      "width:100%",
      null,
    ],
    "endIndex": 47,
    "startIndex": 31,
  },
  {
    "$event": "opentag",
    "data": [
      "table",
      {
        "style": "width:100%",
      },
      false,
    ],
    "endIndex": 47,
    "startIndex": 24,
  },
  {
    "$event": "opentagname",
    "data": [
      "tr",
    ],
    "endIndex": 51,
    "startIndex": 48,
  },
  {
    "$event": "opentag",
    "data": [
      "tr",
      {},
      false,
    ],
    "endIndex": 51,
    "startIndex": 48,
  },
  {
    "$event": "opentagname",
    "data": [
      "th",
    ],
    "endIndex": 55,
    "startIndex": 52,
  },
  {
    "$event": "opentag",
    "data": [
      "th",
      {},
      false,
    ],
    "endIndex": 55,
    "startIndex": 52,
  },
  {
    "$event": "text",
    "data": [
      "TH",
    ],
    "endIndex": 57,
    "startIndex": 56,
  },
  {
    "$event": "closetag",
    "data": [
      "th",
      true,
    ],
    "endIndex": 61,
    "startIndex": 58,
  },
  {
    "$event": "opentagname",
    "data": [
      "td",
    ],
    "endIndex": 61,
    "startIndex": 58,
  },
  {
    "$event": "attribute",
    "data": [
      "colspan",
      "2",
      null,
    ],
    "endIndex": 71,
    "startIndex": 62,
  },
  {
    "$event": "opentag",
    "data": [
      "td",
      {
        "colspan": "2",
      },
      false,
    ],
    "endIndex": 71,
    "startIndex": 58,
  },
  {
    "$event": "opentagname",
    "data": [
      "h3",
    ],
    "endIndex": 75,
    "startIndex": 72,
  },
  {
    "$event": "opentag",
    "data": [
      "h3",
      {},
      false,
    ],
    "endIndex": 75,
    "startIndex": 72,
  },
  {
    "$event": "text",
    "data": [
      "Heading",
    ],
    "endIndex": 82,
    "startIndex": 76,
  },
  {
    "$event": "closetag",
    "data": [
      "h3",
      false,
    ],
    "endIndex": 87,
    "startIndex": 83,
  },
  {
    "$event": "closetag",
    "data": [
      "td",
      true,
    ],
    "endIndex": 91,
    "startIndex": 88,
  },
  {
    "$event": "closetag",
    "data": [
      "tr",
      true,
    ],
    "endIndex": 91,
    "startIndex": 88,
  },
  {
    "$event": "opentagname",
    "data": [
      "tr",
    ],
    "endIndex": 91,
    "startIndex": 88,
  },
  {
    "$event": "opentag",
    "data": [
      "tr",
      {},
      false,
    ],
    "endIndex": 91,
    "startIndex": 88,
  },
  {
    "$event": "opentagname",
    "data": [
      "td",
    ],
    "endIndex": 95,
    "startIndex": 92,
  },
  {
    "$event": "opentag",
    "data": [
      "td",
      {},
      false,
    ],
    "endIndex": 95,
    "startIndex": 92,
  },
  {
    "$event": "opentagname",
    "data": [
      "div",
    ],
    "endIndex": 100,
    "startIndex": 96,
  },
  {
    "$event": "opentag",
    "data": [
      "div",
      {},
      false,
    ],
    "endIndex": 100,
    "startIndex": 96,
  },
  {
    "$event": "text",
    "data": [
      "Div",
    ],
    "endIndex": 103,
    "startIndex": 101,
  },
  {
    "$event": "closetag",
    "data": [
      "div",
      false,
    ],
    "endIndex": 109,
    "startIndex": 104,
  },
  {
    "$event": "closetag",
    "data": [
      "td",
      true,
    ],
    "endIndex": 113,
    "startIndex": 110,
  },
  {
    "$event": "opentagname",
    "data": [
      "td",
    ],
    "endIndex": 113,
    "startIndex": 110,
  },
  {
    "$event": "opentag",
    "data": [
      "td",
      {},
      false,
    ],
    "endIndex": 113,
    "startIndex": 110,
  },
  {
    "$event": "opentagname",
    "data": [
      "div",
    ],
    "endIndex": 118,
    "startIndex": 114,
  },
  {
    "$event": "opentag",
    "data": [
      "div",
      {},
      false,
    ],
    "endIndex": 118,
    "startIndex": 114,
  },
  {
    "$event": "text",
    "data": [
      "Div2",
    ],
    "endIndex": 122,
    "startIndex": 119,
  },
  {
    "$event": "closetag",
    "data": [
      "div",
      false,
    ],
    "endIndex": 128,
    "startIndex": 123,
  },
  {
    "$event": "closetag",
    "data": [
      "td",
      true,
    ],
    "endIndex": 136,
    "startIndex": 129,
  },
  {
    "$event": "closetag",
    "data": [
      "tr",
      true,
    ],
    "endIndex": 136,
    "startIndex": 129,
  },
  {
    "$event": "closetag",
    "data": [
      "table",
      false,
    ],
    "endIndex": 136,
    "startIndex": 129,
  },
  {
    "$event": "closetag",
    "data": [
      "div",
      false,
    ],
    "endIndex": 142,
    "startIndex": 137,
  },
  {
    "$event": "closetag",
    "data": [
      "li",
      true,
    ],
    "endIndex": 146,
    "startIndex": 143,
  },
  {
    "$event": "opentagname",
    "data": [
      "li",
    ],
    "endIndex": 146,
    "startIndex": 143,
  },
  {
    "$event": "opentag",
    "data": [
      "li",
      {},
      false,
    ],
    "endIndex": 146,
    "startIndex": 143,
  },
  {
    "$event": "opentagname",
    "data": [
      "div",
    ],
    "endIndex": 151,
    "startIndex": 147,
  },
  {
    "$event": "opentag",
    "data": [
      "div",
      {},
      false,
    ],
    "endIndex": 151,
    "startIndex": 147,
  },
  {
    "$event": "opentagname",
    "data": [
      "h3",
    ],
    "endIndex": 155,
    "startIndex": 152,
  },
  {
    "$event": "opentag",
    "data": [
      "h3",
      {},
      false,
    ],
    "endIndex": 155,
    "startIndex": 152,
  },
  {
    "$event": "text",
    "data": [
      "Heading 2",
    ],
    "endIndex": 164,
    "startIndex": 156,
  },
  {
    "$event": "closetag",
    "data": [
      "h3",
      false,
    ],
    "endIndex": 169,
    "startIndex": 165,
  },
  {
    "$event": "closetag",
    "data": [
      "div",
      false,
    ],
    "endIndex": 175,
    "startIndex": 170,
  },
  {
    "$event": "closetag",
    "data": [
      "li",
      false,
    ],
    "endIndex": 180,
    "startIndex": 176,
  },
  {
    "$event": "closetag",
    "data": [
      "ol",
      false,
    ],
    "endIndex": 185,
    "startIndex": 181,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 188,
    "startIndex": 186,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 188,
    "startIndex": 186,
  },
  {
    "$event": "text",
    "data": [
      "Para",
    ],
    "endIndex": 192,
    "startIndex": 189,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 196,
    "startIndex": 193,
  },
  {
    "$event": "opentagname",
    "data": [
      "h4",
    ],
    "endIndex": 196,
    "startIndex": 193,
  },
  {
    "$event": "opentag",
    "data": [
      "h4",
      {},
      false,
    ],
    "endIndex": 196,
    "startIndex": 193,
  },
  {
    "$event": "text",
    "data": [
      "Heading 4",
    ],
    "endIndex": 205,
    "startIndex": 197,
  },
  {
    "$event": "closetag",
    "data": [
      "h4",
      false,
    ],
    "endIndex": 210,
    "startIndex": 206,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 213,
    "startIndex": 211,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 213,
    "startIndex": 211,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 217,
    "startIndex": 214,
  },
  {
    "$event": "opentagname",
    "data": [
      "ul",
    ],
    "endIndex": 217,
    "startIndex": 214,
  },
  {
    "$event": "opentag",
    "data": [
      "ul",
      {},
      false,
    ],
    "endIndex": 217,
    "startIndex": 214,
  },
  {
    "$event": "opentagname",
    "data": [
      "li",
    ],
    "endIndex": 221,
    "startIndex": 218,
  },
  {
    "$event": "opentag",
    "data": [
      "li",
      {},
      false,
    ],
    "endIndex": 221,
    "startIndex": 218,
  },
  {
    "$event": "text",
    "data": [
      "Hi",
    ],
    "endIndex": 223,
    "startIndex": 222,
  },
  {
    "$event": "closetag",
    "data": [
      "li",
      true,
    ],
    "endIndex": 227,
    "startIndex": 224,
  },
  {
    "$event": "opentagname",
    "data": [
      "li",
    ],
    "endIndex": 227,
    "startIndex": 224,
  },
  {
    "$event": "opentag",
    "data": [
      "li",
      {},
      false,
    ],
    "endIndex": 227,
    "startIndex": 224,
  },
  {
    "$event": "text",
    "data": [
      "bye",
    ],
    "endIndex": 230,
    "startIndex": 228,
  },
  {
    "$event": "closetag",
    "data": [
      "li",
      true,
    ],
    "endIndex": 235,
    "startIndex": 231,
  },
  {
    "$event": "closetag",
    "data": [
      "ul",
      false,
    ],
    "endIndex": 235,
    "startIndex": 231,
  },
]
`,

  'Implicit open p and br tags': `
[
  {
    "$event": "opentagname",
    "data": [
      "div",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "div",
      {},
      false,
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "Hallo",
    ],
    "endIndex": 9,
    "startIndex": 5,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 13,
    "startIndex": 10,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      true,
    ],
    "endIndex": 13,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 13,
    "startIndex": 10,
  },
  {
    "$event": "text",
    "data": [
      "World",
    ],
    "endIndex": 18,
    "startIndex": 14,
  },
  {
    "$event": "opentagname",
    "data": [
      "br",
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
  {
    "$event": "opentag",
    "data": [
      "br",
      {},
      true,
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
  {
    "$event": "closetag",
    "data": [
      "br",
      false,
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
  {
    "$event": "closetag",
    "data": [
      "div",
      false,
    ],
    "endIndex": 38,
    "startIndex": 33,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 42,
    "startIndex": 39,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      true,
    ],
    "endIndex": 42,
    "startIndex": 39,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 42,
    "startIndex": 39,
  },
  {
    "$event": "opentagname",
    "data": [
      "br",
    ],
    "endIndex": 47,
    "startIndex": 43,
  },
  {
    "$event": "opentag",
    "data": [
      "br",
      {},
      true,
    ],
    "endIndex": 47,
    "startIndex": 43,
  },
  {
    "$event": "closetag",
    "data": [
      "br",
      false,
    ],
    "endIndex": 47,
    "startIndex": 43,
  },
]
`,

  'Long CDATA ending': `
[
  {
    "$event": "opentagname",
    "data": [
      "before",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "before",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "before",
      true,
    ],
    "endIndex": 9,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "tag",
    ],
    "endIndex": 14,
    "startIndex": 10,
  },
  {
    "$event": "opentag",
    "data": [
      "tag",
      {},
      false,
    ],
    "endIndex": 14,
    "startIndex": 10,
  },
  {
    "$event": "cdatastart",
    "data": [],
    "endIndex": 33,
    "startIndex": 15,
  },
  {
    "$event": "text",
    "data": [
      " text ]",
    ],
    "endIndex": 33,
    "startIndex": 15,
  },
  {
    "$event": "cdataend",
    "data": [],
    "endIndex": 33,
    "startIndex": 15,
  },
  {
    "$event": "closetag",
    "data": [
      "tag",
      false,
    ],
    "endIndex": 39,
    "startIndex": 34,
  },
  {
    "$event": "opentagname",
    "data": [
      "after",
    ],
    "endIndex": 46,
    "startIndex": 40,
  },
  {
    "$event": "opentag",
    "data": [
      "after",
      {},
      false,
    ],
    "endIndex": 48,
    "startIndex": 40,
  },
  {
    "$event": "closetag",
    "data": [
      "after",
      true,
    ],
    "endIndex": 48,
    "startIndex": 40,
  },
]
`,

  'Long comment ending': `
[
  {
    "$event": "opentagname",
    "data": [
      "meta",
    ],
    "endIndex": 5,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "id",
      "before",
      "'",
    ],
    "endIndex": 17,
    "startIndex": 6,
  },
  {
    "$event": "opentag",
    "data": [
      "meta",
      {
        "id": "before",
      },
      false,
    ],
    "endIndex": 17,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "meta",
      true,
    ],
    "endIndex": 17,
    "startIndex": 0,
  },
  {
    "$event": "comment",
    "data": [
      " text -",
    ],
    "endIndex": 31,
    "startIndex": 18,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 31,
    "startIndex": 18,
  },
  {
    "$event": "opentagname",
    "data": [
      "meta",
    ],
    "endIndex": 37,
    "startIndex": 32,
  },
  {
    "$event": "attribute",
    "data": [
      "id",
      "after",
      "'",
    ],
    "endIndex": 48,
    "startIndex": 38,
  },
  {
    "$event": "opentag",
    "data": [
      "meta",
      {
        "id": "after",
      },
      false,
    ],
    "endIndex": 48,
    "startIndex": 32,
  },
  {
    "$event": "closetag",
    "data": [
      "meta",
      true,
    ],
    "endIndex": 48,
    "startIndex": 32,
  },
]
`,

  'Lowercase tags': `
[
  {
    "$event": "opentagname",
    "data": [
      "h1",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "test",
      null,
    ],
    "endIndex": 14,
    "startIndex": 4,
  },
  {
    "$event": "opentag",
    "data": [
      "h1",
      {
        "class": "test",
      },
      false,
    ],
    "endIndex": 14,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "adsf",
    ],
    "endIndex": 18,
    "startIndex": 15,
  },
  {
    "$event": "closetag",
    "data": [
      "h1",
      false,
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
]
`,

  'Multi-byte entity': `
[
  {
    "$event": "text",
    "data": [
      "≧̸",
    ],
    "endIndex": 20,
    "startIndex": 0,
  },
]
`,

  'Not quite closed': `
[
  {
    "$event": "opentagname",
    "data": [
      "foo",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "bar",
      "",
    ],
    "endIndex": 9,
    "startIndex": 6,
  },
  {
    "$event": "opentag",
    "data": [
      "foo",
      {
        "bar": "",
      },
      false,
    ],
    "endIndex": 9,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "foo",
      false,
    ],
    "endIndex": 15,
    "startIndex": 10,
  },
]
`,

  'Scripts creating other scripts': `
[
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 10,
    "startIndex": 3,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {},
      false,
    ],
    "endIndex": 10,
    "startIndex": 3,
  },
  {
    "$event": "text",
    "data": [
      "var str = '<script></'+'script>';",
    ],
    "endIndex": 43,
    "startIndex": 11,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 52,
    "startIndex": 44,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 56,
    "startIndex": 53,
  },
]
`,

  'Scripts ending with <': `
[
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {},
      false,
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "<",
    ],
    "endIndex": 8,
    "startIndex": 8,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 17,
    "startIndex": 9,
  },
]
`,

  'Self-closing indices (#941)': `
[
  {
    "$event": "opentagname",
    "data": [
      "xml",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "xml",
      {},
      false,
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "a",
    ],
    "endIndex": 7,
    "startIndex": 5,
  },
  {
    "$event": "opentag",
    "data": [
      "a",
      {},
      false,
    ],
    "endIndex": 8,
    "startIndex": 5,
  },
  {
    "$event": "closetag",
    "data": [
      "a",
      true,
    ],
    "endIndex": 8,
    "startIndex": 5,
  },
  {
    "$event": "opentagname",
    "data": [
      "b",
    ],
    "endIndex": 11,
    "startIndex": 9,
  },
  {
    "$event": "opentag",
    "data": [
      "b",
      {},
      false,
    ],
    "endIndex": 12,
    "startIndex": 9,
  },
  {
    "$event": "closetag",
    "data": [
      "b",
      true,
    ],
    "endIndex": 12,
    "startIndex": 9,
  },
  {
    "$event": "closetag",
    "data": [
      "xml",
      false,
    ],
    "endIndex": 18,
    "startIndex": 13,
  },
]
`,

  'Special special tags': `
[
  {
    "$event": "opentagname",
    "data": [
      "title",
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "title",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "<b>foo</b><title>",
    ],
    "endIndex": 23,
    "startIndex": 7,
  },
  {
    "$event": "closetag",
    "data": [
      "title",
      false,
    ],
    "endIndex": 31,
    "startIndex": 24,
  },
  {
    "$event": "opentagname",
    "data": [
      "sitle",
    ],
    "endIndex": 38,
    "startIndex": 32,
  },
  {
    "$event": "opentag",
    "data": [
      "sitle",
      {},
      false,
    ],
    "endIndex": 38,
    "startIndex": 32,
  },
  {
    "$event": "opentagname",
    "data": [
      "b",
    ],
    "endIndex": 41,
    "startIndex": 39,
  },
  {
    "$event": "opentag",
    "data": [
      "b",
      {},
      false,
    ],
    "endIndex": 41,
    "startIndex": 39,
  },
  {
    "$event": "closetag",
    "data": [
      "b",
      false,
    ],
    "endIndex": 45,
    "startIndex": 42,
  },
  {
    "$event": "closetag",
    "data": [
      "sitle",
      false,
    ],
    "endIndex": 53,
    "startIndex": 46,
  },
  {
    "$event": "opentagname",
    "data": [
      "ttyle",
    ],
    "endIndex": 60,
    "startIndex": 54,
  },
  {
    "$event": "opentag",
    "data": [
      "ttyle",
      {},
      false,
    ],
    "endIndex": 60,
    "startIndex": 54,
  },
  {
    "$event": "opentagname",
    "data": [
      "b",
    ],
    "endIndex": 63,
    "startIndex": 61,
  },
  {
    "$event": "opentag",
    "data": [
      "b",
      {},
      false,
    ],
    "endIndex": 63,
    "startIndex": 61,
  },
  {
    "$event": "closetag",
    "data": [
      "b",
      false,
    ],
    "endIndex": 67,
    "startIndex": 64,
  },
  {
    "$event": "closetag",
    "data": [
      "ttyle",
      false,
    ],
    "endIndex": 75,
    "startIndex": 68,
  },
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 83,
    "startIndex": 76,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {},
      false,
    ],
    "endIndex": 83,
    "startIndex": 76,
  },
  {
    "$event": "text",
    "data": [
      "</scripter</soo",
    ],
    "endIndex": 98,
    "startIndex": 84,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 107,
    "startIndex": 99,
  },
  {
    "$event": "opentagname",
    "data": [
      "style",
    ],
    "endIndex": 114,
    "startIndex": 108,
  },
  {
    "$event": "opentag",
    "data": [
      "style",
      {},
      false,
    ],
    "endIndex": 114,
    "startIndex": 108,
  },
  {
    "$event": "text",
    "data": [
      "</styler",
    ],
    "endIndex": 122,
    "startIndex": 115,
  },
  {
    "$event": "closetag",
    "data": [
      "style",
      false,
    ],
    "endIndex": 130,
    "startIndex": 123,
  },
  {
    "$event": "opentagname",
    "data": [
      "scipt",
    ],
    "endIndex": 137,
    "startIndex": 131,
  },
  {
    "$event": "opentag",
    "data": [
      "scipt",
      {},
      false,
    ],
    "endIndex": 137,
    "startIndex": 131,
  },
  {
    "$event": "opentagname",
    "data": [
      "stylee",
    ],
    "endIndex": 145,
    "startIndex": 138,
  },
  {
    "$event": "opentag",
    "data": [
      "stylee",
      {},
      false,
    ],
    "endIndex": 145,
    "startIndex": 138,
  },
  {
    "$event": "opentagname",
    "data": [
      "scriptee",
    ],
    "endIndex": 155,
    "startIndex": 146,
  },
  {
    "$event": "opentag",
    "data": [
      "scriptee",
      {},
      false,
    ],
    "endIndex": 155,
    "startIndex": 146,
  },
  {
    "$event": "opentagname",
    "data": [
      "soo",
    ],
    "endIndex": 160,
    "startIndex": 156,
  },
  {
    "$event": "opentag",
    "data": [
      "soo",
      {},
      false,
    ],
    "endIndex": 160,
    "startIndex": 156,
  },
  {
    "$event": "closetag",
    "data": [
      "soo",
      true,
    ],
    "endIndex": 161,
    "startIndex": 161,
  },
  {
    "$event": "closetag",
    "data": [
      "scriptee",
      true,
    ],
    "endIndex": 161,
    "startIndex": 161,
  },
  {
    "$event": "closetag",
    "data": [
      "stylee",
      true,
    ],
    "endIndex": 161,
    "startIndex": 161,
  },
  {
    "$event": "closetag",
    "data": [
      "scipt",
      true,
    ],
    "endIndex": 161,
    "startIndex": 161,
  },
]
`,

  'Start & end indices from domhandler': `
[
  {
    "$event": "processinginstruction",
    "data": [
      "!doctype",
      "!DOCTYPE html",
    ],
    "endIndex": 14,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 15,
    "startIndex": 15,
  },
  {
    "$event": "opentagname",
    "data": [
      "html",
    ],
    "endIndex": 21,
    "startIndex": 16,
  },
  {
    "$event": "opentag",
    "data": [
      "html",
      {},
      false,
    ],
    "endIndex": 21,
    "startIndex": 16,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 22,
    "startIndex": 22,
  },
  {
    "$event": "opentagname",
    "data": [
      "title",
    ],
    "endIndex": 29,
    "startIndex": 23,
  },
  {
    "$event": "opentag",
    "data": [
      "title",
      {},
      false,
    ],
    "endIndex": 29,
    "startIndex": 23,
  },
  {
    "$event": "text",
    "data": [
      "The Title",
    ],
    "endIndex": 38,
    "startIndex": 30,
  },
  {
    "$event": "closetag",
    "data": [
      "title",
      false,
    ],
    "endIndex": 46,
    "startIndex": 39,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 47,
    "startIndex": 47,
  },
  {
    "$event": "opentagname",
    "data": [
      "body",
    ],
    "endIndex": 53,
    "startIndex": 48,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "foo",
      "'",
    ],
    "endIndex": 65,
    "startIndex": 54,
  },
  {
    "$event": "opentag",
    "data": [
      "body",
      {
        "class": "foo",
      },
      false,
    ],
    "endIndex": 65,
    "startIndex": 48,
  },
  {
    "$event": "text",
    "data": [
      "Hello world ",
    ],
    "endIndex": 77,
    "startIndex": 66,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 80,
    "startIndex": 78,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 80,
    "startIndex": 78,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 84,
    "startIndex": 81,
  },
  {
    "$event": "closetag",
    "data": [
      "body",
      false,
    ],
    "endIndex": 91,
    "startIndex": 85,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 92,
    "startIndex": 92,
  },
  {
    "$event": "comment",
    "data": [
      " the comment ",
    ],
    "endIndex": 112,
    "startIndex": 93,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 112,
    "startIndex": 93,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 113,
    "startIndex": 113,
  },
  {
    "$event": "closetag",
    "data": [
      "html",
      false,
    ],
    "endIndex": 120,
    "startIndex": 114,
  },
  {
    "$event": "text",
    "data": [
      " ",
    ],
    "endIndex": 121,
    "startIndex": 121,
  },
]
`,

  'Template script tags': `
[
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "script",
    ],
    "endIndex": 10,
    "startIndex": 3,
  },
  {
    "$event": "attribute",
    "data": [
      "type",
      "text/template",
      """,
    ],
    "endIndex": 31,
    "startIndex": 11,
  },
  {
    "$event": "opentag",
    "data": [
      "script",
      {
        "type": "text/template",
      },
      false,
    ],
    "endIndex": 31,
    "startIndex": 3,
  },
  {
    "$event": "text",
    "data": [
      "<h1>Heading1</h1>",
    ],
    "endIndex": 48,
    "startIndex": 32,
  },
  {
    "$event": "closetag",
    "data": [
      "script",
      false,
    ],
    "endIndex": 57,
    "startIndex": 49,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 61,
    "startIndex": 58,
  },
]
`,

  'Trailing legacy entity': `
[
  {
    "$event": "text",
    "data": [
      "⨱×bar",
    ],
    "endIndex": 18,
    "startIndex": 0,
  },
]
`,

  'Trailing numeric entity': `
[
  {
    "$event": "text",
    "data": [
      "55",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
]
`,

  'XML tags': `
[
  {
    "$event": "opentagname",
    "data": [
      ":foo",
    ],
    "endIndex": 5,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      ":foo",
      {},
      false,
    ],
    "endIndex": 5,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "_bar",
    ],
    "endIndex": 11,
    "startIndex": 6,
  },
  {
    "$event": "opentag",
    "data": [
      "_bar",
      {},
      false,
    ],
    "endIndex": 11,
    "startIndex": 6,
  },
  {
    "$event": "closetag",
    "data": [
      "_bar",
      true,
    ],
    "endIndex": 12,
    "startIndex": 12,
  },
  {
    "$event": "closetag",
    "data": [
      ":foo",
      true,
    ],
    "endIndex": 12,
    "startIndex": 12,
  },
]
`,

  'attributes (no white space, no value, no quotes)': `
[
  {
    "$event": "opentagname",
    "data": [
      "button",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "test0",
      """,
    ],
    "endIndex": 21,
    "startIndex": 8,
  },
  {
    "$event": "attribute",
    "data": [
      "title",
      "test1",
      """,
    ],
    "endIndex": 34,
    "startIndex": 21,
  },
  {
    "$event": "attribute",
    "data": [
      "disabled",
      "",
    ],
    "endIndex": 43,
    "startIndex": 35,
  },
  {
    "$event": "attribute",
    "data": [
      "value",
      "test2",
      null,
    ],
    "endIndex": 55,
    "startIndex": 44,
  },
  {
    "$event": "opentag",
    "data": [
      "button",
      {
        "class": "test0",
        "disabled": "",
        "title": "test1",
        "value": "test2",
      },
      false,
    ],
    "endIndex": 55,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "adsf",
    ],
    "endIndex": 59,
    "startIndex": 56,
  },
  {
    "$event": "closetag",
    "data": [
      "button",
      false,
    ],
    "endIndex": 68,
    "startIndex": 60,
  },
]
`,

  'crazy attribute': `
[
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "<",
      "",
      "'",
    ],
    "endIndex": 9,
    "startIndex": 3,
  },
  {
    "$event": "attribute",
    "data": [
      "fail",
      "",
    ],
    "endIndex": 14,
    "startIndex": 10,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {
        "<": "",
        "fail": "",
      },
      false,
    ],
    "endIndex": 14,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "stuff",
    ],
    "endIndex": 19,
    "startIndex": 15,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      false,
    ],
    "endIndex": 23,
    "startIndex": 20,
  },
]
`,

  'double attribute': `
[
  {
    "$event": "opentagname",
    "data": [
      "h1",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "test",
      null,
    ],
    "endIndex": 14,
    "startIndex": 4,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "boo",
      null,
    ],
    "endIndex": 24,
    "startIndex": 15,
  },
  {
    "$event": "opentag",
    "data": [
      "h1",
      {
        "class": "test",
      },
      false,
    ],
    "endIndex": 24,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "h1",
      false,
    ],
    "endIndex": 29,
    "startIndex": 25,
  },
]
`,

  'double brackets': `
[
  {
    "$event": "text",
    "data": [
      "<",
    ],
    "endIndex": 0,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "princess-purpose",
    ],
    "endIndex": 18,
    "startIndex": 1,
  },
  {
    "$event": "opentag",
    "data": [
      "princess-purpose",
      {},
      false,
    ],
    "endIndex": 18,
    "startIndex": 1,
  },
  {
    "$event": "text",
    "data": [
      ">testing",
    ],
    "endIndex": 26,
    "startIndex": 19,
  },
  {
    "$event": "closetag",
    "data": [
      "princess-purpose",
      false,
    ],
    "endIndex": 45,
    "startIndex": 27,
  },
]
`,

  'end slash: as part of attrib value of non-void element': `
[
  {
    "$event": "opentagname",
    "data": [
      "a",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "href",
      "http://test.com/",
      null,
    ],
    "endIndex": 24,
    "startIndex": 3,
  },
  {
    "$event": "opentag",
    "data": [
      "a",
      {
        "href": "http://test.com/",
      },
      false,
    ],
    "endIndex": 24,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "Foo",
    ],
    "endIndex": 27,
    "startIndex": 25,
  },
  {
    "$event": "closetag",
    "data": [
      "a",
      false,
    ],
    "endIndex": 31,
    "startIndex": 28,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 34,
    "startIndex": 32,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 34,
    "startIndex": 32,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 48,
    "startIndex": 35,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 49,
    "startIndex": 49,
  },
]
`,

  'end slash: as part of attrib value of void element': `
[
  {
    "$event": "opentagname",
    "data": [
      "img",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "src",
      "gif.com/123/",
      null,
    ],
    "endIndex": 21,
    "startIndex": 5,
  },
  {
    "$event": "opentag",
    "data": [
      "img",
      {
        "src": "gif.com/123/",
      },
      false,
    ],
    "endIndex": 21,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "img",
      true,
    ],
    "endIndex": 21,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 24,
    "startIndex": 22,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 24,
    "startIndex": 22,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 38,
    "startIndex": 25,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 39,
    "startIndex": 39,
  },
]
`,

  'end slash: non-void element ending with />': `
[
  {
    "$event": "opentagname",
    "data": [
      "xx",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "xx",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
  {
    "$event": "closetag",
    "data": [
      "xx",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'end slash: non-void element ending with />, recognizeSelfClosing=true': `
[
  {
    "$event": "opentagname",
    "data": [
      "xx",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "xx",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "xx",
      true,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'end slash: non-void element ending with />, xmlMode=true': `
[
  {
    "$event": "opentagname",
    "data": [
      "xx",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "xx",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "xx",
      true,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'end slash: void element ending with />': `
[
  {
    "$event": "opentagname",
    "data": [
      "hr",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "hr",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "hr",
      true,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'end slash: void element ending with >': `
[
  {
    "$event": "opentagname",
    "data": [
      "hr",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "hr",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "hr",
      true,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'end slash: void element ending with >, xmlMode=true': `
[
  {
    "$event": "opentagname",
    "data": [
      "hr",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "hr",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentagname",
    "data": [
      "p",
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "opentag",
    "data": [
      "p",
      {},
      false,
    ],
    "endIndex": 9,
    "startIndex": 7,
  },
  {
    "$event": "text",
    "data": [
      "Hold the line.",
    ],
    "endIndex": 23,
    "startIndex": 10,
  },
  {
    "$event": "closetag",
    "data": [
      "p",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
  {
    "$event": "closetag",
    "data": [
      "hr",
      true,
    ],
    "endIndex": 24,
    "startIndex": 24,
  },
]
`,

  'entity in attribute (#276)': `
[
  {
    "$event": "opentagname",
    "data": [
      "img",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "src",
      "?&image_uri=1&ℑ=2&image=3",
      """,
    ],
    "endIndex": 42,
    "startIndex": 5,
  },
  {
    "$event": "opentag",
    "data": [
      "img",
      {
        "src": "?&image_uri=1&ℑ=2&image=3",
      },
      false,
    ],
    "endIndex": 43,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "img",
      true,
    ],
    "endIndex": 43,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "?&image_uri=1&ℑ=2&image=3",
    ],
    "endIndex": 74,
    "startIndex": 44,
  },
]
`,

  'entity in attribute': `
[
  {
    "$event": "opentagname",
    "data": [
      "a",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "href",
      "http://example.com/pa#x61ge?param=value&param2&param3=<val&; & &",
      "'",
    ],
    "endIndex": 82,
    "startIndex": 3,
  },
  {
    "$event": "opentag",
    "data": [
      "a",
      {
        "href": "http://example.com/pa#x61ge?param=value&param2&param3=<val&; & &",
      },
      false,
    ],
    "endIndex": 82,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "a",
      true,
    ],
    "endIndex": 83,
    "startIndex": 83,
  },
]
`,

  'entity in title (#592)': `
[
  {
    "$event": "opentagname",
    "data": [
      "title",
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "title",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "the "title"",
    ],
    "endIndex": 26,
    "startIndex": 7,
  },
  {
    "$event": "closetag",
    "data": [
      "title",
      true,
    ],
    "endIndex": 27,
    "startIndex": 27,
  },
]
`,

  'entity in title - decodeEntities=false (#592)': `
[
  {
    "$event": "opentagname",
    "data": [
      "title",
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "title",
      {},
      false,
    ],
    "endIndex": 6,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "the &quot;title&quot;",
    ],
    "endIndex": 27,
    "startIndex": 7,
  },
  {
    "$event": "closetag",
    "data": [
      "title",
      true,
    ],
    "endIndex": 28,
    "startIndex": 28,
  },
]
`,

  'leading lt': `
[
  {
    "$event": "text",
    "data": [
      ">a>",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
]
`,

  'legacy entities': `
[
  {
    "$event": "text",
    "data": [
      "&elíe&eer;s<er&sum",
    ],
    "endIndex": 31,
    "startIndex": 0,
  },
]
`,

  'legacy entities fail': `
[
  {
    "$event": "text",
    "data": [
      "M&M",
    ],
    "endIndex": 2,
    "startIndex": 0,
  },
]
`,

  'lt followed by whitespace': `
[
  {
    "$event": "text",
    "data": [
      "a < b",
    ],
    "endIndex": 4,
    "startIndex": 0,
  },
]
`,

  'named entities': `
[
  {
    "$event": "text",
    "data": [
      "&el<er∳foo&bar",
    ],
    "endIndex": 52,
    "startIndex": 0,
  },
]
`,

  'numeric entities': `
[
  {
    "$event": "text",
    "data": [
      "abcdfg&#x;h",
    ],
    "endIndex": 35,
    "startIndex": 0,
  },
]
`,

  'open-implies-close case of (non-br) void close tag in non-XML mode': `
[
  {
    "$event": "opentagname",
    "data": [
      "select",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "opentag",
    "data": [
      "select",
      {},
      false,
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "closetag",
    "data": [
      "select",
      true,
    ],
    "endIndex": 14,
    "startIndex": 8,
  },
  {
    "$event": "opentagname",
    "data": [
      "input",
    ],
    "endIndex": 14,
    "startIndex": 8,
  },
  {
    "$event": "opentag",
    "data": [
      "input",
      {},
      false,
    ],
    "endIndex": 14,
    "startIndex": 8,
  },
  {
    "$event": "closetag",
    "data": [
      "input",
      true,
    ],
    "endIndex": 14,
    "startIndex": 8,
  },
]
`,

  'simple': `
[
  {
    "$event": "opentagname",
    "data": [
      "h1",
    ],
    "endIndex": 3,
    "startIndex": 0,
  },
  {
    "$event": "attribute",
    "data": [
      "class",
      "test",
      null,
    ],
    "endIndex": 14,
    "startIndex": 4,
  },
  {
    "$event": "opentag",
    "data": [
      "h1",
      {
        "class": "test",
      },
      false,
    ],
    "endIndex": 14,
    "startIndex": 0,
  },
  {
    "$event": "text",
    "data": [
      "adsf",
    ],
    "endIndex": 18,
    "startIndex": 15,
  },
  {
    "$event": "closetag",
    "data": [
      "h1",
      false,
    ],
    "endIndex": 23,
    "startIndex": 19,
  },
]
`,

  'tag names are not ASCII alpha': `
[
  {
    "$event": "text",
    "data": [
      "<12>text",
    ],
    "endIndex": 7,
    "startIndex": 0,
  },
  {
    "$event": "comment",
    "data": [
      "12",
    ],
    "endIndex": 12,
    "startIndex": 8,
  },
  {
    "$event": "commentend",
    "data": [],
    "endIndex": 12,
    "startIndex": 8,
  },
]
`,

  'xml entities': `
[
  {
    "$event": "text",
    "data": [
      "&>&amp<&uuml;a&#x62c&#100&#101",
    ],
    "endIndex": 48,
    "startIndex": 0,
  },
]
`,
}
