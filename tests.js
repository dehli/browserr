export default [
  // Reassign a constant variable
  {
    js: 'const x=0;x=1',
    chrome: 'Assignment to constant variable.',
    firefox: 'invalid assignment to const `x\'',
    safari: 'Attempted to assign to readonly property.'
  },

  // Access a key of undefined
  {
    js: 'var x={};x.y.z',
    chrome: 'Cannot read property \'z\' of undefined',
    firefox: 'x.y is undefined',
    safari: 'undefined is not an object (evaluating \'x.y.z\')'
  },

  // Create a var with name 'var'
  {
    js: 'var var=0',
    chrome: 'Unexpected token var',
    firefox: 'missing variable name',
    safari: 'Cannot use the keyword \'var\' as a variable name.'
  },

  // Invalid arrow syntax
  {
    js: 'var x=x=>return x',
    chrome: 'Unexpected token return',
    firefox: 'expected expression, got keyword \'return\'',
    safari: 'Unexpected keyword \'return\''
  },

  // JSON parse error
  {
    js: 'JSON.parse("{")',
    chrome: 'Unexpected end of JSON input',
    firefox: 'JSON.parse: end of data while reading object contents at line 1 column 2 of the JSON data',
    safari: 'JSON Parse error: Expected \'}\''
  },

  // Invalid URL
  {
    js: 'new URL("")',
    chrome: 'Failed to construct \'URL\': Invalid URL',
    firefox: ' is not a valid URL.',
    safari: 'Type error'
  },

  // Invoke a non-function
  {
    js: 'var x=0;x()',
    chrome: 'x is not a function',
    firefox: 'x is not a function',
    safari: 'x is not a function. (In \'x()\', \'x\' is 0)'
  },

  // Invoke ()()
  {
    js: '()()',
    chrome: 'Unexpected token )',
    firefox: 'expected expression, got \')\'',
    safari: 'Unexpected token \')\''
  }
];
