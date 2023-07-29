//banner
const babel = require('rollup-plugin-babel')
var pkg = require('../package.json')
var version = pkg.version
var banner = `/*!
* ${pkg.name} ${version}
* licensed under MIT
*/
`
exports.banner = banner

function getCompiler(opt) {
  return babel({
    babelrc: false,
    plugins: [[
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,

      }
    ]],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers:
              'last 2 versions, > 1%, Chrome >=45, safari >=10',
            node: '0.12'
          },
          modules: false
        }
      ],
    ],

    runtimeHelpers: true,
    exclude: 'node_modules/**'
  })
}
exports.getCompiler = getCompiler;