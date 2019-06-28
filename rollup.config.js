import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const plugins = [
  replace({
    include: ['resources/*/**'],
    VERSION: pkg.version
  }),
  json({
    // for tree-shaking, properties will be declared as
    // variables, using either `var` or `const`
    preferConst: false, // Default: false

    // specify indentation for the generated default export —
    // defaults to '\t'
    indent: '  ',

    // generate a named export for every property of the JSON object
    namedExports: false // Default: true
  }),
  resolve(),
  commonjs({
    // non-CommonJS modules will be ignored, but you can also
    // specifically include/exclude files
    // include: 'node_modules/**',  // Default: undefined
    exclude: ['resources/*/**'] // Default: undefined
    // these values can also be regular expressions
    // include: /node_modules/

    // search for files other than .js files (must already
    // be transpiled by a previous plugin!)
    // extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

    // if true then uses of `global` won't be dealt with by this plugin
    // ignoreGlobal: false,  // Default: false

    // if false then skip sourceMap generation for CommonJS modules
    // sourceMap: false,  // Default: true

    // explicitly specify unresolvable named exports
    // (see below for more details)
    // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

    // sometimes you have to leave require statements
    // unconverted. Pass an array containing the IDs
    // or a `id => boolean` function. Only use this
    // option if you know what you're doing!
    // ignore: [ 'conditional-runtime-dependency' ]
  })
];

export default [
  {
    input: 'src/main.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'mdprofile'
    },
    plugins: plugins
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: plugins
  }
];
