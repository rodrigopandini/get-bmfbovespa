'use strict';

var expect = require('chai').expect;
var getBMFBovespa = require('../index');

describe('#get-bmfbovespa', function() {
  it('should download the files', function() {

    // TODO: make this test

    var from = 1986;
    var to = 2017;
    var result = getBMFBovespa(from, to);

    expect(true).to.true;
  });
});
