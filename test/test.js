const expect = require('expect.js')
const clone = require('../src/index.js').clone
const JSDOM = require('mocha-jsdom')
const getUrlParam = require('../src/index.js').getUrlParam

describe('function clone', function () {
  describe('param data', function () {
    it('正确测的测试用例', function () {
      //基本数据类型
      expect(clone('abc')).to.equal('abc')

      // 数组
      var arr = [1, 2]
      var clonearr = clone(arr)
      expect(clonearr).to.eql(arr)
      expect(clonearr).not.to.equal(arr);
      // 对象
      var obj = { a: { b: 1 } }
      var cloneObj = clone(obj)
      expect(obj).not.to.equal(cloneObj)
      expect(cloneObj).to.eql(obj)
    })

    it('边界值测试用例', function () {
      expect(clone()).to.equal(undefined)

      expect(clone(undefined)).to.equal(undefined)

      expect(clone(null)).to.equal(null)
    })
  })
})

describe('获取当前URL中参数', function () {
  JSDOM({ url: 'https://***.com/?a=1' })

  it('参数(id)的值', function () {
    expect(getUrlParam('a')).to.be.equal('1')
  })
})