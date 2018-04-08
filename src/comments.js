export var comments = {
  "comment": {
    "name": "comment.line.viml",
    "begin": "(\")",
    "end": "$",
    "patterns": [
      {
        "include": "#inline_comment"
      }
    ]
},
"inline_comment": {
  "patterns": [
    {
      "captures": {
        "1": {
          "name": "punctuation.definition.comment.vim"
        }
      },
      "match": "(?!\\$)(\")(?!\\{).*$\\n?",
      "name": "comment.line.quotes.viml"
    }
  ]
},
};
