'use strict';

const fs = require('fs');
const request = require('request');
const progress = require('request-progress');

/**
 * Make the download of BM&F/Bovespa historic data
 * @param {number} from
 * @param {number} to
 */
module.exports = function(from, to) {
  for (let i = from; i <= to; i++) {
    progress(request('http://bvmf.bmfbovespa.com.br/InstDados/SerHist/COTAHIST_A'+i+'.ZIP'))
      .on('progress', function (state) { 
        console.log('progress', state);
      })
      .on('error', function (err) {
        console.log(err);

      })
      .on('end', function () {

      })
      .pipe(fs.createWriteStream('./market-data/COTAHIST_A'+i+'.ZIP'));
  }
}
