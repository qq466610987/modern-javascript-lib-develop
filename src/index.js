
function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

function clone(source) {
  const t = type(source)
  if (t !== 'object' && t !== 'array') {
    return source
  }

  let target;

  if (t === 'object') {
    target = {}
    for (let i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i])
      }
    }
  } else {
    target = []
    for (let i = 0; i < source.length; i++) {
      target.push(clone(source[i]))
    }
  }

  return target
}

function getUrlParam(key) {
  const query = location.search[0] === '?' ? location.search.slice(1) : location.search;
  const map = query.split('&').reduce((data, key) => {
    const arr = key.split('=')
    data[arr[0]] = arr[1]
    return data
  }, {})
  return map[key]
}
export { clone, getUrlParam }
