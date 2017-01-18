const fs = require('fs');
const request = require('request');

for (i = 1996; i < 2018; i++) {
  request
    .get('http://bvmf.bmfbovespa.com.br/InstDados/SerHist/COTAHIST_A'+i+'.ZIP')
    .on('error', function(err) {
      console.log(err)
    })
    .pipe(fs.createWriteStream('./dados/COTAHIST_A'+i+'.ZIP'))
}
