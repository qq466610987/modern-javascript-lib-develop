/*!
* modern-javascript-lib-develop 1.0.0
* licensed under MIT
*/

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
function clone(source) {
  var t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }
  var target;
  if (t === 'object') {
    target = {};
    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]);
      }
    }
  } else {
    target = [];
    for (var _i = 0; _i < source.length; _i++) {
      target.push(clone(source[_i]));
    }
  }
  return target;
}

exports.clone = clone;
