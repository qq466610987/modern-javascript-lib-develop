let nodeResolve = require('rollup-plugin-node-resolve')
var common = require('./rollup')
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'clone',
    banner: common.banner
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js']
    }),
    common.getCompiler(),
  ]
}